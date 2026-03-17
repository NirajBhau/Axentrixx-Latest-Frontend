
"use client";
import { useState, useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import toast from "react-hot-toast";

const BookingModal = () => {
  const { isBookingOpen, closeBookingModal } = useModal();
  const [step, setStep] = useState<"info" | "schedule">("info");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const hasProcessedBooking = useRef(false);

  // Reset state when modal closes
  useEffect(() => {
    if (!isBookingOpen) {
      setTimeout(() => {
        setStep("info");
        setFormData({ name: "", email: "" });
        hasProcessedBooking.current = false;
      }, 300); // Wait for transition
    }
  }, [isBookingOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("schedule");
  };

  // Initialize Cal.com inline embed when entering Step 2
  useEffect(() => {
    if (step === "schedule" && typeof window !== "undefined" && (window as any).Cal) {
      const cal = (window as any).Cal;

      const initCal = () => {
        const container = document.getElementById("cal-booking-form");
        if (!container) {
          // Retry in next tick if element not found yet
          setTimeout(initCal, 10);
          return;
        }

        cal("inline", {
          elementOrSelector: "#cal-booking-form",
          calLink: "axentrixx/30min",
          layout: "month_view",
          hideEventTypeDetails: true,
          config: {
            name: formData.name,
            email: formData.email,
          },
        });

        // Listen for successful booking
        cal("on", {
          action: "bookingSuccessful",
          callback: () => {
            if (hasProcessedBooking.current) return;
            hasProcessedBooking.current = true;

            closeBookingModal();
            toast.success("Consultation Booked! Please check your email for the meeting link and details.", {
              duration: 7000,
              position: "top-right",
              style: {
                padding: "24px",
                fontSize: "18px",
                fontWeight: "600",
                maxWidth: "450px",
                borderRadius: "16px",
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              },
            });
          },
        });
      };

      initCal();
    }
  }, [step, formData.name, formData.email, closeBookingModal]);

  if (!isBookingOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/60 backdrop-blur-md p-4 transition-all duration-300">
      <div
        className={`relative w-full transition-all duration-500 bg-white/80 dark:bg-dark-2/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl ${step === "info" ? "max-w-[450px]" : "max-w-[1000px] max-h-[90vh] overflow-hidden flex flex-col"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-transparent px-6 py-4">
          <h3 className="text-xl font-bold text-dark dark:text-white">
            {step === "info" ? "Book Free Consultation" : "Select Time Slot"}
          </h3>
          <button
            onClick={closeBookingModal}
            className="text-body-color hover:text-primary transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className={`p-6 sm:p-8 overflow-x-hidden ${step === "schedule" ? "overflow-y-auto flex-1" : ""}`}>
          {step === "info" ? (
            <form onSubmit={handleContinue} className="animate-fadeIn">
              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-dark-3 dark:bg-dark-3/50 dark:text-white transition-all"
                />
              </div>
              <div className="mb-8">
                <label className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@axentrixx.com"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-dark-3 dark:bg-dark-3/50 dark:text-white transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-primary px-9 py-4 text-base font-bold text-white shadow-lg duration-300 hover:bg-primary/90 hover:shadow-primary/30 active:scale-[0.98]"
              >
                Continue to Scheduling
              </button>
              <p className="mt-4 text-center text-xs text-body-color/70">
                🔒 Your info is safe with us. Never shared with third parties.
              </p>
            </form>
          ) : (
            <div className="animate-fadeIn">
              <div
                id="cal-booking-form"
                className="w-full"
                style={{ width: "100%", minHeight: "600px" }}
              ></div>
            </div>
          )}
        </div>
      </div>
      {/* Click outside to close */}
      <div className="absolute inset-0 z-[-1]" onClick={closeBookingModal}></div>
    </div>
  );
};

export default BookingModal;
