import {
  Body,
  Container,
  Head,
  Html,
  Img,
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
  return (
    <Html>
      <Head />
      <Preview>Thank you for your application to Axentrixx!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={content}>
            <Text style={text}>
              Hello {firstName.toUpperCase()},
            </Text>

            <Text style={text}>
              Thank you for your application for the {jobTitle} position at Axentrixx. We appreciate your interest in joining the team and thank you for the time and energy you invested in your application.
            </Text>

            <Text style={text}>
              Your resume and application materials are currently under review by our team. If your qualifications align with our current needs, we will contact you to schedule the next step in the process.
            </Text>

            <Text style={text}>
              We encourage you to review our website to learn more about our company values and recent projects.
            </Text>

            <Text style={text}>
              We wish you every personal and professional success in your future endeavors. Once again, thank you for your interest in working with us.
            </Text>

            <Text style={text}>
              Sincerely,<br />
              Axentrixx Talent Acquisition Team
            </Text>

            <Img
              src="https://axentrixx.com/images/logo/axenlogo.png"
              width="150"
              alt="Axentrixx"
              style={logo}
            />
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default JobApplicationUserEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 0',
  maxWidth: '600px',
};

const content = {
  padding: '0 24px',
};

const text = {
  color: '#333333',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '0 0 16px',
};

const logo = {
  marginTop: '32px',
};
