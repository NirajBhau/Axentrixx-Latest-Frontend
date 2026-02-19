import React from "react";

const processSteps = [
  {
    id: "01",
    title: "Discovery",
    description: "Requirements analysis, market research, & technical feasibility assessment.",
  },
  {
    id: "02",
    title: "Design",
    description: "User-centered design with prototypes and interactive mockups.",
  },
  {
    id: "03",
    title: "Development",
    description: "Agile development with regular builds and client feedback cycles.",
  },
  {
    id: "04",
    title: "Testing",
    description: "Comprehensive testing across devices, platforms, and performance scenarios.",
  },
  {
    id: "05",
    title: "Deployment",
    description: "Production deployment with monitoring and performance optimization.",
  },
  {
    id: "06",
    title: "Support",
    description: "Ongoing maintenance, updates, and feature enhancements.",
  },
];

const ServiceProcess = () => {
  return (
    <div className="mt-16 overflow-hidden rounded-xl bg-[#F0F8FF] px-6 py-12 sm:px-10 sm:py-16 md:px-12 lg:mt-20">
      <div className="mb-12 text-center">
        <h3 className="mb-3 text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
          Our Process
        </h3>
        <p className="text-base font-medium text-body-color opacity-80">
          A structured approach ensuring quality delivery and client satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className="group relative z-10 overflow-hidden rounded-lg bg-white/60 p-6 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md dark:bg-dark-2"
          >
            {/* Watermark Number */}
            <div className="absolute -right-4 -top-6 z-[-1] text-[90px] font-bold leading-none text-[#1e3a5f] opacity-[0.07] transition-all duration-300 group-hover:opacity-[0.12]">
              {step.id}
            </div>

            <div className="relative z-10">
              <h4 className="mb-3 text-xl font-bold text-[#1e3a5f] dark:text-white">
                {step.title}
              </h4>
              <p className="text-sm font-medium leading-relaxed text-body-color">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProcess;
