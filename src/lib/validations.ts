import { z } from 'zod';

// Contact Form Validation
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .max(20, 'Phone number is too long')
    .optional()
    .or(z.literal('')),
  subject: z
    .string()
    .min(2, 'Subject must be at least 2 characters')
    .max(200, 'Subject must be less than 200 characters')
    .trim(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters')
    .trim(),
});

// Newsletter Subscription Validation
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .trim()
    .toLowerCase(),
});

// Consultation Form Validation
export const consultationSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .trim(),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .max(20, 'Phone number is too long')
    .optional()
    .or(z.literal('')),
  countryCode: z
    .string()
    .max(10)
    .optional()
    .or(z.literal('')),
  companyName: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
  projectType: z
    .string()
    .max(100)
    .optional()
    .or(z.literal('')),
  projectBudget: z
    .string()
    .max(100)
    .optional()
    .or(z.literal('')),
  projectDetails: z
    .string()
    .min(10, 'Project details must be at least 10 characters')
    .max(5000, 'Project details must be less than 5000 characters')
    .trim(),
});

// Job Application Validation
export const jobApplicationSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .trim(),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .max(20, 'Phone number is too long')
    .optional()
    .or(z.literal('')),
  jobId: z.string().optional(),
  jobTitle: z.string().max(200).optional(),
  coverLetter: z
    .string()
    .max(5000, 'Cover letter must be less than 5000 characters')
    .optional()
    .or(z.literal('')),
  resumeUrl: z
    .string()
    .url('Invalid resume URL'),
  resumeFileName: z.string().min(1, 'Resume filename is required'),
  resumeSize: z.number().positive('Invalid file size'),
});

// Types derived from schemas
export type ContactInput = z.infer<typeof contactSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type ConsultationInput = z.infer<typeof consultationSchema>;
export type JobApplicationInput = z.infer<typeof jobApplicationSchema>;
