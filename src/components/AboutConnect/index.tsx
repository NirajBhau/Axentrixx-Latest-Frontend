import Link from "next/link";

const AboutConnect = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* About Us Column */}
          <div className="w-full px-4 lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-[500px]">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                ABOUT US
              </h4>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-dark sm:text-4xl sm:leading-[1.2]">
                Innovation Led,
                <br />
                Result Driven
              </h2>
              <p className="mb-8 text-base leading-relaxed text-body-color">
                We act as your technology partner, ensuring every line of code aligns with your business goals. From concept to deployment, we are with you.
              </p>
            </div>
          </div>

          {/* Connect With Us Column */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[500px] lg:ml-auto">
              <h2 className="mb-5 text-3xl font-bold leading-tight text-dark sm:text-4xl sm:leading-[1.2]">
                Connect With Us
              </h2>
              <p className="mb-8 text-base leading-relaxed text-body-color">
                Ready to start your next project? Reach out to our team of experts to discuss your custom solution.
              </p>

              <div className="flex items-center space-x-4">
                {/* Social Icons matching reference (Facebook, Twitter, Youtube, Linkedin style) */}
                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/company/axentrixx/"
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7E7E7] text-body-color hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white transition"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.466 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13.001 10.283 13.001 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z"
                    />
                  </svg>
                </Link>

                {/* WhatsApp */}
                <Link
                  href="https://wa.me/919998249244?text=Hello%20Axentrixx%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7E7E7] text-body-color hover:border-[#25D366] hover:bg-[#25D366] hover:text-white transition"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </Link>

                {/* Email */}
                <Link
                  href="mailto:contact@axentrixx.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7E7E7] text-body-color hover:border-primary hover:bg-primary hover:text-white transition"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 11.011L4 6.511V6H20ZM4 18V9.011L12 13.511L20 9.011V18H4Z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConnect;
