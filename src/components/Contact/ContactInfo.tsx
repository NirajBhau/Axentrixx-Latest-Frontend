
const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Call Us */}
      <div className="w-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-dark-3 dark:bg-dark-2">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
              Call Us
            </h3>
            <p className="mb-4 text-base font-medium text-body-color">
              We're here to help! Whether you're exploring new opportunities or planning your next digital project reach out directly.
            </p>
            <p className="text-base font-bold text-black dark:text-white">
              Sales: <span className="font-normal text-body-color">+91 9998249244</span>
            </p>
          </div>
        </div>
      </div>

      {/* Email Us */}
      <div className="w-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-dark-3 dark:bg-dark-2">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
              Email Us
            </h3>
            <p className="mb-4 text-base font-medium text-body-color">
              Have questions? Send us a quick message our team will ensure it reaches the right department.
            </p>
            <div className="space-y-1">
              {/* <p className="text-base font-bold text-black dark:text-white">
                General: <a href="mailto:sales@axentrixx.com" className="font-normal text-body-color hover:text-primary">sales@axentrixx.com</a>
              </p> */}
              <p className="text-base font-bold text-black dark:text-white">
                Sales: <a href="mailto:sales@axentrixx.com" className="font-normal text-body-color hover:text-primary">sales@axentrixx.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
