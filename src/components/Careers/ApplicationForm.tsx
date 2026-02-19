
"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface ApplicationFormProps {
  selectedPosition: string;
  onBack: () => void;
}

const ApplicationForm = ({ selectedPosition, onBack }: ApplicationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: selectedPosition || "",
    resume: null as File | null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (selectedPosition) {
      setFormData((prev) => ({ ...prev, position: selectedPosition }));
    }
  }, [selectedPosition]);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Validate resume
      if (!formData.resume) {
        setErrorMessage("Please upload your resume.");
        setIsSubmitting(false);
        return;
      }

      // Split name into firstName and lastName
      const nameParts = formData.name.trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || firstName;

      // Upload resume to Supabase Storage
      const file = formData.resume;
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}_${firstName}_${lastName}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filePath, file);

      if (uploadError) {
        console.error("Upload error:", uploadError);
        setErrorMessage("Failed to upload resume. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("resumes")
        .getPublicUrl(filePath);

      // Submit application to API
      const response = await fetch("/api/job-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          phone: formData.phone,
          jobTitle: formData.position,
          resumeUrl: urlData.publicUrl,
          resumeFileName: file.name,
          resumeSize: file.size,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setErrorMessage("Failed to submit application. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="application-form" className="py-20 bg-white dark:bg-dark">
        <div className="container">
          <div className="mx-auto max-w-[600px] text-center">
            <div className="mb-6 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-500">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Application Received!
            </h3>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
              Thank you for applying for the <span className="font-bold text-primary">{formData.position}</span> role.
              Our team will review your application and get back to you shortly.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={onBack}
                className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition hover:bg-primary/90"
              >
                View More Positions
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="application-form" className="py-20 bg-white dark:bg-dark relative">
      <div className="container">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-8">
            <button
              onClick={onBack}
              className="mb-6 flex items-center gap-2 text-sm font-medium text-body-color hover:text-primary transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Positions
            </button>

            <div className="border-b border-primary/20 pb-6 flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-2">
                  Apply for {selectedPosition}
                </h3>
                <p className="text-base text-body-color">
                  Please fill out the form below to submit your application.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  className="w-full rounded-full border border-primary/30 bg-transparent px-6 py-4 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all placeholder:text-gray-300"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-primary/30 bg-transparent px-6 py-4 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all placeholder:text-gray-300"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone number <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="w-full rounded-full border border-primary/30 bg-transparent px-6 py-4 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all placeholder:text-gray-300"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Position Role - Read Only / Editable */}
              <div>
                <label htmlFor="position" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Position Role <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  placeholder="Position Role"
                  className="w-full rounded-full border border-primary/30 bg-gray-50 px-6 py-4 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:bg-dark-2 dark:text-white dark:focus:border-primary transition-all placeholder:text-gray-300"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Resume (PDF, DOCX) <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="w-full cursor-pointer rounded-full border border-primary/30 bg-transparent px-6 py-3 text-sm text-body-color outline-none file:mr-4 file:rounded-full file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary hover:file:bg-primary/20 dark:border-primary/20 dark:text-white"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>


              {errorMessage && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                  {errorMessage}
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full border border-primary bg-primary/5 px-10 py-4 text-base font-bold text-primary transition hover:bg-primary hover:text-white dark:border-primary dark:text-white dark:hover:bg-primary dark:hover:text-white disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send application"}
                </button>
              </div>

              <div className="pt-4">
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  By clicking <span className="font-bold text-primary">Send application</span>, you agree to our <span className="font-bold text-primary underline cursor-pointer">User Agreement</span>, <span className="font-bold text-primary underline cursor-pointer">Privacy Policy</span>, and <span className="font-bold text-primary underline cursor-pointer">Cookie Policy</span>.
                </p>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
