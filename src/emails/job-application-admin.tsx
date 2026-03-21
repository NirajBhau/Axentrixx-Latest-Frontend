import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Link,
} from '@react-email/components';
import * as React from 'react';

interface JobApplicationAdminEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  jobTitle?: string;
  coverLetter?: string;
  resumeUrl: string;
  resumeFileName: string;
}

export const JobApplicationAdminEmail = ({
  firstName = 'John',
  lastName = 'Doe',
  email = 'john@example.com',
  phone,
  jobTitle = 'Position not specified',
  coverLetter,
  resumeUrl = '#',
  resumeFileName = 'resume.pdf',
}: JobApplicationAdminEmailProps) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <Html>
      <Head />
      <Preview>New application received for {jobTitle}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={content}>
            <Text style={text}>
              Hello Team,
            </Text>

            <Text style={text}>
              A new candidate has submitted an application for the {jobTitle} position at Axentrixx. Please review their details below.
            </Text>

            <Text style={text}>
              <strong>Candidate Details:</strong><br/>
              Name: {fullName}<br/>
              Email: <Link href={`mailto:${email}`} style={link}>{email}</Link><br/>
              {phone && <>Phone: {phone}<br/></>}
              Position Applied: {jobTitle}
            </Text>

            {coverLetter && (
              <Text style={text}>
                <strong>Cover Letter:</strong><br/>
                {coverLetter}
              </Text>
            )}

            <Text style={text}>
              <strong>Resume:</strong><br/>
              <Link href={resumeUrl} style={link}>View / Download {resumeFileName}</Link>
            </Text>

            <Text style={text}>
              To contact the candidate, you can reply directly to their email address above.
            </Text>

            <Text style={text}>
              Best,<br />
              Axentrixx Automated System
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

export default JobApplicationAdminEmail;

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
  lineHeight: '24px',
  margin: '0 0 16px',
};

const link = {
  color: '#0055ff',
  textDecoration: 'underline',
};

const logo = {
  marginTop: '32px',
};
