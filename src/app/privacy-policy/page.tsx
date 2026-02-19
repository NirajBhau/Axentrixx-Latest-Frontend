
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Axentrixx",
  description: "This page contains privacy policy of Axentrixx.",
  // other metadata
};

const PrivacyPolicy = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        pageDescription="Last Updated: 17 October 2025"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We are always interested to hear from anyone who wishes to get in touch with us… whether you have an opportunity to work on fun-packed stuff or just to poke us and say “Hello”…
                </p>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Axentrixx respects the privacy of its clients and website visitors. Privacy is one of the important parts of our business value and ethics. Protection of your privacy is one of our fundamental responsibilities; hence, it is very important to us and our employees.
                </p>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We ensure not to use your contact data such as your name, phone number and email address for personal use. Once you fill our contact form, we use your contact information only for sending our company’s information to you. We are publishing this privacy policy statement in order to show our commitment to safeguarding the privacy of information that you share with us.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  1. The Information we collect
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We use your personal information or the information that you provide us to complete your requirement and/or services asked for. We do not sell, rent or share this information with any third-party except to the extent essential to accomplish that requirement/services asked for.
                </p>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  If you show interest in our services and contact us through our website, we may use your email address or other contact information to inform you about our services and new products. To update our website and improve its design/performance, we may use non-identifying information.
                </p>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Each engagement is defined by a separate proposal, quotation, or agreement which, once accepted, becomes part of these Terms.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  2. Log Data
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We want to inform you that whenever you visit our website, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser version, pages of our website that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  3. Cookies
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We use cookies to gather aggregate information about site interaction and traffic to improve the user experience of the site. We may also take the help from third-party (such as Google Analytics) to track this information on the behalf of us.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  4. Security
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  5. Third-party Links
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  You may find links to other sites on this website; we are not responsible for the privacy practices and content of these third-party sites. This privacy statement solely applies to information gathered by this site.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  6. Changes in the Privacy Policy
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  For any changes made in this privacy policy, you will see those changes on this web page. Therefore, you will always stay aware about how we collect and utilize your information.
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  7. Disclaimer
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We reserve all rights to change or modify this privacy policy anytime without informing anyone with prior notification. Thus, we advise you to review this privacy policy timely
                </p>

                <h3 className="font-xl mb-10 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  8. Contact Us
                </h3>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  If you have any questions or suggestions about our Privacy Policy, do not hesitate to Contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
