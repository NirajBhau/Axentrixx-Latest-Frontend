"use client";
import { useState, useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

const GetQuoteModal = () => {
  const { isOpen, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

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
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
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
        setCaptchaToken(null);
      }, 300);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      toast.error("Please complete the CAPTCHA verification.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Something went wrong. Please try again.");
        return;
      }

      toast.success("Consultation request submitted! We'll get back to you soon.");
      closeModal();
    } catch (error) {
      toast.error("Failed to submit. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const countryCodes = [
    { code: "+91", flag: "🇮🇳" },
    { code: "+1", flag: "🇺🇸" },
    { code: "+44", flag: "🇬🇧" },
    { code: "+61", flag: "🇦🇺" },
    { code: "+971", flag: "🇦🇪" },
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/60 backdrop-blur-md p-4 transition-all duration-300">
      <div
        ref={modalRef}
        className="relative w-full max-w-[700px] h-auto max-h-[calc(100vh-48px)] overflow-hidden bg-white/80 dark:bg-dark-2/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl transition-all duration-500 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/20 px-6 py-4">
          <h3 className="text-xl font-bold text-dark dark:text-white sm:text-2xl">
            Book a Consultation
          </h3>
          <button
            onClick={closeModal}
            className="text-body-color hover:text-primary transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto overflow-x-hidden">
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-dark dark:text-white">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-2.5 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-3/50 dark:text-white"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-dark dark:text-white">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-2.5 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-3/50 dark:text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-dark dark:text-white">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-2.5 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-3/50 dark:text-white"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-dark dark:text-white">Phone Number</label>
                <div className="flex gap-2 min-w-0">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-[85px] flex-shrink-0 rounded-xl border border-gray-200 bg-gray-50/50 px-2 py-2.5 text-sm text-body-color outline-none dark:border-dark-3 dark:bg-dark-3/50 dark:text-white"
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-3/50 dark:text-white/90"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-dark dark:text-white">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-2.5 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-3/50 dark:text-white"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-dark dark:text-white">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-2.5 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-3/50 dark:text-white"
                >
                  <option value="">Select type</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-dark dark:text-white">Project Details *</label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                rows={3}
                placeholder="Briefly describe your requirements"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-2.5 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-3/50 dark:text-white"
              ></textarea>
            </div>

            <div className="flex flex-col items-center gap-4 pt-2">
              <div className="max-w-full overflow-hidden">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={(token) => setCaptchaToken(token)}
                  theme="light"
                  size="normal"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-primary px-9 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-primary/90 disabled:bg-primary/70 disabled:cursor-not-allowed active:scale-95"
              >
                {isSubmitting ? "Submitting..." : "Send Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute inset-0 z-[-1]" onClick={closeModal}></div>
    </div>
  );
};

export default GetQuoteModal;
