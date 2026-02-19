import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ConsultationAdminEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  companyName?: string;
  projectType?: string;
  projectBudget?: string;
  projectDetails: string;
}

export const ConsultationAdminEmail = ({
  firstName = 'John',
  lastName = 'Doe',
  email = 'john@example.com',
  phone,
  companyName,
  projectType = 'Not specified',
  projectBudget = 'Not specified',
  projectDetails = 'Project details...',
}: ConsultationAdminEmailProps) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <Html>
      <Head />
      <Preview>New consultation request from {fullName}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={h1}>Axentrixx</Heading>
            <Text style={tagline}>Technology Solutions</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h2}>📅 New Consultation Request</Heading>

            <Section style={urgentBadge}>
              <Text style={urgentText}>⏰ New Lead - Response Required</Text>
            </Section>

            <Text style={text}>
              A potential client has requested a consultation through your website.
            </Text>

            {/* Contact Details */}
            <Section style={infoBox}>
              <Text style={sectionTitle}>Contact Information</Text>
              <table style={tableStyle}>
                <tr>
                  <td style={labelStyle}>Name:</td>
                  <td style={valueStyle}><strong>{fullName}</strong></td>
                </tr>
                <tr>
                  <td style={labelStyle}>Email:</td>
                  <td style={valueStyle}>
                    <Link href={`mailto:${email}`} style={linkStyle}>{email}</Link>
                  </td>
                </tr>
                {phone && (
                  <tr>
                    <td style={labelStyle}>Phone:</td>
                    <td style={valueStyle}>{phone}</td>
                  </tr>
                )}
                {companyName && (
                  <tr>
                    <td style={labelStyle}>Company:</td>
                    <td style={valueStyle}><strong>{companyName}</strong></td>
                  </tr>
                )}
              </table>
            </Section>

            {/* Project Details */}
            <Section style={projectBox}>
              <Text style={sectionTitle}>Project Information</Text>
              <table style={tableStyle}>
                <tr>
                  <td style={labelStyle}>Type:</td>
                  <td style={valueStyle}>{projectType}</td>
                </tr>
                <tr>
                  <td style={labelStyle}>Budget:</td>
                  <td style={valueStyle}><strong>{projectBudget}</strong></td>
                </tr>
              </table>
            </Section>

            {/* Project Details */}
            <Section style={detailsBox}>
              <Text style={sectionTitle}>Project Description</Text>
              <Text style={detailsText}>{projectDetails}</Text>
            </Section>

            {/* Action Buttons */}
            <Section style={buttonContainer}>
              <Button style={primaryButton} href={`mailto:${email}?subject=Re: Consultation Request - ${companyName || fullName}`}>
                Reply to Client
              </Button>
            </Section>
          </Section>

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              © 2026 Axentrixx. All rights reserved.
            </Text>
            <Text style={footerText}>
              <Link href="https://axentrixx.com" style={footerLink}>
                axentrixx.com
              </Link>
              {' '} | {' '}
              <Link href="mailto:sales@axentrixx.com" style={footerLink}>
                sales@axentrixx.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ConsultationAdminEmail;

// Styles
const main = {
  backgroundColor: '#f5f5f5',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '0',
  maxWidth: '600px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const header = {
  background: 'linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%)',
  padding: '32px 24px',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: '700',
  margin: '0 0 8px',
  letterSpacing: '-0.5px',
};

const tagline = {
  color: '#e0e7ff',
  fontSize: '14px',
  margin: '0',
  fontWeight: '400',
};

const content = {
  padding: '32px 24px',
};

const h2 = {
  color: '#1e3a5f',
  fontSize: '24px',
  fontWeight: '700',
  margin: '0 0 16px',
};

const urgentBadge = {
  backgroundColor: '#fef3c7',
  border: '2px solid #f59e0b',
  borderRadius: '8px',
  padding: '12px',
  marginBottom: '24px',
  textAlign: 'center' as const,
};

const urgentText = {
  color: '#92400e',
  fontSize: '14px',
  fontWeight: '700',
  margin: '0',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 24px',
};

const sectionTitle = {
  color: '#1e3a5f',
  fontSize: '16px',
  fontWeight: '700',
  margin: '0 0 12px',
};

const infoBox = {
  backgroundColor: '#f0fdf4',
  border: '1px solid #86efac',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '16px',
};

const projectBox = {
  backgroundColor: '#eff6ff',
  border: '1px solid #bfdbfe',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '16px',
};

const detailsBox = {
  backgroundColor: '#fffbeb',
  border: '1px solid #fde68a',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '24px',
};

const detailsText = {
  color: '#451a03',
  fontSize: '15px',
  lineHeight: '24px',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse' as const,
};

const labelStyle = {
  color: '#64748b',
  fontSize: '14px',
  fontWeight: '600',
  padding: '8px 16px 8px 0',
  verticalAlign: 'top' as const,
  width: '100px',
};

const valueStyle = {
  color: '#1e293b',
  fontSize: '14px',
  padding: '8px 0',
};

const linkStyle = {
  color: '#00A99D',
  textDecoration: 'none',
};

const buttonContainer = {
  textAlign: 'center' as const,
  marginTop: '32px',
};

const primaryButton = {
  backgroundColor: '#F7941D',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 32px',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '0',
};

const footer = {
  padding: '24px',
  textAlign: 'center' as const,
  backgroundColor: '#f9fafb',
};

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '4px 0',
};

const footerLink = {
  color: '#00A99D',
  textDecoration: 'none',
};
