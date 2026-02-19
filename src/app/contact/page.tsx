
import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Let's Build Something Amazing",
  description: "Have a project in mind? Contact Axentrixx today to discuss your digital transformation needs. Get a free consultation and quote.",
  openGraph: {
    title: "Contact Axentrixx",
    description: "Have a project in mind? Let's discuss your digital transformation needs. Get a free consultation.",
    url: "https://axentrixx.com/contact",
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
