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

interface JobApplicationUserEmailProps {
  firstName: string;
  lastName: string;
  jobTitle?: string;
}

export const JobApplicationUserEmail = ({
  firstName = 'John',
  lastName = 'Doe',
  jobTitle = 'the position',
}: JobApplicationUserEmailProps) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <Html>
      <Head />
      <Preview>Your application to Axentrixx has been received</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={h1}>Axentrixx</Heading>
            <Text style={tagline}>Technology Solutions</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h2}>Application Received! 🎯</Heading>

            <Text style={text}>
              Dear {fullName},
            </Text>

            <Text style={text}>
              Thank you for your interest in joining the Axentrixx team! We've successfully received your application for <strong>{jobTitle}</strong>.
            </Text>

            <Section style={confirmBox}>
              <Text style={confirmEmoji}>✅</Text>
              <Text style={confirmTitle}>Application Submitted Successfully</Text>
              <Text style={confirmText}>
                Your resume and application materials are now with our HR team for review.
              </Text>
            </Section>

            <Section style={timelineBox}>
              <Text style={timelineTitle}>📅 What to Expect Next:</Text>
              <Text style={stepItem}><strong>1-2 weeks:</strong> Application review by our HR team</Text>
              <Text style={stepItem}><strong>If selected:</strong> We'll contact you for the next steps</Text>
              <Text style={stepItem}><strong>Interviews:</strong> Technical & cultural fit assessments</Text>
              <Text style={stepItem}><strong>Final decision:</strong> We'll keep you updated throughout</Text>
            </Section>

            <Section style={tipsBox}>
              <Text style={tipsTitle}>💡 In the meantime:</Text>
              <Text style={tipText}>
                ✓ Keep an eye on your email (including spam folder)<br />
                ✓ Connect with us on LinkedIn<br />
                ✓ Explore our website to learn more about our work<br />
                ✓ Prepare for potential technical discussions
              </Text>
            </Section>

            <Text style={text}>
              We appreciate your patience during our review process. If you have any questions, feel free to reach out to us at{' '}
              <Link href="mailto:sales@axentrixx.com" style={linkStyle}>
                sales@axentrixx.com
              </Link>
            </Text>

            <Section style={closingBox}>
              <Text style={closingText}>
                Thank you for considering Axentrixx as your next career destination. We're excited to review your application!
              </Text>
            </Section>

            <Text style={signature}>
              Best of luck!<br />
              <strong>The Axentrixx Hiring Team</strong>
            </Text>
          </Section>

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              © 2026 Axentrixx. All rights reserved.
            </Text>
            <Text style={footerText}>
              <Link href="https://axentrixx.com/careers" style={footerLink}>
                View open positions
              </Link>
              {' '} | {' '}
              <Link href="https://axentrixx.com" style={footerLink}>
                About us
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default JobApplicationUserEmail;

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

const confirmBox = {
  backgroundColor: '#ecfdf5',
  border: '2px solid #10b981',
  borderRadius: '12px',
  padding: '24px',
  marginBottom: '24px',
  textAlign: 'center' as const,
};

const confirmEmoji = {
  fontSize: '48px',
  margin: '0 0 12px',
};

const confirmTitle = {
  color: '#065f46',
  fontSize: '18px',
  fontWeight: '700',
  margin: '0 0 12px',
};

const confirmText = {
  color: '#047857',
  fontSize: '15px',
  lineHeight: '24px',
  margin: '0',
};

const timelineBox = {
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '24px',
};

const timelineTitle = {
  color: '#0c4a6e',
  fontSize: '16px',
  fontWeight: '700',
  margin: '0 0 16px',
};

const stepItem = {
  color: '#1e293b',
  fontSize: '15px',
  margin: '10px 0',
  lineHeight: '22px',
};

const tipsBox = {
  backgroundColor: '#fef3c7',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '24px',
};

const tipsTitle = {
  color: '#92400e',
  fontSize: '16px',
  fontWeight: '700',
  margin: '0 0 12px',
};

const tipText = {
  color: '#78350f',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '0',
};

const closingBox = {
  backgroundColor: '#f5f3ff',
  borderRadius: '8px',
  padding: '20px',
  marginTop: '24px',
  marginBottom: '24px',
  textAlign: 'center' as const,
};

const closingText = {
  color: '#5b21b6',
  fontSize: '15px',
  lineHeight: '24px',
  margin: '0',
  fontWeight: '500',
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
