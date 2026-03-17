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
              <p className="mb-8 text-base text-body-color">
                We have received your request. Our team will call you shortly at <span className="font-bold text-dark dark:text-white">{formData.phone}</span>.
              </p>
              <button
                onClick={closeCallbackModal}
                className="flex w-full items-center justify-center rounded-xl border-2 border-primary bg-transparent px-9 py-3.5 text-base font-bold text-primary transition duration-300 ease-in-out hover:bg-primary hover:text-white"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallbackModal;
