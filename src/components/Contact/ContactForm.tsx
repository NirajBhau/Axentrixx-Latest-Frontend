"use client";
import { useState } from "react";
import SuccessMessage from "@/components/Common/SuccessMessage";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91", // Default to India
    phone: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    if (!captchaToken) {
      setErrorMessage("Please complete the CAPTCHA verification.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          projectType: formData.projectType,
          message: formData.message,
          subject: `Website Contact - ${formData.projectType || "General Inquiry"}`,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setIsSuccess(true);
    } catch (error) {
      setErrorMessage("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Common country codes
  const countryCodes = [
    { code: "+91", country: "IN", flag: "🇮🇳" },
    { code: "+1", country: "US", flag: "🇺🇸" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+61", country: "AU", flag: "🇦🇺" },
    { code: "+1", country: "CA", flag: "🇨🇦" },
    { code: "+971", country: "AE", flag: "🇦🇪" },
  ];

  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-three dark:bg-dark-2 sm:p-10 border border-stroke dark:border-dark-3">
      <h3 className="mb-2 text-2xl font-bold text-black dark:text-white sm:text-3xl">
        Send us a Message
      </h3>
      <p className="mb-8 text-base font-medium text-body-color">
        We will get back to you within 24 hours.
      </p>

      {!isSuccess ? (
        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            {/* Your Name */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                className="w-full rounded-full border border-primary/30 bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all placeholder:text-gray-300"
                onChange={handleChange}
                required
              />
            </div>

            {/* Your Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                className="w-full rounded-full border border-primary/30 bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all placeholder:text-gray-300"
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Number with Country Code */}
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number <span className="text-primary">*</span>
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-6 top-1/2 -translate-y-1/2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="cursor-pointer appearance-none bg-transparent text-base text-body-color outline-none pr-4 dark:text-white border-none focus:ring-0"
                    style={{ paddingRight: '1rem' }}
                  >
                    {countryCodes.map((country) => (
                      <option key={`${country.country}-${country.code}`} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  placeholder="00 0000 0000"
                  className="w-full rounded-full border border-primary/30 bg-transparent py-3 pl-[110px] pr-6 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all placeholder:text-gray-300"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Project Type Dropdown */}
            <div>
              <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Project Type <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <select
                  name="projectType"
                  value={formData.projectType}
                  className="w-full appearance-none rounded-full border border-primary/30 bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all cursor-pointer"
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="app-development">Mobile App Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="custom-software">Custom Software</option>
                  <option value="seo-marketing">SEO & Marketing</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-primary">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Your Message */}
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Message <span className="text-primary">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                rows={4}
                placeholder="Type your message here..."
                className="w-full resize-none rounded-2xl border border-primary/30 bg-transparent px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all placeholder:text-gray-300"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {errorMessage && (
              <div className="rounded-md bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                {errorMessage}
              </div>
            )}

            <div className="flex flex-col gap-4 pt-2">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={(token: string | null) => setCaptchaToken(token)}
                theme="light"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-primary px-9 py-3 text-base font-bold text-white shadow-submit duration-300 hover:bg-primary/90 hover:shadow-submit-dark dark:shadow-submit-dark w-full disabled:bg-primary/70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      ) : (
        <SuccessMessage
          onClose={() => {
            setIsSuccess(false);
            setFormData({
              name: "",
              email: "",
              countryCode: "+91",
              phone: "",
              projectType: "",
              message: "",
            });
            setCaptchaToken(null);
          }}
          buttonText="SEND ANOTHER"
        />
      )}
    </div>
  );
};

export default ContactForm;
