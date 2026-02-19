import { NextRequest } from 'next/server';
import { jobApplicationSchema } from '@/lib/validations';
import { sendAdminEmail, sendUserEmail } from '@/lib/email';
import { isRateLimited, getClientIP, rateLimitResponse, errorResponse, successResponse } from '@/lib/api-utils';
import { JobApplicationAdminEmail } from '@/emails/job-application-admin';
import { JobApplicationUserEmail } from '@/emails/job-application-user';
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
    if (isRateLimited(`job:${clientIP}`)) {
      return rateLimitResponse();
    }

    // Parse and validate body
    const body = await request.json();
    const result = jobApplicationSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.issues.map((e) => e.message).join(', ');
      return errorResponse(errors);
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      jobId,
      jobTitle,
      coverLetter,
      resumeUrl,
      resumeFileName,
      resumeSize,
    } = result.data;

    // Save to database
    const { error: dbError } = await supabase
      .from('JobApplication')
      .insert({
        firstName,
        lastName,
        email,
        phone: phone || null,
        jobId: jobId || null,
        jobTitle: jobTitle || null,
        coverLetter: coverLetter || null,
        resumeUrl,
        resumeFileName,
        resumeSize,
        status: 'NEW',
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return errorResponse('Failed to submit your application. Please try again.', 500);
    }

    // Send admin notification email (fire and forget)
    sendAdminEmail(
      `New Job Application: ${firstName} ${lastName}${jobTitle ? ` - ${jobTitle}` : ''}`,
      React.createElement(JobApplicationAdminEmail, {
        firstName,
        lastName,
        email,
        phone: phone || undefined,
        jobTitle: jobTitle || undefined,
        coverLetter: coverLetter || undefined,
        resumeUrl,
        resumeFileName,
      })
    ).catch(console.error);

    // Send user confirmation email (fire and forget)
    sendUserEmail(
      email,
      'Application Received - Axentrixx',
      React.createElement(JobApplicationUserEmail, {
        firstName,
        lastName,
        jobTitle: jobTitle || undefined,
      })
    ).catch(console.error);

    return successResponse(
      { message: 'Your application has been submitted successfully!' },
      201
    );
  } catch (error) {
    console.error('Job Application API error:', error);
    return errorResponse('Something went wrong. Please try again later.', 500);
  }
}
