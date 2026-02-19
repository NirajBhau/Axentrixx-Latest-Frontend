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

interface NewsletterWelcomeEmailProps {
  email: string;
}

export const NewsletterWelcomeEmail = ({
  email = 'subscriber@example.com',
}: NewsletterWelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Axentrixx Newsletter!</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={h1}>Axentrixx</Heading>
            <Text style={tagline}>Technology Solutions</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h2}>Welcome to Our Newsletter! 🎉</Heading>

            <Text style={text}>
              Thank you for subscribing to the Axentrixx newsletter!
            </Text>

            <Section style={welcomeBox}>
              <Text style={welcomeEmoji}>✉️</Text>
              <Text style={welcomeText}>
                You're now part of our community and will receive:
              </Text>
              <Section style={benefitsBox}>
                <Text style={benefitItem}>📰 Latest tech insights and trends</Text>
                <Text style={benefitItem}>🚀 Product updates and new features</Text>
                <Text style={benefitItem}>💡 Expert tips and best practices</Text>
                <Text style={benefitItem}>🎁 Exclusive offers and early access</Text>
              </Section>
            </Section>

            <Text style={text}>
              We're committed to delivering valuable content directly to your inbox. Expect to hear from us with exciting updates, industry insights, and exclusive opportunities.
            </Text>

            <Section style={ctaBox}>
              <Text style={ctaText}>
                Want to learn more about our services?
              </Text>
              <Link href="https://axentrixx.com" style={ctaLink}>
                Explore Axentrixx →
              </Link>
            </Section>

            <Text style={smallText}>
              <strong>Note:</strong> You can unsubscribe at any time by clicking the unsubscribe link in any of our emails.
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
              You're receiving this email because you subscribed to our newsletter at axentrixx.com
            </Text>
            <Text style={footerText}>
              <Link href="https://axentrixx.com" style={footerLink}>
                Visit website
              </Link>
              {' '} | {' '}
              <Link href={`mailto:sales@axentrixx.com?subject=Unsubscribe Request&body=Please unsubscribe ${email}`} style={footerLink}>
                Unsubscribe
              </Link>
            </Text>
            <Text style={footerText}>
              © 2026 Axentrixx. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default NewsletterWelcomeEmail;

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
  margin: '0 0 24px',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 20px',
};

const welcomeBox = {
  backgroundColor: '#f0f9ff',
  border: '2px solid #0284c7',
  borderRadius: '12px',
  padding: '24px',
  marginBottom: '24px',
  textAlign: 'center' as const,
};

const welcomeEmoji = {
  fontSize: '48px',
  margin: '0 0 16px',
};

const welcomeText = {
  color: '#0c4a6e',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0 0 16px',
};

const benefitsBox = {
  textAlign: 'left' as const,
  marginTop: '16px',
};

const benefitItem = {
  color: '#1e293b',
  fontSize: '15px',
  margin: '8px 0',
};

const ctaBox = {
  backgroundColor: '#fffbeb',
  borderRadius: '8px',
  padding: '24px',
  textAlign: 'center' as const,
  marginBottom: '24px',
};

const ctaText = {
  color: '#92400e',
  fontSize: '16px',
  margin: '0 0 16px',
  fontWeight: '600',
};

const ctaLink = {
  color: '#F7941D',
  fontSize: '16px',
  fontWeight: '700',
  textDecoration: 'none',
};

const smallText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '24px 0',
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
  margin: '8px 0',
};

const footerLink = {
  color: '#00A99D',
  textDecoration: 'none',
};
