"use client";

import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const jobsData = [
  {
    id: 1,
    title: "Senior React Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    description: "We are looking for an experienced React developer to lead our frontend initiatives.",
    link: "#", // Placeholder for application link
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Hybrid",
    description: "Create stunning user interfaces and experiences for our global clients.",
    link: "#",
  },
  {
    id: 3,
    title: "Backend Engineer (Node.js)",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    description: "Build scalable APIs and backend systems using Node.js and cloud technologies.",
    link: "#",
  },
  {
    id: 4,
    title: "Project Manager",
    department: "Management",
    type: "Contract",
    location: "On-site",
    description: "Coordinate projects, resources, and timelines to ensure successful delivery.",
    link: "#",
  },
];

interface OpenPositionsProps {
  onApply: (position: string) => void;
}

const OpenPositions = ({ onApply }: OpenPositionsProps) => {
  return (
    <section className="pb-[120px] pt-[120px]">
      <div className="container">
        <SectionTitle
          title="Open Positions"
          paragraph="Ready to make an impact? Check out our current openings and find the role that fits you best."
          center
        />

        <div className="flex flex-col gap-6">
          {jobsData.map((job) => (
            <div
              key={job.id}
              className="wow fadeInUp flex flex-wrap items-center justify-between rounded-lg border border-stroke bg-white p-8 shadow-one transition hover:border-primary hover:shadow-two dark:border-dark-3 dark:bg-dark-2 dark:hover:border-primary"
            >
              <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl">
                    {job.title}
                  </h3>
                  <span className="rounded bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {job.type}
                  </span>
                  <span className="rounded bg-gray-100 px-3 py-1 text-xs font-semibold text-body-color dark:bg-dark-3">
                    {job.location}
                  </span>
                </div>

                <p className="text-base font-medium text-body-color">
                  {job.department} • {job.description}
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex lg:justify-end">
                <button
                  onClick={() => onApply(job.title)}
                  className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-primary/80"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="wow fadeInUp mt-12 text-center" data-wow-delay=".2s">
          <p className="text-base font-medium text-body-color">
            Don't see a position that fits?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact us
            </Link>{" "}
            anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
