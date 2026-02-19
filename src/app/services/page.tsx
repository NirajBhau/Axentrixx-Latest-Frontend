
import AllServices from "@/components/Services/AllServices";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Web Development, Mobile Apps & AI Solutions",
  description: "Explore Axentrixx's comprehensive software services — custom web development, mobile apps, AI solutions, cloud infrastructure, data analytics, and healthcare systems.",
  openGraph: {
    title: "Our Services - Axentrixx",
    description: "Custom web development, mobile apps, AI solutions, cloud infrastructure, data analytics & more.",
    url: "https://axentrixx.com/services",
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
