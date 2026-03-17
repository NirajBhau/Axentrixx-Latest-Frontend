"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const ServiceFaq = ({ faqs }: { faqs: FaqItem[] }) => {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div className="mt-16 w-full">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-black dark:text-white sm:text-3xl">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="w-full space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`rounded-xl border border-stroke bg-white transition-all duration-300 dark:border-dark-3 dark:bg-dark-2 ${activeItem === i ? "shadow-md" : ""
              }`}
          >
            <button
              onClick={() => toggleItem(i)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <span className="text-lg font-bold text-black dark:text-white pr-4">
                {faq.question}
              </span>
              <span
                className={`flex h-8 w-8 min-w-[32px] items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ${activeItem === i ? "rotate-180" : ""
                  }`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    d="M9.00039 12.6562C8.74727 12.6562 8.52227 12.5719 8.35352 12.4031L3.90977 7.95937C3.57227 7.62187 3.57227 7.0875 3.90977 6.75C4.24727 6.4125 4.78164 6.4125 5.11914 6.75L9.00039 10.5187L12.8816 6.6375C13.2191 6.3 13.7535 6.3 14.091 6.6375C14.4285 6.975 14.4285 7.50937 14.091 7.84687L9.64727 12.2906C9.47852 12.5156 9.25352 12.6562 9.00039 12.6562Z"
                  />
                </svg>
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${activeItem === i ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="border-t border-stroke p-6 pt-0 text-base leading-relaxed text-body-color dark:border-dark-3 dark:text-dark-6">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFaq;
