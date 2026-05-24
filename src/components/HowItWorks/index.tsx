"use client";
import { useModal } from "@/context/ModalContext";

const HowItWorks = () => {
  const { openPartnerModal } = useModal();
  const steps = [
    {
      title: "Discovery Call",
      description: "We schedule a consultation to deeply understand your business needs, goals, and project scope.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Base Phone */}
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          {/* Speech Bubble with solid white background to cover the phone line behind it */}
          <path fill="white" stroke="none" d="M21.5 9c0-2.5-2-4.5-4.5-4.5S12.5 6.5 12.5 9s2 4.5 4.5 4.5l2 1v-1.3c1.5-.6 2.5-1.9 2.5-3.2z"/>
          <path d="M21.5 9c0-2.5-2-4.5-4.5-4.5S12.5 6.5 12.5 9s2 4.5 4.5 4.5l2 1v-1.3c1.5-.6 2.5-1.9 2.5-3.2z"/>
          <circle cx="15.5" cy="9" r="0.5" fill="currentColor" stroke="none"/>
          <circle cx="17" cy="9" r="0.5" fill="currentColor" stroke="none"/>
          <circle cx="18.5" cy="9" r="0.5" fill="currentColor" stroke="none"/>
        </svg>
      )
    },
    {
      title: "Onboarding",
      description: "We formalize the partnership, sign necessary NDAs, and set up shared communication and project management tools.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Pristine Clipboard with Checkmark */}
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
          <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
          <path d="M9 14l2 2 4-4"/>
        </svg>
      )
    },
    {
      title: "Development",
      description: "Our expert team collaborates closely to build your features, iterate on designs, and maintain transparent progress tracking.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Browser */}
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path d="M2 7h20" />
          <circle cx="5" cy="5" r="0.5" fill="currentColor" stroke="none"/>
          <circle cx="7" cy="5" r="0.5" fill="currentColor" stroke="none"/>
          <circle cx="9" cy="5" r="0.5" fill="currentColor" stroke="none"/>
          {/* Code */}
          <path d="M10 10L8 12l2 2" />
          <path d="M14 10l2 2-2 2" />
          <path d="M12.5 9.5l-1 5" />
          {/* Gear with white background so lines don't intersect */}
          <circle cx="18" cy="18" r="4.5" fill="white" stroke="none" />
          <circle cx="18" cy="18" r="2.5" fill="white"/>
          <path d="M18 14.5v1.5M18 20v1.5M14.5 18h1.5M20 18h1.5M15.5 15.5l1.1 1.1M19.4 19.4l1.1 1.1M19.4 15.5l-1.1 1.1M15.5 19.4l1.1-1.1"/>
        </svg>
      )
    },
    {
      title: "Review & Delivery",
      description: "We conduct thorough quality assurance testing, incorporate your feedback, and ensure a smooth final handoff of the completed project.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Rocket */}
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
          <path d="M15.5 9a1.5 1.5 0 1 0-2.12-2.12" />
          {/* Checkmark Badge with white fill */}
          <circle cx="18" cy="18" r="5.5" fill="white" stroke="none" />
          <circle cx="18" cy="18" r="4.5" fill="white" />
          <path d="M15.5 18l1.5 1.5 3-3" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gray-1 py-16 md:py-24 font-sans dark:bg-dark-2 relative overflow-hidden">
      <div className="container max-w-[1300px]">
        
        {/* Title */}
        <div className="text-center mb-16 wow fadeInUp" data-wow-delay=".2s">
          <h2 className="text-[32px] md:text-[40px] font-bold text-dark dark:text-white">
            How it Works
          </h2>
        </div>
        
        {/* Cards Container with the background line */}
        <div className="relative mb-16 wow fadeInUp" data-wow-delay=".3s">
          
          {/* Horizontal Background Line (Visible mostly on large screens) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[8px] bg-primary/20 -translate-y-1/2 z-0 dark:bg-primary/10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-8 text-center border border-gray-200 shadow-sm flex flex-col items-center dark:bg-dark dark:border-white/10 transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="text-primary mb-6">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-dark mb-4 dark:text-white">
                  {step.title}
                </h3>
                
                <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center wow fadeInUp" data-wow-delay=".4s">
          <button
            onClick={openPartnerModal}
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg cursor-pointer"
          >
            Start Your Partnership Today
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;
