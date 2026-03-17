import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Niraj Patil",
    designation: "Co-Founder & Full-Stack Developer",
    bio: "Building scalable and high-performance digital solutions.",
    image: "/images/team/patil.png",
    // facebookLink: "/#",
    // twitterLink: "/#",
    // instagramLink: "/#",
    linkedinLink: "https://www.linkedin.com/",
  },
  {
    id: 2,
    name: "Vandan Patel",
    designation: "Co-Founder & Product Strategist",
    bio: "Turning ideas into impactful digital products.",
    image: "/images/team/vandan.jpeg",
    // facebookLink: "/#",
    // twitterLink: "/#",
    // instagramLink: "/#",
    linkedinLink: "https://www.linkedin.com/",
  },
  /*
  {
    id: 3,
    name: "David Smith",
    designation: "Lead Developer",
    image: "/images/team/team-03.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Content Strategy Head",
    image: "/images/team/team-04.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  */
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
            Meet the Team
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
