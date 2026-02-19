
import Breadcrumb from "@/components/Common/Breadcrumb";
import CareersView from "@/components/Careers/CareersView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join Our Team",
  description: "Join Axentrixx and help build the future of digital software. Explore open positions, company culture, and career opportunities.",
  openGraph: {
    title: "Careers at Axentrixx",
    description: "Join Axentrixx and help build the future of digital software. Explore open positions and career opportunities.",
    url: "https://axentrixx.com/careers",
  },
};

const CareersPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Careers"
        pageDescription="Build the future with us. We are looking for passionate individuals to join our growing team."
      />
      <CareersView />
    </>
  );
};

export default CareersPage;
