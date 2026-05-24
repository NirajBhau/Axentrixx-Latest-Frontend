import { NextRequest } from 'next/server';
import { partnerSchema } from '@/lib/validations';
import { sendEmail, sendUserEmail } from '@/lib/email';
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
    if (isRateLimited(`partner:${clientIP}`)) {
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

    const result = partnerSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.issues.map((e) => e.message).join(', ');
      return errorResponse(errors);
    }

    const { name, email, phone, companyName, websiteUrl, devNeed, message } = result.data;

    // Save to database
    const { error: dbError } = await supabase
      .from('Partner')
      .insert({
        name,
        email,
        phone: phone || null,
        companyName,
        websiteUrl: websiteUrl || null,
        devNeed,
        message,
        status: 'NEW',
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return errorResponse('Failed to save your partner request. Please try again.', 500);
    }

    // Format content for email
    const subject = `Agency Partner Request from ${companyName}`;
    const formattedEmailMessage = `
Company Name: ${companyName}
Website URL: ${websiteUrl || 'Not provided'}
Estimated Monthly Need: ${devNeed}

Requirements / Message:
${message}
    `.trim();

    // Send admin notification email to sales@axentrixx.com (fire and forget)
    sendEmail({
      to: process.env.EMAIL_TO || 'sales@axentrixx.com',
      subject: `New Partner Request: ${subject}`,
      react: React.createElement(ContactAdminEmail, { 
        name, 
        email, 
        phone: phone || undefined, 
        subject, 
        message: formattedEmailMessage 
      })
    }).catch(console.error);

    // Send user confirmation email (fire and forget)
    sendUserEmail(
      email,
      'Your Agency Partner Application - Axentrixx',
      React.createElement(ContactUserEmail, { name })
    ).catch(console.error);

    return successResponse({ message: 'Your partner application has been submitted successfully!' }, 201);
  } catch (error) {
    console.error('Partner API error:', error);
    return errorResponse('Something went wrong. Please try again later.', 500);
  }
}
