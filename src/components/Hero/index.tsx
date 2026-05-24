"use client";
import Image from "next/image";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import DotPattern from "./DotPattern";
import { useState } from "react"; // Added useState import

const Hero = () => {
  const { openBookingModal } = useModal(); // Changed openModal to openBookingModal
  const [isOpen, setIsOpen] = useState(false); // Added useState declaration

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-white pt-[120px] pb-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="hero-content wow fadeInUp max-w-[780px]"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-dark sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  High-Performance Websites That Turn Visitors Into Customers
                </h1>
                <p className="mb-9 max-w-[600px] text-base font-medium text-body-color sm:text-lg sm:leading-[1.44]">
                  We build fast, conversion-optimized websites designed to scale your business and capture more leads. Results-driven engineering for global brands and digital agencies.
                </p>

                <div className="mb-8 flex flex-wrap items-center gap-4 text-sm font-medium text-body-color sm:text-base">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 dark:text-blue-500">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                      </svg>
                    </span>
                    High-Performance Web
                  </div>

                  <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block"></span>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 dark:text-green-500">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                      </svg>
                    </span>
                    Enterprise Scalability
                  </div>
                </div>
                <div className="mb-10">
                  <div className="flex flex-wrap items-center gap-5">
                    <button
                      onClick={openBookingModal}
                      className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-[14px] text-center text-base font-medium text-white shadow-1 transition duration-300 ease-in-out hover:bg-primary/90 active:scale-95 animate-heartbeat gap-2"
                    >
                      Book a Free Website Audit
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    {/* <Link
                      href="/brochure.pdf"
                      target="_blank"
                      className="flex items-center gap-4 px-6 py-[14px] text-base font-medium text-body-color transition duration-300 ease-in-out hover:text-primary"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M10 14.1667L4.16666 8.33334L5.34374 7.15626L9.16666 10.9792V0H10.8333V10.9792L14.6562 7.15626L15.8333 8.33334L10 14.1667ZM2.5 19.1667C1.8125 19.1667 1.22395 18.9219 0.734366 18.4323C0.244783 17.9427 -8.3779e-08 17.3542 -8.3779e-08 16.6667V13.3333H1.66666V16.6667C1.66666 16.8958 1.74826 17.092 1.91145 17.2552C2.07464 17.4184 2.27083 17.5 2.5 17.5H17.5C17.7292 17.5 17.9253 17.4184 18.0885 17.2552C18.2517 17.092 18.3333 16.8958 18.3333 16.6667V13.3333H20V16.6667C20 17.3542 19.7552 17.9427 19.2656 18.4323C18.776 18.9219 18.1875 19.1667 17.5 19.1667H2.5Z" />
                      </svg>
                      Download Brochure
                    </Link> */}
                  </div>
                  <p className="mt-4 text-base font-bold text-blue-600 dark:text-blue-400">
                    Get your free performance & conversion report
                  </p>
                </div>

                <div className="pt-4">
                  <h6 className="mb-4 text-sm font-semibold text-body-color">Trusted by Industry Leaders</h6>
                  <div className="flex items-center gap-6 text-lg font-bold text-gray-400">
                    <span className="hover:text-primary transition">Sharma Logistics</span>
                    <span className="hover:text-primary transition">Mehta FinCorp</span>
                    <span className="hover:text-primary transition">Global Solutions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative z-10 mx-auto max-w-[845px] group"
                data-wow-delay=".25s"
              >
                <div className="mt-16 h-full lg:mt-0 lg:w-full lg:flex lg:items-start lg:justify-end">
                  <div className="relative z-10">
                    <Image
                      src="/images/hero/hero-new.png"
                      alt="hero"
                      className="relative z-20 mx-auto max-w-full rounded-tl-[100px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] object-cover object-center h-[360px] sm:h-[450px] lg:h-[515px] lg:w-[491px] lg:ml-auto"
                      width={491}
                      height={515}
                    />
                    <div className="absolute -left-12 -bottom-12 z-0">
                      <DotPattern />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Hero;
