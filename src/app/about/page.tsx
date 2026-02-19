import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Axentrixx - Software Solutions Company",
  description: "Learn about Axentrixx, a premier Software Solutions Company dedicated to engineering digital transformation for businesses worldwide.",
  openGraph: {
    title: "About Us - Axentrixx",
    description: "A premier Software Solutions Company dedicated to engineering digital transformation for businesses worldwide.",
    url: "https://axentrixx.com/about",
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
