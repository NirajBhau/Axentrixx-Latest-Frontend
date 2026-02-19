
import Link from "next/link";
import { servicesData } from "@/app/services/servicesData";

const ServiceSidebar = ({ currentSlug }: { currentSlug: string }) => {
  return (
    <div className="w-full">
      {/* Services List */}
      <div className="mb-10 rounded-sm border border-stroke bg-white p-4 shadow-three dark:border-dark-3 dark:bg-dark-2 dark:shadow-two sm:p-6 lg:p-8">
        <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
          Services
        </h3>
        <ul className="space-y-2">
          {servicesData.map((service) => (
            <li key={service.id}>
              <Link
                href={`/services/${service.slug}`}
                className={`group flex items-center justify-between rounded-sm px-4 py-3 text-base font-medium transition-all hover:bg-primary/5 hover:text-primary dark:hover:bg-primary/10 ${currentSlug === service.slug
                    ? "bg-primary/5 text-primary dark:bg-primary/10"
                    : "text-body-color dark:text-body-color-dark"
                  }`}
              >
                {service.title}
                <svg
                  className={`fill-current transition-transform duration-300 ${currentSlug === service.slug ? "translate-x-1" : "group-hover:translate-x-1"
                    }`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Let's Talk CTA */}
      <div className="rounded-sm bg-primary p-6 text-center shadow-three dark:bg-primary dark:shadow-two sm:p-8 lg:p-10">
        <h3 className="mb-2 text-2xl font-bold text-white">Let's talk</h3>
        <p className="mb-6 text-base font-medium text-white/90">
          (+550) 647 878 093
          <br />
          support@company.com
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-primary transition-all hover:bg-opacity-90 hover:shadow-lg"
        >
          Get a call back
        </Link>
      </div>
    </div>
  );
};

export default ServiceSidebar;
