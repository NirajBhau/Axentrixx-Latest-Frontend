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

interface ConsultationUserEmailProps {
  firstName: string;
  lastName: string;
}

export const ConsultationUserEmail = ({
  firstName = 'John',
  lastName = 'Doe',
}: ConsultationUserEmailProps) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <Html>
      <Head />
      <Preview>Your consultation request has been received</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={h1}>Axentrixx</Heading>
            <Text style={tagline}>Technology Solutions</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h2}>Thank You for Your Interest! 🚀</Heading>

            <Text style={text}>
              Dear {fullName},
            </Text>

            <Text style={text}>
              Thank you for requesting a consultation with Axentrixx. We're excited to learn more about your project and explore how we can help bring your vision to life.
            </Text>

            <Section style={confirmBox}>
              <Text style={confirmEmoji}>✅</Text>
              <Text style={confirmTitle}>Consultation Request Received</Text>
              <Text style={confirmText}>
                Our team is reviewing your request and will reach out within <strong>24-48 hours</strong> to schedule your consultation.
              </Text>
            </Section>

            <Section style={nextStepsBox}>
              <Text style={nextStepsTitle}>What Happens Next?</Text>
              <Text style={stepItem}>1️⃣ Our team reviews your project details</Text>
              <Text style={stepItem}>2️⃣ We'll contact you to schedule a consultation call</Text>
              <Text style={stepItem}>3️⃣ We discuss your requirements in detail</Text>
              <Text style={stepItem}>4️⃣ We provide a customized solution proposal</Text>
            </Section>

            <Section style={prepareBox}>
              <Text style={prepareTitle}>📋 In the meantime:</Text>
              <Text style={prepareText}>
                • Gather any reference materials or inspiration<br />
                • List your project's must-have features<br />
                • Think about your ideal timeline<br />
                • Prepare any questions you'd like to ask
              </Text>
            </Section>

            <Text style={text}>
              If you have any urgent questions, feel free to reach out directly at{' '}
              <Link href="mailto:sales@axentrixx.com" style={linkStyle}>
                sales@axentrixx.com
              </Link>
            </Text>

            <Text style={signature}>
              Looking forward to working with you!<br />
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

export default ConsultationUserEmail;

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

const nextStepsBox = {
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '24px',
};

const nextStepsTitle = {
  color: '#0c4a6e',
  fontSize: '16px',
  fontWeight: '700',
  margin: '0 0 16px',
};

const stepItem = {
  color: '#1e293b',
  fontSize: '15px',
  margin: '8px 0',
  lineHeight: '22px',
};

const prepareBox = {
  backgroundColor: '#fffbeb',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '24px',
};

const prepareTitle = {
  color: '#92400e',
  fontSize: '16px',
  fontWeight: '700',
  margin: '0 0 12px',
};

const prepareText = {
  color: '#451a03',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '0',
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
