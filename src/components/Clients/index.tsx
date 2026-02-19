import SingleClient from "./SingleClient";
import { clientsData } from "./clientsData";

const Clients = () => {
  return (
    <section className="relative z-10 bg-[#090E34] pt-[120px] pb-[240px] lg:pt-[120px] lg:pb-[240px]">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[40px]">
            Recent Happy Clients
          </h2>
          <p className="mx-auto max-w-[770px] text-base text-gray-400">
            We act as a strategic partner for enterprises, startups, and governments, driving digital transformation through innovative technology solutions.
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          {clientsData.map((client, i) => (
            <SingleClient key={i} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
