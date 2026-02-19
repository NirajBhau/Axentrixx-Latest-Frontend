import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Axentrixx",
  description: "This page describes our refund and cancellation policy.",
};

const RefundPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Refund & Cancellation Policy"
        pageDescription="Please read our refund and cancellation policy carefully."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h3 className="mb-6 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Refund Policy
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base xl:text-lg">
                  At Axentrixx, we strive to ensure our clients are satisfied with our services. However, due to the nature of digital services, we generally do not offer refunds once work has commenced or been delivered. Specific terms may be outlined in your service agreement.
                </p>
                <h3 className="mb-6 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Cancellation Policy
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base xl:text-lg">
                  You may cancel a service or project by providing written notice. Cancellation fees may apply depending on the stage of the project and work already completed.
                </p>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base xl:text-lg">
                  Please contact us at support@axentrixx.com for any questions regarding refunds or cancellations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicyPage;
