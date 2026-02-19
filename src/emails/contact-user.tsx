import {
  Body,
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

interface ContactUserEmailProps {
  name: string;
}

export const ContactUserEmail = ({
  name = 'John Doe',
}: ContactUserEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting Axentrixx</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={h1}>Axentrixx</Heading>
            <Text style={tagline}>Technology Solutions</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h2}>Thank You for Reaching Out! 🎉</Heading>

            <Text style={text}>
              Dear {name},
            </Text>

            <Text style={text}>
              Thank you for contacting Axentrixx. We've received your message and our team will review it shortly.
            </Text>

            <Section style={highlightBox}>
              <Text style={highlightText}>
                ✅ Your inquiry has been received<br />
                ⏱️ Expected response time: <strong>24-48 hours</strong>
              </Text>
            </Section>

            <Text style={text}>
              One of our team members will get back to you as soon as possible. In the meantime, feel free to explore our services:
            </Text>

            <Section style={servicesBox}>
              <Text style={serviceItem}>🌐 Custom Web Development</Text>
              <Text style={serviceItem}>📱 Mobile App Development</Text>
              <Text style={serviceItem}>🏥 Healthcare Management Systems</Text>
              <Text style={serviceItem}>📊 Business Intelligence & Analytics</Text>
            </Section>

            <Text style={text}>
              If you have any urgent concerns, please don't hesitate to reach out directly at{' '}
              <Link href="mailto:sales@axentrixx.com" style={linkStyle}>
                sales@axentrixx.com
              </Link>
            </Text>

            <Text style={signature}>
              Best regards,<br />
              <strong>The Axentrixx Team</strong>
            </Text>
          </Section>

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              © 2026 Axentrixx. All rights reserved.
            </Text>
            <Text style={footerText}>
              <Link href="https://axentrixx.com" style={footerLink}>
                Visit our website
              </Link>
              {' '} | {' '}
              <Link href="mailto:sales@axentrixx.com" style={footerLink}>
                Contact us
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactUserEmail;

// Styles (reusing similar styles from admin email)
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
  margin: '0 0 24px',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 20px',
};

const highlightBox = {
  backgroundColor: '#ecfdf5',
  border: '2px solid #10b981',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '24px',
  textAlign: 'center' as const,
};

const highlightText = {
  color: '#065f46',
  fontSize: '15px',
  lineHeight: '24px',
  margin: '0',
};

const servicesBox = {
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '24px',
};

const serviceItem = {
  color: '#1e293b',
  fontSize: '15px',
  margin: '8px 0',
};

const linkStyle = {
  color: '#00A99D',
  textDecoration: 'none',
  fontWeight: '600',
};

const signature = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  marginTop: '32px',
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
