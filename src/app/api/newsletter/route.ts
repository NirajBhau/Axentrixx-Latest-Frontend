import { NextRequest } from 'next/server';
import { newsletterSchema } from '@/lib/validations';
import { sendUserEmail } from '@/lib/email';
import { isRateLimited, getClientIP, rateLimitResponse, errorResponse, successResponse } from '@/lib/api-utils';
import { NewsletterWelcomeEmail } from '@/emails/newsletter-welcome';
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
    if (isRateLimited(`newsletter:${clientIP}`)) {
      return rateLimitResponse();
    }

    // Parse and validate body
    const body = await request.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.issues.map((e) => e.message).join(', ');
      return errorResponse(errors);
    }

    const { email } = result.data;

    // Check for duplicate subscription
    const { data: existing } = await supabase
      .from('Newsletter')
      .select('id, status')
      .eq('email', email)
      .single();

    if (existing) {
      if (existing.status === 'ACTIVE') {
        return errorResponse('This email is already subscribed to our newsletter.');
      }

      // Reactivate unsubscribed user
      const { error: updateError } = await supabase
        .from('Newsletter')
        .update({
          status: 'ACTIVE',
          subscribedAt: new Date().toISOString(),
          unsubscribedAt: null,
        })
        .eq('id', existing.id);

      if (updateError) {
        console.error('Database error:', updateError);
        return errorResponse('Failed to subscribe. Please try again.', 500);
      }
    } else {
      // New subscription
      const { error: dbError } = await supabase
        .from('Newsletter')
        .insert({
          email,
          status: 'ACTIVE',
        });

      if (dbError) {
        console.error('Database error:', dbError);
        return errorResponse('Failed to subscribe. Please try again.', 500);
      }
    }

    // Send welcome email (fire and forget)
    sendUserEmail(
      email,
      'Welcome to the Axentrixx Newsletter! 🎉',
      React.createElement(NewsletterWelcomeEmail, { email })
    ).catch(console.error);

    return successResponse({ message: 'Successfully subscribed to our newsletter!' }, 201);
  } catch (error) {
    console.error('Newsletter API error:', error);
    return errorResponse('Something went wrong. Please try again later.', 500);
  }
}
