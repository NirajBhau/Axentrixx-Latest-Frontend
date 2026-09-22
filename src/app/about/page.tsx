import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Premier Software & Web Development Company | Axentrixx",
  description: "Learn about Axentrixx, a premier web development and software solutions company dedicated to engineering high-performance digital products for agencies and enterprises.",
  alternates: {
    canonical: "https://axentrixx.com/about",
  },
  openGraph: {
    title: "About Us - Axentrixx Software Solutions",
    description: "Learn about Axentrixx, a premier web development and software solutions company dedicated to engineering digital transformation worldwide.",
    url: "https://axentrixx.com/about",
    siteName: "Axentrixx",
    images: [
      {
        url: "/images/logo/axenlogo.png",
        width: 1200,
        height: 630,
        alt: "About Axentrixx",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Axentrixx Software Solutions",
    description: "A premier web development and software solutions company dedicated to engineering digital transformation worldwide.",
    images: ["/images/logo/axenlogo.png"],
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        pageDescription="Engineering the future of enterprise technology with precision, passion, and innovation."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <Team />
    </>
  );
};

export default AboutPage;
