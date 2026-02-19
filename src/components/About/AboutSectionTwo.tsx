
import Link from "next/link";

const AboutSectionTwo = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-gray-50/50 dark:bg-dark">
      {/* Background Gradients/Blobs */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] bg-gradient-to-b from-blue-100/50 to-purple-100/50 blur-3xl dark:from-blue-900/20 dark:to-purple-900/20 rounded-full opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] bg-gradient-to-t from-blue-100/50 to-cyan-100/50 blur-3xl dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full opacity-60 pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-5/12">
            <div
              className="wow fadeInUp relative mx-auto mb-12 max-w-[500px] text-center lg:m-0 lg:text-left"
              data-wow-delay=".15s"
            >
              <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-[1.2]">
                Why Choose Axentrixx?
              </h2>
              <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We go beyond code to deliver value. Our client-centric approach, combined with deep technical expertise, ensures that every solution we build is a strategic asset for your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-primary/90 hover:shadow-lg"
              >
                Let's Collaborate
              </Link>
            </div>
          </div>

          <div className="w-full px-4 lg:w-7/12">
            <div className="flex flex-wrap justify-center gap-6 sm:flex-nowrap sm:gap-8">
              {/* Column 1 */}
              <div className="flex flex-col gap-6 sm:gap-8 w-full sm:w-1/2 pt-0 sm:pt-0">
                {/* Future-Ready Tech Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-dark-2">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C7.58172 2 4 5.58172 4 10C4 11.8919 4.66117 13.6288 5.76632 15C6.73711 16.7458 9 20 9 20H15C15 20 17.2629 16.7458 18.2337 15C19.3388 13.6288 20 11.8919 20 10C20 5.58172 16.4183 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Future-Ready Tech</h3>
                  <p className="text-sm text-body-color leading-relaxed">
                    We leverage AI, Cloud, and modern frameworks to build solutions that keep you ahead of the curve.
                  </p>
                </div>

                {/* Scalable Architectures Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-dark-2">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Scalable Architectures</h3>
                  <p className="text-sm text-body-color leading-relaxed">
                    Our systems are engineered to handle growth effortlessly, ensuring peak performance at any scale.
                  </p>
                </div>
              </div>

              {/* Column 2 - Shifted Down */}
              <div className="flex flex-col gap-6 sm:gap-8 w-full sm:w-1/2 pt-0 sm:pt-16">
                {/* Precision Engineering Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-dark-2">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:bg-purple-400/10 dark:text-purple-400">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Precision Engineering</h3>
                  <p className="text-sm text-body-color leading-relaxed">
                    We adhere to clean code standards and rigorous testing to deliver bug-free, maintainable software.
                  </p>
                </div>

                {/* Collaborative Partnership Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-dark-2">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 6H23V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Collaborative Partnership</h3>
                  <p className="text-sm text-body-color leading-relaxed">
                    We work as an extension of your team, ensuring transparency and alignment with your business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

