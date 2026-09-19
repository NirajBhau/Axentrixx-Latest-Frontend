import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Transparent Plans for Every Business",
  description:
    "Explore Axentrixx's transparent pricing plans for web development, AI solutions, and custom software. No hidden fees — just great value for your business.",
  openGraph: {
    title: "Axentrixx Pricing Plans",
    description:
      "Transparent pricing for web development, AI solutions, and custom software. Choose the right plan for your business.",
    url: "https://axentrixx.com/pricing",
  },
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Pricing"
        pageDescription="Transparent, value-driven plans designed to scale with your business."
      />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
