import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/app/services/servicesData";

const AllServices = () => {
  return (
    <section className="pb-[120px] pt-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div key={service.id} className="w-full group bg-white dark:bg-dark-2 rounded-xl overflow-hidden shadow-two hover:shadow-one transition duration-300">
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-8 sm:p-9 md:p-7 xl:p-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <Link href={`/services/${service.slug}`} className="hover:text-primary transition duration-300">
                    {service.title}
                  </Link>
                </h3>
                <p className="mb-8 text-base font-medium text-body-color leading-relaxed border-b border-body-color/10 pb-8 dark:border-white/10">
                  {service.paragraph}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-sm font-bold text-black dark:text-white hover:text-primary transition-colors"
                >
                  View Details
                  <svg className="ml-2 fill-current" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export default AllServices;
