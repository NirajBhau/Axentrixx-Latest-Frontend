import { NextRequest } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { sendAdminEmail, sendUserEmail } from '@/lib/email';
import { isRateLimited, getClientIP, rateLimitResponse, errorResponse, successResponse } from '@/lib/api-utils';
import { ContactAdminEmail } from '@/emails/contact-admin';
import { ContactUserEmail } from '@/emails/contact-user';
import { createClient } from '@supabase/supabase-js';
import React from 'react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    if (isRateLimited(`contact:${clientIP}`)) {
      return rateLimitResponse();
    }

    // Parse and validate body
    const body = await request.json();

    // Verify reCAPTCHA
    const { captchaToken } = body;
    if (!captchaToken) {
      return errorResponse('CAPTCHA verification failed. Please try again.', 400);
    }

    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    });
    const verifyJson = await verifyRes.json();
    if (!verifyJson.success) {
      return errorResponse('Invalid CAPTCHA. Please try again.', 400);
    }

    const result = contactSchema.safeParse(body);


    if (!result.success) {
      const errors = result.error.issues.map((e) => e.message).join(', ');
      return errorResponse(errors);
    }

    const { name, email, phone, subject, message } = result.data;

    // Save to database
    const { error: dbError } = await supabase
      .from('Contact')
      .insert({
        name,
        email,
        phone: phone || null,
        subject,
        message,
        status: 'NEW',
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return errorResponse('Failed to save your message. Please try again.', 500);
    }

    // Send admin notification email (fire and forget)
    sendAdminEmail(
      `New Contact Form: ${subject}`,
      React.createElement(ContactAdminEmail, { name, email, phone: phone || undefined, subject, message })
    ).catch(console.error);

    // Send user confirmation email (fire and forget)
    sendUserEmail(
      email,
      'Thank you for contacting Axentrixx',
      React.createElement(ContactUserEmail, { name })
    ).catch(console.error);

    return successResponse({ message: 'Your message has been sent successfully!' }, 201);
  } catch (error) {
    console.error('Contact API error:', error);
    return errorResponse('Something went wrong. Please try again later.', 500);
  }
}
