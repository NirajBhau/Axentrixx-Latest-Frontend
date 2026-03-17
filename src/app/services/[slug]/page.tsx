
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "../servicesData";
import ServiceSidebar from "@/components/Services/ServiceSidebar";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ServiceProcess from "@/components/Services/ServiceProcess";
import ServiceFaq from "@/components/Services/ServiceFaq";
import ServiceCTA from "@/components/Services/ServiceCTA";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.seoMetadata?.title || `${service.title} | Axentrixx Services`,
    description: service.seoMetadata?.description || service.paragraph,
  };
}

const ServiceDetailsPage = async ({ params }: Props) => {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        pageName={service.title}
        pageDescription={service.paragraph}
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/3 h-full relative">
              <ServiceSidebar currentSlug={slug} />
            </div>

            <div className="w-full px-4 lg:w-2/3">
              <div className="mb-10 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                {service.title}
              </h2>

              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base xl:text-lg">
                {service.details?.intro || service.paragraph}
              </p>

              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base xl:text-lg">
                {service.details?.content}
              </p>

              {service.details?.points && service.details.points.length > 0 && (
                <div className="mb-12 space-y-6">
                  {service.details.points.map((point: { title: string; description: string }, index: number) => (
                    <div key={index} className="rounded-lg border border-stroke bg-white p-6 shadow-sm dark:border-dark-3 dark:bg-dark-2">
                      <h4 className="mb-2 text-lg font-bold text-black dark:text-white">
                        {String(index + 1).padStart(2, '0')}. {point.title}
                      </h4>
                      <p className="text-base font-medium text-body-color">
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Problem & Solution Sections */}
              {service.problemSection && (
                <div className="mb-12 rounded-xl bg-red-50 p-8 dark:bg-red-900/10">
                  <h3 className="mb-4 text-2xl font-bold text-red-800 dark:text-red-400">
                    {service.problemSection.title}
                  </h3>
                  <div className="text-base leading-relaxed text-body-color dark:text-gray-400 whitespace-pre-line">
                    {service.problemSection.content}
                  </div>
                </div>
              )}

              {service.solutionSection && (
                <div className="mb-12 rounded-xl bg-green-50 p-8 dark:bg-green-900/10">
                  <h3 className="mb-4 text-2xl font-bold text-green-800 dark:text-green-400">
                    {service.solutionSection.title}
                  </h3>
                  <div className="text-base leading-relaxed text-body-color dark:text-gray-400 whitespace-pre-line">
                    {service.solutionSection.content}
                  </div>
                </div>
              )}

              {/* Industries & Technologies */}
              <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                {service.industries && (
                  <div className="rounded-xl border border-stroke bg-white p-8 dark:border-dark-3 dark:bg-dark-2">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                      Industries We Serve
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.industries.map((industry, i) => (
                        <li key={i} className="flex items-center gap-2 text-base text-body-color">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          {industry}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.technologies && (
                  <div className="rounded-xl border border-stroke bg-white p-8 dark:border-dark-3 dark:bg-dark-2">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span key={i} className="rounded bg-gray-100 px-3 py-1 text-sm font-semibold text-dark dark:bg-dark-3 dark:text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Service Process Section */}
              <ServiceProcess />

              {/* FAQ Section - Restored to column alignment */}
              {service.faqs && <ServiceFaq faqs={service.faqs} />}

              {/* Internal Linking & CTA */}
              <ServiceCTA />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsPage;

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}
