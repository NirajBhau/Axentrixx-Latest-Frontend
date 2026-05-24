"use client";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";
import { useModal } from "@/context/ModalContext";

const PartnerModal = () => {
  const { isPartnerOpen, closePartnerModal } = useModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    websiteUrl: "",
    devNeed: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!isPartnerOpen) {
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          websiteUrl: "",
          devNeed: "",
          message: "",
        });
        setCaptchaToken(null);
      }, 300);
    }
  }, [isPartnerOpen]);

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
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          companyName: formData.companyName,
          websiteUrl: formData.websiteUrl || undefined,
          devNeed: formData.devNeed,
          message: formData.message,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Something went wrong. Please try again.");
        return;
      }

      toast.success("Thank you! Your partnership request has been submitted successfully.");
      closePartnerModal();
    } catch (error) {
      toast.error("Failed to submit. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isPartnerOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/60 backdrop-blur-md p-4 transition-all duration-300"
      onClick={closePartnerModal}
    >
      <div
        className="relative w-full max-w-[650px] h-auto max-h-[calc(100vh-48px)] overflow-hidden bg-white/95 dark:bg-dark-2/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl transition-all duration-500 flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/10 px-6 py-4 sm:px-8">
          <div>
            <h3 className="text-xl font-bold text-dark dark:text-white">
              Partner With Axentrixx
            </h3>
            <p className="text-xs text-body-color dark:text-dark-6 mt-1">
              Scale your development production with elite engineering talent.
            </p>
          </div>
          <button
            onClick={closePartnerModal}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Scrollable Form */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 max-h-[calc(100vh-140px)]">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Row 1: Full Name & Work Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-dark dark:text-white">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-[14px] text-body-color outline-none focus:border-[#0056D2] dark:border-dark-3 dark:bg-dark-3/50 dark:text-white"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-dark dark:text-white">Work Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@agency.com"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-[14px] text-body-color outline-none focus:border-[#0056D2] dark:border-dark-3 dark:bg-dark-3/50 dark:text-white"
                />
              </div>
            </div>

            {/* Row 2: Company Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-dark dark:text-white">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Digital Agency Ltd"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-[14px] text-body-color outline-none focus:border-[#0056D2] dark:border-dark-3 dark:bg-dark-3/50 dark:text-white"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-dark dark:text-white">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-[14px] text-body-color outline-none focus:border-[#0056D2] dark:border-dark-3 dark:bg-dark-3/50 dark:text-white"
                />
              </div>
            </div>

            {/* Row 3: Website URL & Monthly Dev Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-dark dark:text-white">Website URL</label>
                <input
                  type="url"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  placeholder="https://agency.com"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-[14px] text-body-color outline-none focus:border-[#0056D2] dark:border-dark-3 dark:bg-dark-3/50 dark:text-white"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-dark dark:text-white">Monthly Dev Needs *</label>
                <select
                  name="devNeed"
                  value={formData.devNeed}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-[14px] text-body-color outline-none focus:border-[#0056D2] dark:border-dark-3 dark:bg-dark-3/50 dark:text-white"
                >
                  <option value="">Select option</option>
                  <option value="Less than 20 hours">Less than 20 hours / month</option>
                  <option value="20 to 50 hours">20 to 50 hours / month</option>
                  <option value="50 to 100 hours">50 to 100 hours / month</option>
                  <option value="More than 100 hours">100+ hours / month</option>
                </select>
              </div>
            </div>

            {/* Row 4: Message */}
            <div>
              <label className="mb-1 block text-xs font-bold uppercase text-dark dark:text-white">What are you looking to build or augment? *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your client projects, design stack, or engineering needs..."
                required
                className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-[14px] text-body-color outline-none focus:border-[#0056D2] dark:border-dark-3 dark:bg-dark-3/50 dark:text-white"
              ></textarea>
            </div>

            {/* CAPTCHA & Submit */}
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
                className="w-full rounded-lg bg-[#0056D2] px-6 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:bg-[#0047b3] disabled:bg-primary/70 disabled:cursor-not-allowed active:scale-95 cursor-pointer"
              >
                {isSubmitting ? "Submitting Request..." : "Apply to Program"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnerModal;
