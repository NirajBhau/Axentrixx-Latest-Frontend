
import Breadcrumb from "@/components/Common/Breadcrumb";
import CareersView from "@/components/Careers/CareersView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join Our Engineering Team | Axentrixx",
  description: "Join Axentrixx and help build high-performance software, modern web products, and AI solutions. Explore open engineering, design, and management positions.",
  alternates: {
    canonical: "https://axentrixx.com/careers",
  },
  openGraph: {
    title: "Careers at Axentrixx - Work with Us",
    description: "Join Axentrixx and help build high-performance software, modern web products, and AI solutions. Explore open positions.",
    url: "https://axentrixx.com/careers",
    siteName: "Axentrixx",
    images: [
      {
        url: "/images/logo/axenlogo.png",
        width: 1200,
        height: 630,
        alt: "Careers at Axentrixx",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Axentrixx - Work with Us",
    description: "Join Axentrixx and help build high-performance software, modern web products, and AI solutions.",
    images: ["/images/logo/axenlogo.png"],
  },
};

const CareersPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Careers"
        pageDescription="Build the future with us. We are looking for passionate individuals to join our growing team."
        pageLink="/careers"
      />
      <CareersView />
    </>
  );
};

export default CareersPage;
