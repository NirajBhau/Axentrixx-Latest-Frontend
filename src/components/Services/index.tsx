import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/app/services/servicesData";

const Services = () => {
  return (
    <section id="services" className="bg-[#0B1120] py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-y-4">
          <div className="w-full lg:w-2/3">
            <span className="mb-2 block text-lg font-semibold text-primary">
              WHAT WE DO
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-[40px] leading-tight">
              We help to build clients their <br className="hidden md:block" /> dream projects
            </h2>
          </div>
          <div className="w-full lg:w-auto">
            <Link
              href="/#works"
              className="text-base font-semibold text-white hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              EXPLORE PORTFOLIO
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div key={service.id} className="w-full group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="overflow-hidden relative aspect-[370/220]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-8 sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mb-4 block text-xl font-bold text-dark group-hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl transition duration-300"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="mb-8 text-base font-medium text-body-color leading-relaxed line-clamp-3">
                  {service.paragraph}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-base font-medium text-body-color group-hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  View Details
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                    <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
