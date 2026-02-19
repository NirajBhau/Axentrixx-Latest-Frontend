"use client";
import Link from "next/link";
import { useState } from "react";

const CallToAction = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      setErrorMessage("Failed to subscribe. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative z-20 bg-transparent pb-12 lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="relative -mt-[120px] lg:-mt-[150px] z-30 shadow-[0px_20px_40px_0px_rgba(0,0,0,0.1)] bg-primary overflow-hidden rounded-md py-[70px] text-center">
          <div className="relative z-10 mx-auto max-w-[770px] px-6">
            <h2 className="mb-10 text-2xl leading-tight font-bold text-white md:text-[40px]">
              Subscribe our newsletter to receive future updates
            </h2>
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="relative mx-auto max-w-[480px]">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="mb-5 w-full rounded-full border border-white/[13%] bg-white/[15%] px-8 py-4 text-left text-white placeholder-white/70 outline-none transition focus:border-white focus-visible:shadow-none sm:mb-0"
                  name="email"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-primary top-2 right-2 w-full rounded-full bg-white px-5 py-4 text-base font-semibold sm:absolute sm:w-auto sm:py-[10px] transition hover:bg-opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                </button>
                {errorMessage && (
                  <p className="mt-3 text-sm text-white/90 bg-red-500/30 rounded-full px-4 py-2">
                    {errorMessage}
                  </p>
                )}
              </form>
            ) : (
              <div className="text-center py-4">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Subscribed Successfully!
                </h3>
                <p className="text-white/80">
                  Thank you for joining our newsletter.
                </p>
              </div>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 -z-10 w-full">
            <svg
              width="818"
              height="286"
              viewBox="0 0 818 286"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <circle cx="409" cy="409" r="408.5" stroke="url(#paint0_linear_0:1)" />
              <circle cx="409" cy="409" r="349.5" stroke="url(#paint1_linear_0:1)" />
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="-34.5"
                  y1="291.5"
                  x2="851"
                  y2="291.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0.35" />
                  <stop offset="0.218415" stopColor="white" stopOpacity="0" />
                  <stop offset="0.728079" stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" stopOpacity="0.35" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="29.4768"
                  y1="308.45"
                  x2="787.24"
                  y2="308.45"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0.35" />
                  <stop offset="0.218415" stopColor="white" stopOpacity="0" />
                  <stop offset="0.777261" stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" stopOpacity="0.35" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
