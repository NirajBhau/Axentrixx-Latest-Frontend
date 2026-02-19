
import Image from "next/image";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52447 5.64213 2.84105 5.64213 3.03631 5.83739L5.5 8.30108L12.9637 0.83739C13.159 0.642127 13.4755 0.642127 13.6708 0.83739L15.3215 2.4881C15.5168 2.68336 15.5168 2.99994 15.3215 3.1952L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionThree = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-02.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none object-cover rounded-md"
              />
              <Image
                src="/images/about/about-image-02-dark.jpg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none object-cover rounded-md"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-3xl">
                  Our Approach to Excellence
                </h3>
                <p className="mb-6 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We follow a structured yet flexible methodology to ensure every project is delivered on time, within budget, and to the highest quality standards.
                </p>
                <div className="mb-9 max-w-[700px]">
                  <div className="mb-10">
                    <h4 className="mb-3 text-lg font-bold text-black dark:text-white">Agile & Iterative</h4>
                    <p className="text-base font-medium leading-relaxed text-body-color">
                      We break down complex problems into manageable sprints, allowing for continuous feedback and rapid adaptations.
                    </p>
                  </div>
                  <div className="mb-10">
                    <h4 className="mb-3 text-lg font-bold text-black dark:text-white">User-Centric Design</h4>
                    <p className="text-base font-medium leading-relaxed text-body-color">
                      Every solution starts with the user. We prioritize intuitive UI/UX to ensure high adoption and engagement.
                    </p>
                  </div>
                  <div className="mb-1">
                    <h4 className="mb-3 text-lg font-bold text-black dark:text-white">End-to-End Ownership</h4>
                    <p className="text-base font-medium leading-relaxed text-body-color">
                      From initial concept and architectural design to deployment and post-launch support, we handle it all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
