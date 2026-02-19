
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Axentrixx",
  description: "This page contains terms of service of Axentrixx.",
  // other metadata
};

const TermsOfService = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Service"
        pageDescription="Last Updated: 17 October 2025"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Welcome to Axentrixx. By engaging our services or accessing our website Axentrixx, you (“Client”, “you”, or “your”) agree to the following Terms of Service (“Terms”).
                </p>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Please read these Terms carefully before using our services.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  1. Scope of Services
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Axentrixx provides professional web and mobile application development, SaaS development, UI/UX design, DevOps, cloud infrastructure, WordPress and WooCommerce development, migration and maintenance, and related consulting services.
                </p>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Each engagement is defined by a separate proposal, quotation, or agreement which, once accepted, becomes part of these Terms.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  2. Acceptance of Terms
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  By signing a project agreement, submitting payment, or using our services, you acknowledge that you have read, understood, and agreed to these Terms. If you are entering into this Agreement on behalf of a company or organization, you represent that you have the authority to bind that entity.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  3. Project Initiation and Communication
                </h3>
                <div className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Project timelines commence only after:
                  <ul className="list-disc pl-5">
                    <li>Receipt of the agreed advance payment,</li>
                    <li>Written approval of the project scope, and</li>
                    <li>Delivery of all necessary content, credentials, and materials from the Client.</li>
                  </ul>
                  Timely communication and collaboration from both parties are essential for on-time delivery.
                </div>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  4. Payments and Refunds
                </h3>
                <ul className="mb-8 list-disc pl-5 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <li>All payments are due according to the milestone schedule or payment plan mentioned in the proposal or invoice.</li>
                  <li>Payments must be made via bank transfer, credit card, or other approved methods.</li>
                  <li>Refund Policy: A full refund is available only if the project has not been initiated. Once work begins (including research, design, setup, or development), payments are non-refundable.</li>
                  <li>In the event of project cancellation after initiation, work completed up to that point will be billed, and deliverables may be withheld until payment is received.</li>
                </ul>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  5. Intellectual Property Rights
                </h3>
                <ul className="mb-8 list-disc pl-5 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <li>All intellectual property (source code, designs, documents, etc.) developed by Axentrixx remains the property of Axentrixx until full payment is received.</li>
                  <li>Upon receipt of full payment, ownership of the final deliverables transfers to the Client, except for proprietary frameworks, libraries, or third-party components used in the project</li>
                  <li>Axentrixx reserves the right to display completed projects or design elements in its portfolio and marketing materials unless otherwise agreed in writing.</li>
                </ul>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  6. Client Responsibilities
                </h3>
                <div className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The Client agrees to:
                  <ul className="list-disc pl-5">
                    <li>Provide accurate and complete project requirements, content, and approvals in a timely manner.</li>
                    <li>Ensure all provided content (text, images, data, etc.) is owned by the Client or licensed for use.</li>
                    <li>Review and approve deliverables within the agreed timeline.</li>
                    <li>Maintain communication throughout the project.</li>
                  </ul>
                  Axentrixx is not liable for delays caused by incomplete or late submissions, feedback, or Client-side dependencies.
                </div>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  7. Third-Party Tools, APIs, and Integrations
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Axentrixx may integrate third-party tools, APIs, or plugins as part of the project. While we ensure proper configuration, we do not control or guarantee their uptime, performance, or future availability.
                  We are not liable for damages, losses, or functionality issues resulting from updates, policy changes, or discontinuation of any third-party services.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  8. Confidentiality
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Both parties agree to keep all confidential information, trade secrets, and proprietary data strictly confidential and not disclose it to third parties without prior written consent.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  9. Limitation of Liability
                </h3>
                <div className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  To the maximum extent permitted by applicable law:
                  <ul className="list-disc pl-5">
                    <li>Axentrixx shall not be liable for indirect, incidental, consequential, or punitive damages, including loss of profits, data, or goodwill.</li>
                    <li>Our total liability for any claim shall not exceed the total fees paid by the Client for the specific project under which the claim arises.</li>
                  </ul>
                </div>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  10. Warranty and Support
                </h3>
                <div className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Axentrixx provides a limited warranty period (typically 30 days post-deployment) to fix bugs or technical errors related to delivered functionality.
                  This warranty does not cover issues caused by Client modifications, third-party interference, hosting changes, or misuse.
                  Ongoing maintenance, feature upgrades, or extended support may be provided under a separate contract.
                </div>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  11. Termination
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Either party may terminate the engagement by giving written notice if the other party breaches these Terms and fails to remedy the breach within a reasonable period.
                  Upon termination, the Client must pay for all work completed up to the termination date.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  12. Dispute Resolution and Governing Law
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We aim to resolve all disputes through communication and mutual agreement.
                </p>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  If resolution is not possible, the dispute shall be referred to binding arbitration in Vadodara, Gujarat, India, under the Arbitration and Conciliation Act, 1996.
                </p>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  For international clients, these Terms are interpreted under the laws of India, with consideration to international contract standards (including EU and U.S. commercial norms).
                </p>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Jurisdiction lies exclusively with the competent courts of Vadodara, India.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  13. International Service Provision
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  For Clients located outside India, Axentrixx operates in compliance with international commercial and data protection standards (including GDPR).
                  All contracts, payments, and communications are governed under international business principles, and deliverables are subject to export compliance laws.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  14. Data Protection and Privacy
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Axentrixx complies with applicable privacy and data protection regulations, including the Information Technology Act, 2000 (India) and GDPR (EU) where applicable.
                  We use collected data only for service delivery, support, and communication purposes, in accordance with our Privacy Policy.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  15. Force Majeure
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Axentrixx shall not be liable for failure to perform obligations due to causes beyond its reasonable control, including natural disasters, internet outages, government actions, or labor disputes.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  16. Updates to These Terms
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Axentrixx reserves the right to update or modify these Terms at any time. Updates will be posted on this page with a revised effective date. Continued use of our services after changes constitutes acceptance of the updated Terms.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  17. Contact Us
                </h3>
                <div className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  For any questions about these Terms, please contact:
                  <br />
                  <br />
                  Axentrixx
                  <br />
                  201, Trivia Mall at Natubhai Circle
                  <br />
                  Vadodara, Gujarat – 390007, India
                  <br />
                  <br />
                  help@axentrixx.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
