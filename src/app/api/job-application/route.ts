import { NextRequest } from 'next/server';
import { jobApplicationSchema } from '@/lib/validations';
import { sendAdminEmail, sendUserEmail } from '@/lib/email';
import { isRateLimited, getClientIP, rateLimitResponse, errorResponse, successResponse } from '@/lib/api-utils';
import { JobApplicationAdminEmail } from '@/emails/job-application-admin';
import { JobApplicationUserEmail } from '@/emails/job-application-user';
import { createClient } from '@supabase/supabase-js';
import React from 'react';

const getSupabase = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) return null;
  try {
    return createClient(url, key);
  } catch {
    return null;
  }
};

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    if (isRateLimited(`job:${clientIP}`)) {
      return rateLimitResponse();
    }

    const contentType = request.headers.get('content-type') || '';
    let parsedBody: Record<string, unknown> = {};

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      const firstName = (formData.get('firstName') as string) || '';
      const lastName = (formData.get('lastName') as string) || '';
      const email = (formData.get('email') as string) || '';
      const phone = (formData.get('phone') as string) || '';
      const jobTitle = (formData.get('jobTitle') as string) || '';
      const jobId = (formData.get('jobId') as string) || undefined;
      const coverLetter = (formData.get('coverLetter') as string) || undefined;
      const resumeFile = formData.get('resume') as File | null;

      let resumeUrl = 'https://axentrixx.com/careers';
      let resumeFileName = 'resume.pdf';
      let resumeSize = 1024;

      if (resumeFile && resumeFile instanceof File) {
        resumeFileName = resumeFile.name;
        resumeSize = resumeFile.size;

        const supabase = getSupabase();
        if (supabase) {
          try {
            const fileExt = resumeFileName.split('.').pop() || 'pdf';
            const fileName = `${Date.now()}_${firstName.replace(/[^a-zA-Z0-9]/g, '_')}_${lastName.replace(/[^a-zA-Z0-9]/g, '_')}.${fileExt}`;
            const arrayBuffer = await resumeFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const { error: uploadError } = await supabase.storage
              .from('resumes')
              .upload(fileName, buffer, {
                contentType: resumeFile.type || 'application/octet-stream',
                upsert: true,
              });

            if (!uploadError) {
              const { data: urlData } = supabase.storage
                .from('resumes')
                .getPublicUrl(fileName);
              if (urlData?.publicUrl) {
                resumeUrl = urlData.publicUrl;
              }
            } else {
              console.error('Supabase storage upload error:', uploadError);
            }
          } catch (e) {
            console.error('Failed to upload file to storage:', e);
          }
        }
      }

      parsedBody = {
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
      };
    } else {
      parsedBody = await request.json();
    }

    const result = jobApplicationSchema.safeParse(parsedBody);

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
    const supabase = getSupabase();
    if (supabase) {
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
      }
    }

    // Send admin notification email to HR (fire and forget)
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
      }),
      process.env.EMAIL_TO_HR || 'hr@axentrixx.com'
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
