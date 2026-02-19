"use client";
import { Testimonial } from "@/types/testimonial";
import { useRef, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "CTO, FinTech Solutions",
    content:
      "Axentrixx transformed our legacy system into a modern, scalable platform. Their attention to detail and technical expertise is unmatched.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    designation: "Director, HealthCare Inc",
    content:
      "The team delivered our patient management system ahead of schedule. Highly recommended for any complex development needs.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Sanjay Patil",
    designation: "Founder, Shiv Industries",
    content:
      "A true partner in our growth. They understood our vision from day one and executed it perfectly.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Jessica Brown",
    designation: "CEO, EcoTech",
    content:
      "Professional, responsive, and incredibly talented. The AI integration they built has streamlined our operations significantly.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
  {
    id: 5,
    name: "David Miller",
    designation: "Founder @ Waa Tech",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
];

// Triple the data to ensure seamless looping buffer
const extendedTestimonials = [...testimonialData, ...testimonialData, ...testimonialData];

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const isTransitioning = useRef(false);

  const slideTo = (index: number, behavior: ScrollBehavior = "smooth") => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const firstItem = slider.children[0] as HTMLElement;
      if (!firstItem) return;
      const itemWidth = firstItem.offsetWidth + 24; // Width + gap
      slider.scrollTo({ left: index * itemWidth, behavior });
    }
  };

  const scrollRight = () => {
    if (isTransitioning.current) return;

    const totalOriginal = testimonialData.length;

    // If we are at the end of the first set (or further), snap back to the corresponding start position
    // seamlessly before moving forward.
    if (indexRef.current >= totalOriginal) {
      // Disable transition flag briefly? No, native scrollTo with 'instant' is synchronous usually.

      // Snap back to 0 (or index % totalOriginal) INSTANTLY
      // However, if we are exactly at 'totalOriginal', we look like we are at 0.
      // So we can change index to 0, scroll instant to 0.

      indexRef.current = indexRef.current % totalOriginal;
      slideTo(indexRef.current, "instant");
    }

    // Now move to next
    // Use setTimeout to ensure the instant scroll has applied visually if needed, 
    // though usually RAF or simple next tick is enough. 
    requestAnimationFrame(() => {
      indexRef.current += 1;
      slideTo(indexRef.current, "smooth");
    });
  };

  // Previous button (Basic implementation)
  const scrollLeft = () => {
    indexRef.current = Math.max(0, indexRef.current - 1);
    slideTo(indexRef.current, "smooth");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4 relative">
        <SectionTitle
          subtitle="Testimonials"
          title="Client Testimonials"
          paragraph="See what our partners have to say about their journey with Axentrixx."
          width="640px"
          center
        />

        <div className="mt-[60px] lg:mt-20 relative group">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {extendedTestimonials.map((testimonial, i) => (
              <div key={i} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                <SingleTestimonial testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 -translate-y-1/2 left-0 z-10 p-3 rounded-full bg-white dark:bg-dark shadow-md hover:bg-primary hover:text-white transition-colors opacity-0 group-hover:opacity-100 duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <button
            onClick={scrollRight}
            className="absolute top-1/2 -translate-y-1/2 right-0 z-10 p-3 rounded-full bg-white dark:bg-dark shadow-md hover:bg-primary hover:text-white transition-colors opacity-0 group-hover:opacity-100 duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
