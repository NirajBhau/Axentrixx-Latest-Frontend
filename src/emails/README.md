# Email Templates

This directory contains professional, branded email templates for all Axentrixx communications.

## 📧 Templates

### Contact Form
- **contact-admin.tsx** - Admin notification for new contact form submissions
- **contact-user.tsx** - User confirmation after submitting contact form

### Newsletter
- **newsletter-welcome.tsx** - Welcome email for newsletter subscribers

### Consultation
- **consultation-admin.tsx** - Admin notification for new consultation requests
- **consultation-user.tsx** - User confirmation after booking a consultation

### Job Applications
- **job-application-admin.tsx** - Admin notification for new job applications (with resume link)
- **job-application-user.tsx** - User confirmation after submitting application

## 🎨 Design Features

All templates include:
- **Axentrixx Branding** - Navy blue gradient header (#1e3a5f to #2c5282)
- **Professional Typography** - System fonts for reliability
- **Color-coded Sections** - Different colors for different content types
- **Responsive Design** - Works on all email clients
- **Call-to-Action Buttons** - Orange (#F7941D) for primary actions
- **Footer** - Consistent branding and links

## 🚀 Usage

These templates are used by the API routes in `/api/*` to send emails via Resend.

Example:
```typescript
import { ContactAdminEmail } from '@/emails/contact-admin';
import { render } from '@react-email/render';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailHtml = render(ContactAdminEmail({
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'Inquiry',
  message: 'Hello!',
}));

await resend.emails.send({
  from: process.env.EMAIL_FROM,
  to: process.env.EMAIL_TO,
  subject: 'New Contact Form Submission',
  html: emailHtml,
});
```

## 📝 Brand Colors

- **Navy Blue**: #1e3a5f (Header background)
- **Teal**: #00A99D (Links, secondary CTAs)
- **Orange**: #F7941D (Primary CTAs)
- **Success Green**: #10b981 (Confirmations)
- **Warning Yellow**: #f59e0b (Urgent items)

## ⚠️ Production Reminder

**Before going to production:**
- Verify `axentrixx.com` domain in Resend
- Update `EMAIL_FROM` in `.env` to `noreply@axentrixx.com`
- Test all email templates in production
- Check spam folder placement
