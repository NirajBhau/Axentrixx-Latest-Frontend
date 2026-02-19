import { Resend } from 'resend';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  react: React.ReactElement;
}

export async function sendEmail({ to, subject, react }: SendEmailOptions) {
  try {
    const html = await render(react);

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
    });

    if (error) {
      console.error('Email send error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email send exception:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

// Send admin notification
export async function sendAdminEmail(subject: string, react: React.ReactElement) {
  return sendEmail({
    to: process.env.EMAIL_TO || 'sales@axentrixx.com',
    subject,
    react,
  });
}

// Send user confirmation
export async function sendUserEmail(to: string, subject: string, react: React.ReactElement) {
  return sendEmail({
    to,
    subject,
    react,
  });
}
