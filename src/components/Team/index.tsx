import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Niraj Patil",
    designation: "Founder",
    bio: "Building scalable and high-performance digital solutions.",
    image: "/images/team/patil.png",
    linkedinLink: "https://www.linkedin.com/",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-white pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px] max-w-[620px]">
          <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[45px]">
            Our Founder
          </h2>
          <div className="h-1.5 w-32 rounded-full bg-[#8BC34A]"></div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center gap-y-10">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
