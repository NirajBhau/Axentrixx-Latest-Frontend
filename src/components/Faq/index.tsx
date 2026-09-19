import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="FAQ"
          title="Frequently Asked Questions"
          paragraph="Got questions? We have answers. If you don't find what you're looking for, feel free to reach out directly."
          width="640px"
          center
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="How long does a typical project take?"
              answer="Project timelines vary by scope. A custom website typically takes 4–8 weeks. Larger web applications, AI integrations, or custom software projects range from 2–6 months. We'll provide a detailed timeline during our initial consultation."
            />
            <SingleFaq
              question="Do you offer ongoing maintenance and support?"
              answer="Yes. We offer flexible maintenance and support packages after project delivery. These include regular updates, performance monitoring, security patches, and priority technical support. Plans start from 30 days post-launch and can be extended as needed."
            />
            <SingleFaq
              question="What technologies do you specialize in?"
              answer="Our core stack includes Next.js, React, TypeScript, Node.js, PostgreSQL, and Tailwind CSS for web development. For AI and data solutions, we work with Python, OpenAI APIs, Langchain, and cloud platforms including AWS and Google Cloud."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="Do you work with agencies as a white-label partner?"
              answer="Absolutely. We act as a reliable development arm for agencies worldwide, providing white-label development services. Your clients receive the same quality output under your brand. We sign NDAs and maintain full confidentiality."
            />
            <SingleFaq
              question="How is pricing structured?"
              answer="We work on a project-based or retainer model. Pricing depends on the scope, complexity, and timeline of your project. After an initial discovery call, we provide a transparent, itemized proposal with no hidden fees. Contact us for a free consultation."
            />
            <SingleFaq
              question="Can you integrate with our existing systems?"
              answer="Yes. We specialize in third-party API integrations, CRM connections, payment gateways, analytics platforms, and legacy system migrations. We can connect your new solution to virtually any existing infrastructure."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
