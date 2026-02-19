"use client";
import Image from "next/image";
import { useState } from "react";

const AboutSectionOne = () => {
  const [activeTab, setActiveTab] = useState("About Us");
  return (

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="wow fadeInUp mx-auto mb-14 max-w-[800px] text-center lg:mb-[70px]" data-wow-delay=".1s">
          <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Driving Digital Excellence <br /> for Global Businesses
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            At Axentrixx, we combine engineering precision with creative innovation to build software that drives growth, efficiency, and future-readiness.
          </p>
        </div>

        <div className="mb-12 flex w-full border-b border-stroke dark:border-dark-3">
          <button
            onClick={() => setActiveTab("About Us")}
            className={`flex-1 py-4 text-base font-medium transition-all duration-300 md:text-lg ${activeTab === "About Us"
              ? "border-b-2 border-primary text-primary"
              : "text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
              }`}
          >
            About Axentrixx
          </button>
          <button
            onClick={() => setActiveTab("Our Mission")}
            className={`flex-1 py-4 text-base font-medium transition-all duration-300 md:text-lg ${activeTab === "Our Mission"
              ? "border-b-2 border-primary text-primary"
              : "text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
              }`}
          >
            Our Mission
          </button>
          <button
            onClick={() => setActiveTab("Our Vision")}
            className={`flex-1 py-4 text-base font-medium transition-all duration-300 md:text-lg ${activeTab === "Our Vision"
              ? "border-b-2 border-primary text-primary"
              : "text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
              }`}
          >
            Our Vision
          </button>
        </div>

        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              {/* Main Image (Back/Left) */}
              <div className="absolute left-0 top-0 h-[90%] w-[75%] overflow-hidden rounded-lg">
                <Image
                  src="/images/about/about-image-02.jpg"
                  alt="about axentrixx"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none object-cover"
                />
                <Image
                  src="/images/about/about-image-02-dark.jpg"
                  alt="about axentrixx"
                  fill
                  className="drop-shadow-three hidden dark:block dark:drop-shadow-none object-cover"
                />
              </div>

              {/* Overlap Image (Front/Right - Half Visible) */}
              <div className="absolute right-0 bottom-8 h-[70%] w-[60%] z-10 overflow-hidden rounded-lg">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/about/about-image-01.jpg"
                    alt="axentrixx team"
                    fill
                    className="object-cover"
                  />
                  {/* Semi-transparent overlay to create 'half visible' effect */}
                  <div className="absolute inset-0 bg-white/50 dark:bg-black/50"></div>
                </div>
              </div>

              {/* Blue Waves Graphic */}
              <div className="absolute top-10 right-10 z-20 w-20 animate-pulse">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 20 Q 25 40 50 20 T 100 20" stroke="#3056D3" strokeWidth="4" fill="none" />
                  <path d="M0 40 Q 25 60 50 40 T 100 40" stroke="#3056D3" strokeWidth="4" fill="none" />
                  <path d="M0 60 Q 25 80 50 60 T 100 60" stroke="#3056D3" strokeWidth="4" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              {activeTab === "About Us" && (
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-3xl">
                    Global Digital Transformation Partner
                  </h3>
                  <p className="mb-6 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Axentrixx Technologies is a modern software solutions company dedicated to helping businesses navigate the complexities of the digital age. We specialize in building high-performance web applications, cloud-native platforms, and AI-driven automation systems.
                  </p>
                  <p className="mb-6 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    With a focus on reliability and scalability, we partner with startups and enterprises alike to deliver technology that not only meets today's needs but anticipates tomorrow's challenges.
                  </p>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Our team of expert developers and strategists work collaboratively to turn your vision into a robust digital reality.
                  </p>
                </div>
              )}
              {activeTab === "Our Mission" && (
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-3xl">
                    Empowering Growth Through Technology
                  </h3>
                  <p className="mb-6 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Our mission is to democratize access to enterprise-grade technology. We aim to empower businesses of all sizes with scalable, secure, and intelligent software solutions that optimize operations and unlock new revenue streams.
                  </p>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We are committed to continuous innovation, ensuring our clients always stay ahead of the curve in a rapidly evolving digital landscape.
                  </p>
                </div>
              )}
              {activeTab === "Our Vision" && (
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-3xl">
                    Architecting the Digital Future
                  </h3>
                  <p className="mb-6 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    To be the most trusted global partner for digital transformation, recognized for our technical excellence, client-centric approach, and ability to deliver tangible business value.
                  </p>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We envision a world where technology seamlessly bridges the gap between potential and performance for every organization.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default AboutSectionOne;
