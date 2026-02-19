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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark/90 backdrop-blur-sm p-4">
      <div
        ref={modalRef}
        className="relative w-full max-w-[500px] max-h-[95vh] overflow-y-auto rounded-lg bg-white px-6 py-8 shadow-lg dark:bg-dark-2 sm:px-12 sm:py-12"
      >
        <button
          onClick={closeCallbackModal}
          className="absolute right-4 top-4 text-body-color hover:text-dark dark:hover:text-white"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.89 10L17.65 4.24001C18.12 3.77001 18.12 3.00001 17.65 2.53001C17.18 2.06001 16.41 2.06001 15.94 2.53001L10.18 8.29001L4.42001 2.53001C3.95001 2.06001 3.18001 2.06001 2.71001 2.53001C2.24001 3.00001 2.24001 3.77001 2.71001 4.24001L8.47001 10L2.71001 15.76C2.24001 16.23 2.24001 17 2.71001 17.47C2.94001 17.7 3.25001 17.82 3.56001 17.82C3.87001 17.82 4.18001 17.7 4.42001 17.47L10.18 11.71L15.94 17.47C16.17 17.7 16.48 17.82 16.79 17.82C17.1 17.82 17.41 17.7 17.65 17.47C18.12 17 18.12 16.23 17.65 15.76L11.89 10Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div className="mb-6 text-center">
          <h3 className="mb-2 text-2xl font-bold text-dark dark:text-white">
            Request a Call Back
          </h3>
          <p className="text-base font-medium text-body-color">
            Leave your details and we'll call you shortly.
          </p>
        </div>
        {!isSuccess ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-dark dark:text-white"
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
                className="w-full rounded-md border border-transparent bg-[#F9FAFB] px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#2C303B] dark:text-white dark:shadow-two dark:focus:border-primary"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-dark dark:text-white"
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
                className="w-full rounded-md border border-transparent bg-[#F9FAFB] px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#2C303B] dark:text-white dark:shadow-two dark:focus:border-primary"
              />
            </div>
            {errorMessage && (
              <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                {errorMessage}
              </div>
            )}
            <button
              disabled={isSubmitting}
              className="flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90 hover:shadow-1 active:scale-95 disabled:bg-primary/70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Requesting..." : "Request Callback"}
            </button>
          </form>
        ) : (
          <div className="text-center py-6">
            <div className="mb-4 flex justify-center text-primary">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="currentColor" fillOpacity="0.1" />
                <path
                  d="M28.6667 40L18 29.3333L21.3333 26L28.6667 33.3333L46.6667 15.3333L50 18.6667L28.6667 40Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-dark dark:text-white">
              Request Received!
            </h3>
            <p className="mb-6 text-base text-body-color">
              We have received your request. Our team will call you shortly at {formData.phone}.
            </p>
            <button
              onClick={closeCallbackModal}
              className="flex w-full items-center justify-center rounded-md bg-transparent border border-primary px-9 py-3 text-base font-medium text-primary transition duration-300 ease-in-out hover:bg-primary hover:text-white"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallbackModal;
