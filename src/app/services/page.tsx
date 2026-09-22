
import AllServices from "@/components/Services/AllServices";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Web Development, Mobile Apps & AI Solutions | Axentrixx",
  description: "Explore Axentrixx's full-spectrum software services: custom Next.js web development, mobile apps, AI-powered tools, analytics dashboards, and cloud infrastructure.",
  alternates: {
    canonical: "https://axentrixx.com/services",
  },
  openGraph: {
    title: "Software & Web Development Services - Axentrixx",
    description: "Custom web development, mobile apps, AI solutions, cloud infrastructure, and data analytics for agencies and enterprises.",
    url: "https://axentrixx.com/services",
    siteName: "Axentrixx",
    images: [
      {
        url: "/images/logo/axenlogo.png",
        width: 1200,
        height: 630,
        alt: "Axentrixx Web Development & Software Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software & Web Development Services - Axentrixx",
    description: "Custom web development, mobile apps, AI solutions, cloud infrastructure, and data analytics for agencies and enterprises.",
    images: ["/images/logo/axenlogo.png"],
  },
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        pageDescription="We provide end-to-end software solutions tailored to your business needs."
      />
      <AllServices />
    </>
  );
};

export default ServicesPage;
