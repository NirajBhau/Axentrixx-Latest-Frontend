-- Create tables for Axentrixx backend
-- Run this in Supabase SQL Editor: https://app.supabase.com/project/yswwcnffuljwggmmrnlv/sql

-- Create enums
CREATE TYPE "ContactStatus" AS ENUM ('NEW', 'CONTACTED', 'RESOLVED');
CREATE TYPE "SubStatus" AS ENUM ('ACTIVE', 'UNSUBSCRIBED');
CREATE TYPE "ApplicationStatus" AS ENUM ('NEW', 'REVIEWING', 'INTERVIEW', 'REJECTED', 'HIRED');

-- Contact Form Submissions Table
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" "ContactStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "Contact_email_idx" ON "Contact"("email");
CREATE INDEX "Contact_createdAt_idx" ON "Contact"("createdAt");

-- Newsletter Subscriptions Table
CREATE TABLE "Newsletter" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
    "email" TEXT NOT NULL UNIQUE,
    "status" "SubStatus" NOT NULL DEFAULT 'ACTIVE',
    "subscribedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unsubscribedAt" TIMESTAMP(3)
);

CREATE INDEX "Newsletter_email_idx" ON "Newsletter"("email");

-- Consultation Bookings Table
CREATE TABLE "Consultation" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "countryCode" TEXT,
    "companyName" TEXT,
    "projectType" TEXT,
    "projectBudget" TEXT,
    "projectDetails" TEXT NOT NULL,
    "status" "ContactStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "Consultation_email_idx" ON "Consultation"("email");
CREATE INDEX "Consultation_createdAt_idx" ON "Consultation"("createdAt");

-- Job Applications Table
CREATE TABLE "JobApplication" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
    "jobId" TEXT,
    "jobTitle" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "coverLetter" TEXT,
    "resumeUrl" TEXT NOT NULL,
    "resumeFileName" TEXT NOT NULL,
    "resumeSize" INTEGER NOT NULL,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'NEW',
    "appliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "JobApplication_email_idx" ON "JobApplication"("email");
CREATE INDEX "JobApplication_createdAt_idx" ON "JobApplication"("createdAt");
CREATE INDEX "JobApplication_status_idx" ON "JobApplication"("status");

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW."updatedAt" = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
CREATE TRIGGER update_contact_updated_at BEFORE UPDATE ON "Contact" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_consultation_updated_at BEFORE UPDATE ON "Consultation" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_jobapplication_updated_at BEFORE UPDATE ON "JobApplication" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Callback Requests Table
CREATE TABLE "Callback" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "status" "ContactStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "Callback_createdAt_idx" ON "Callback"("createdAt");
