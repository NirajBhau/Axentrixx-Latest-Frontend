
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "../servicesData";
import ServiceSidebar from "@/components/Services/ServiceSidebar";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ServiceProcess from "@/components/Services/ServiceProcess";


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
    title: `${service.title} | Axentrixx Services`,
    description: service.paragraph,
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
        pageName="Service Details"
        pageDescription={service.paragraph}
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/3">
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
                <div className="space-y-6">
                  {service.details.points.map((point: { title: string; description: string }, index: number) => (
                    <div key={index}>
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

              {/* Service Process Section */}
              <ServiceProcess />
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
