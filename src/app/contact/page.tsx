
import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Schedule a Free Technical Consultation | Axentrixx",
  description: "Have a web development project or AI requirement? Contact Axentrixx today for a free consultation, proposal, or agency partnership discussion.",
  alternates: {
    canonical: "https://axentrixx.com/contact",
  },
  openGraph: {
    title: "Contact Axentrixx - Web Development & AI Partner",
    description: "Have a project in mind? Contact Axentrixx today for a free consultation, proposal, or agency partnership discussion.",
    url: "https://axentrixx.com/contact",
    siteName: "Axentrixx",
    images: [
      {
        url: "/images/logo/axenlogo.png",
        width: 1200,
        height: 630,
        alt: "Contact Axentrixx",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Axentrixx - Web Development & AI Partner",
    description: "Have a project in mind? Contact Axentrixx today for a free consultation, proposal, or agency partnership discussion.",
    images: ["/images/logo/axenlogo.png"],
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        pageDescription="Have a project in mind? We'd love to hear from you. Let's build something amazing together."
      />

      <section className="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-28 lg:pt-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <ContactForm />
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
