"use client";
import { useState } from "react";

const Newsletter = () => {
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
    <div
      className="wow fadeInUp relative mb-12 overflow-hidden rounded-[5px] bg-primary px-11 py-[60px] text-center lg:px-8"
      data-wow-delay=".1s"
    >
      <h3 className="mb-[6px] text-[28px] font-semibold leading-[40px] text-white">
        Join our newsletter!
      </h3>
      <p className="mb-5 text-base text-white">
        Enter your email to receive our latest newsletter.
      </p>
      {!isSuccess ? (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            className="mb-4 h-[50px] w-full rounded-md border border-transparent bg-white/10 text-center text-base text-white outline-none placeholder:text-white/60 focus:border-white focus-visible:shadow-none"
          />
          <input
            type="submit"
            value={isSubmitting ? "Subscribing..." : "Subscribe Now"}
            disabled={isSubmitting}
            className="mb-4 h-[50px] w-full cursor-pointer rounded-md bg-secondary text-center text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-[#0BB489] hover:bg-opacity-90 disabled:bg-secondary/70 disabled:cursor-not-allowed"
          />
          {errorMessage && (
            <p className="text-sm text-white/90 bg-red-500/30 rounded-md px-4 py-2">
              {errorMessage}
            </p>
          )}
        </form>
      ) : (
        <div className="mb-4 text-center">
          <p className="mb-2 text-xl font-bold text-white">Subscribed!</p>
          <p className="text-base text-white/90">
            Thank you for joining our newsletter.
          </p>
        </div>
      )}
      <p className="text-sm font-medium text-white">
        Don&#39;t worry, we don&#39;t spam
      </p>

      <div>
        <span className="absolute right-0 top-0">
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="1.39737"
              cy="44.6026"
              r="1.39737"
              transform="rotate(-90 1.39737 44.6026)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="1.39737"
              cy="7.9913"
              r="1.39737"
              transform="rotate(-90 1.39737 7.9913)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="13.6943"
              cy="44.6026"
              r="1.39737"
              transform="rotate(-90 13.6943 44.6026)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="13.6943"
              cy="7.9913"
              r="1.39737"
              transform="rotate(-90 13.6943 7.9913)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="25.9911"
              cy="44.6026"
              r="1.39737"
              transform="rotate(-90 25.9911 44.6026)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="25.9911"
              cy="7.9913"
              r="1.39737"
              transform="rotate(-90 25.9911 7.9913)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="38.288"
              cy="44.6026"
              r="1.39737"
              transform="rotate(-90 38.288 44.6026)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="38.288"
              cy="7.9913"
              r="1.39737"
              transform="rotate(-90 38.288 7.9913)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="1.39737"
              cy="32.3058"
              r="1.39737"
              transform="rotate(-90 1.39737 32.3058)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="13.6943"
              cy="32.3058"
              r="1.39737"
              transform="rotate(-90 13.6943 32.3058)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="25.9911"
              cy="32.3058"
              r="1.39737"
              transform="rotate(-90 25.9911 32.3058)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="38.288"
              cy="32.3058"
              r="1.39737"
              transform="rotate(-90 38.288 32.3058)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="1.39737"
              cy="20.0086"
              r="1.39737"
              transform="rotate(-90 1.39737 20.0086)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="13.6943"
              cy="20.0086"
              r="1.39737"
              transform="rotate(-90 13.6943 20.0086)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="25.9911"
              cy="20.0086"
              r="1.39737"
              transform="rotate(-90 25.9911 20.0086)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="38.288"
              cy="20.0086"
              r="1.39737"
              transform="rotate(-90 38.288 20.0086)"
              fill="white"
              fillOpacity="0.44"
            />
          </svg>
        </span>
        <span className="absolute bottom-0 left-0">
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="1.39737"
              cy="44.6026"
              r="1.39737"
              transform="rotate(-90 1.39737 44.6026)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="1.39737"
              cy="7.9913"
              r="1.39737"
              transform="rotate(-90 1.39737 7.9913)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="13.6943"
              cy="44.6026"
              r="1.39737"
              transform="rotate(-90 13.6943 44.6026)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="13.6943"
              cy="7.9913"
              r="1.39737"
              transform="rotate(-90 13.6943 7.9913)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="25.9911"
              cy="44.6026"
              r="1.39737"
              transform="rotate(-90 25.9911 44.6026)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="25.9911"
              cy="7.9913"
              r="1.39737"
              transform="rotate(-90 25.9911 7.9913)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="38.288"
              cy="44.6026"
              r="1.39737"
              transform="rotate(-90 38.288 44.6026)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="38.288"
              cy="7.9913"
              r="1.39737"
              transform="rotate(-90 38.288 7.9913)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="1.39737"
              cy="32.3058"
              r="1.39737"
              transform="rotate(-90 1.39737 32.3058)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="13.6943"
              cy="32.3058"
              r="1.39737"
              transform="rotate(-90 13.6943 32.3058)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="25.9911"
              cy="32.3058"
              r="1.39737"
              transform="rotate(-90 25.9911 32.3058)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="38.288"
              cy="32.3058"
              r="1.39737"
              transform="rotate(-90 38.288 32.3058)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="1.39737"
              cy="20.0086"
              r="1.39737"
              transform="rotate(-90 1.39737 20.0086)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="13.6943"
              cy="20.0086"
              r="1.39737"
              transform="rotate(-90 13.6943 20.0086)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="25.9911"
              cy="20.0086"
              r="1.39737"
              transform="rotate(-90 25.9911 20.0086)"
              fill="white"
              fillOpacity="0.44"
            />
            <circle
              cx="38.288"
              cy="20.0086"
              r="1.39737"
              transform="rotate(-90 38.288 20.0086)"
              fill="white"
              fillOpacity="0.44"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
