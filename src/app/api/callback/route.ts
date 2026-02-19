import { NextRequest } from 'next/server';
import { z } from 'zod';
import { sendAdminEmail } from '@/lib/email';
import { isRateLimited, getClientIP, rateLimitResponse, errorResponse, successResponse } from '@/lib/api-utils';
import { createClient } from '@supabase/supabase-js';
import React from 'react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const callbackSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    if (isRateLimited(`callback:${clientIP}`)) {
      return rateLimitResponse();
    }

    // Parse and validate body
    const body = await request.json();
    const result = callbackSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.issues.map((e) => e.message).join(', ');
      return errorResponse(errors);
    }

    const { name, phone } = result.data;

    // Save to database
    const { error: dbError } = await supabase
      .from('Callback')
      .insert({
        name,
        phone,
        status: 'NEW',
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return errorResponse('Failed to save your request. Please try again.', 500);
    }

    // Send admin notification email (fire and forget)
    sendAdminEmail(
      `Callback Request from ${name}`,
      React.createElement('div', null,
        React.createElement('h2', null, 'New Callback Request'),
        React.createElement('p', null, `Name: ${name}`),
        React.createElement('p', null, `Phone: ${phone}`),
        React.createElement('p', null, `Requested at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`),
        React.createElement('hr'),
        React.createElement('p', { style: { color: '#666' } }, 'Please call back at your earliest convenience.')
      )
    ).catch(console.error);

    return successResponse({ message: 'Your callback request has been received!' }, 201);
  } catch (error) {
    console.error('Callback API error:', error);
    return errorResponse('Something went wrong. Please try again later.', 500);
  }
}
