
"use client";
import { useState, useEffect } from "react";
import { useModal } from "@/context/ModalContext";
import SuccessMessage from "@/components/Common/SuccessMessage";

const GetQuoteModal = () => {
  const { isOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    companyName: "",
    projectType: "",
    projectBudget: "",
    projectDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Prevent scrolling when modal is open and reset state
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsSuccess(false);
      setIsSubmitting(false);
      setErrorMessage("");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        companyName: "",
        projectType: "",
        projectBudget: "",
        projectDetails: "",
      });
    }
  }, [isOpen]);

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

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone || undefined,
          countryCode: formData.countryCode || undefined,
          companyName: formData.companyName || undefined,
          projectType: formData.projectType || undefined,
          projectBudget: formData.projectBudget || undefined,
          projectDetails: formData.projectDetails,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setIsSuccess(true);
    } catch (error) {
      setErrorMessage("Failed to submit. Please check your connection and try again.");
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/50 backdrop-blur-sm p-2 sm:p-4">
      <div
        className="relative w-full max-w-[750px] max-h-[95vh] overflow-y-auto rounded-xl bg-white p-4 shadow-xl dark:bg-dark-2 sm:p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 text-body-color hover:text-primary dark:text-gray-300"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {!isSuccess ? (
          <>
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Book a Consultation
              </h3>
              <p className="text-sm font-medium text-body-color">
                We'll get back to you within 24 hours. Fields marked with <span className="text-primary">*</span> are mandatory.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="John"
                    className="w-full rounded-full border border-primary/30 bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all placeholder:text-gray-300"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Doe"
                    className="w-full rounded-full border border-primary/30 bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all placeholder:text-gray-300"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="john@example.com"
                    className="w-full rounded-full border border-primary/30 bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all placeholder:text-gray-300"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-1 top-1/2 -translate-y-1/2 h-[80%] border-r border-gray-200 dark:border-dark-3">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="h-full cursor-pointer appearance-none bg-transparent pl-3 pr-6 text-base text-body-color outline-none dark:text-white"
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
                      className="w-full rounded-full border border-primary/30 bg-transparent py-3 pl-[110px] pr-5 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all placeholder:text-gray-300"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    placeholder="Company"
                    className="w-full rounded-full border border-primary/30 bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all placeholder:text-gray-300"
                    onChange={handleChange}
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      className="w-full appearance-none rounded-full border border-primary/30 bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all cursor-pointer"
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select Type</option>
                      <option value="web-development">Web Development</option>
                      <option value="app-development">Mobile App</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="custom-software">Custom Software</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-primary">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Budget */}
                <div className="md:col-span-2">
                  <label htmlFor="projectBudget" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Project Budget
                  </label>
                  <div className="relative">
                    <select
                      name="projectBudget"
                      value={formData.projectBudget}
                      className="w-full appearance-none rounded-full border border-primary/30 bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all cursor-pointer"
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select budget range</option>
                      <option value="<5k">Less than $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">More than $50,000</option>
                    </select>
                    <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-primary">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="md:col-span-2">
                  <label htmlFor="projectDetails" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Project Details <span className="text-primary">*</span>
                  </label>
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    rows={2}
                    placeholder="Briefly describe your project..."
                    className="w-full resize-none rounded-2xl border border-primary/30 bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-primary/20 dark:text-white dark:focus:border-primary transition-all placeholder:text-gray-300"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              {errorMessage && (
                <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                  {errorMessage}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-primary px-9 py-4 text-base font-bold text-white shadow-submit duration-300 hover:bg-primary/90 hover:shadow-submit-dark dark:shadow-submit-dark disabled:bg-primary/70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Request Consultation"}
                </button>
              </div>
              <p className="text-xs text-center text-body-color/70 mt-4">
                By submitting, you agree to our <span className="text-primary cursor-pointer hover:underline">Privacy Policy</span>. We'll reply in 1 business day.
              </p>
            </form>
          </>
        ) : (
          <SuccessMessage
            onClose={closeModal}
            description="We've received your consultation request, and we'll be in touch soon!"
          />
        )}
      </div>
      {/* Click outside to close */}
      <div className="absolute inset-0 z-[-1]" onClick={closeModal}></div>
    </div>
  );
};

export default GetQuoteModal;
