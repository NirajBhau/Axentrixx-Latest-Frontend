import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Niraj Patil",
    designation: "Co-Founder & Full-Stack Developer",
    bio: "Building scalable and high-performance digital solutions.",
    image: "/images/team/team-01.png",
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
    image: "/images/team/team-02.png",
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
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Experts"
            paragraph="Our team of dedicated professionals is committed to delivering excellence in every project."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
