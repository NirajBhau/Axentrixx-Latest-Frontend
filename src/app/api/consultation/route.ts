import { NextRequest } from 'next/server';
import { consultationSchema } from '@/lib/validations';
import { sendAdminEmail, sendUserEmail } from '@/lib/email';
import { isRateLimited, getClientIP, rateLimitResponse, errorResponse, successResponse } from '@/lib/api-utils';
import { ConsultationAdminEmail } from '@/emails/consultation-admin';
import { ConsultationUserEmail } from '@/emails/consultation-user';
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
    if (isRateLimited(`consultation:${clientIP}`)) {
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

    const result = consultationSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.issues.map((e) => e.message).join(', ');
      return errorResponse(errors);
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      countryCode,
      companyName,
      projectType,
      projectBudget,
      projectDetails,
    } = result.data;

    // Save to database
    const { error: dbError } = await supabase
      .from('Consultation')
      .insert({
        firstName,
        lastName,
        email,
        phone: phone || null,
        countryCode: countryCode || null,
        companyName: companyName || null,
        projectType: projectType || null,
        projectBudget: projectBudget || null,
        projectDetails,
        status: 'NEW',
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return errorResponse('Failed to submit your request. Please try again.', 500);
    }

    // Send admin notification email (fire and forget)
    sendAdminEmail(
      `New Consultation Request: ${firstName} ${lastName}${companyName ? ` - ${companyName}` : ''}`,
      React.createElement(ConsultationAdminEmail, {
        firstName,
        lastName,
        email,
        phone: phone || undefined,
        companyName: companyName || undefined,
        projectType: projectType || undefined,
        projectBudget: projectBudget || undefined,
        projectDetails,
      })
    ).catch(console.error);

    // Send user confirmation email (fire and forget)
    sendUserEmail(
      email,
      'Your Consultation Request - Axentrixx',
      React.createElement(ConsultationUserEmail, { firstName, lastName })
    ).catch(console.error);

    return successResponse(
      { message: 'Your consultation request has been submitted successfully!' },
      201
    );
  } catch (error) {
    console.error('Consultation API error:', error);
    return errorResponse('Something went wrong. Please try again later.', 500);
  }
}
