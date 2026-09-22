import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Transparent Web & Software Development Plans | Axentrixx",
  description:
    "Explore Axentrixx's transparent pricing plans for web development, AI solutions, and custom software. Flexible models, zero hidden fees, built for agency scaling.",
  alternates: {
    canonical: "https://axentrixx.com/pricing",
  },
  openGraph: {
    title: "Transparent Web Development Pricing Plans - Axentrixx",
    description:
      "Explore Axentrixx's transparent pricing plans for web development, AI solutions, and custom software. Flexible models for agency partners.",
    url: "https://axentrixx.com/pricing",
    siteName: "Axentrixx",
    images: [
      {
        url: "/images/logo/axenlogo.png",
        width: 1200,
        height: 630,
        alt: "Axentrixx Pricing Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Web Development Pricing Plans - Axentrixx",
    description:
      "Explore Axentrixx's transparent pricing plans for web development, AI solutions, and custom software.",
    images: ["/images/logo/axenlogo.png"],
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
