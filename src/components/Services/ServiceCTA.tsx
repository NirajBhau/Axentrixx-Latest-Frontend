"use client";

import { useModal } from "@/context/ModalContext";
import Link from "next/link";

const ServiceCTA = () => {
  const { openBookingModal } = useModal();

  return (
    <div className="mt-16 rounded-2xl bg-primary p-8 text-center text-white lg:p-12">
      <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
        Ready to transform your business?
      </h3>
      <p className="mb-8 text-lg opacity-90">
        Axentrixx works with startups and businesses in India, the USA, and globally. Let's discuss how we can help you achieve your digital goals.
      </p>
      <button
        onClick={openBookingModal}
        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-primary transition-all hover:bg-gray-100 active:scale-95"
      >
        Book Your Free Consultation
      </button>
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm underline opacity-70">
        <Link href="/services/web-development">Web Development</Link>
        <Link href="/services/ai-automation">AI Automation</Link>
        <Link href="/services/analytics-reporting">Analytics & Reporting</Link>
      </div>
    </div>
  );
};

export default ServiceCTA;
