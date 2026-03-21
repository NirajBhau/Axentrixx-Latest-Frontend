"use client";
import { useModal } from "@/context/ModalContext";
import { useState, useRef, useEffect } from "react";

const CallbackModal = () => {
  const { isCallbackOpen, closeCallbackModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeCallbackModal();
      }
    };

    if (isCallbackOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCallbackOpen, closeCallbackModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
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

  if (!isCallbackOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/60 backdrop-blur-md p-4 transition-all duration-300">
      <div
        ref={modalRef}
        className="relative w-full max-w-[500px] h-auto max-h-[calc(100vh-48px)] overflow-hidden bg-white/80 dark:bg-dark-2/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl transition-all duration-500 flex flex-col"
      >
        <button
          onClick={closeCallbackModal}
          className="absolute right-6 top-6 z-30 text-body-color hover:text-primary transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="p-8 sm:p-12 overflow-y-auto overflow-x-hidden">
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-2xl font-bold text-dark dark:text-white sm:text-3xl">
              Request a Call Back
            </h3>
            <p className="text-base font-medium text-body-color">
              Leave your details and we'll call you shortly.
            </p>
          </div>
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-dark dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-6 py-3.5 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-3/50 dark:text-white/90"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-dark dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-6 py-3.5 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-3/50 dark:text-white/90"
                />
              </div>
              {errorMessage && (
                <div className="rounded-xl bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                  {errorMessage}
                </div>
              )}
              <button
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-xl bg-primary px-9 py-4 text-base font-bold text-white shadow-lg transition duration-300 ease-in-out hover:bg-primary/90 active:scale-95 disabled:bg-primary/70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Requesting..." : "Request Callback"}
              </button>
            </form>
          ) : (
            <div className="text-center py-6 animate-fadeIn">
              <div className="mb-6 flex justify-center text-primary">
                <div className="rounded-full bg-primary/10 p-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-dark dark:text-white">
                Request Received!
              </h3>
              <p className="mb-6 text-base text-body-color">
                We have received your request. Our team will call you shortly at <span className="font-bold text-dark dark:text-white">{formData.phone}</span>.
              </p>
              
              <div className="mb-6 rounded-xl bg-gray-50 p-5 dark:bg-dark-3 text-left">
                <p className="mb-3 text-sm font-semibold text-dark dark:text-white">Need to talk immediately?</p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+919998249244" className="flex items-center gap-3 text-body-color hover:text-primary transition font-medium">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">📞</span>
                    +91 9998249244
                  </a>
                  <a href="tel:+919173384391" className="flex items-center gap-3 text-body-color hover:text-primary transition font-medium">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">📞</span>
                    +91 9173384391
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/919998249244?text=Hi%20Axentrixx!%20I%20just%20requested%20a%20callback.%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20offers.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeCallbackModal}
                className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-9 py-3.5 text-base font-bold text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#25D366]/90"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Message on WhatsApp
              </a>

              <button
                onClick={closeCallbackModal}
                className="flex w-full items-center justify-center rounded-xl border-2 border-primary bg-transparent px-9 py-3.5 text-base font-bold text-primary transition duration-300 ease-in-out hover:bg-primary hover:text-white"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallbackModal;
