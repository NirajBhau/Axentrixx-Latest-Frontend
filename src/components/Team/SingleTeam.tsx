import { TeamType } from "@/types/team";
import Image from "next/image";
import Link from "next/link";

const SingleTeam = ({ team, index }: { team: TeamType; index: number }) => {
  const { image, name, designation, linkedinLink, bio } = team;

  // Highlight the second card (index 1) with dark teal background
  const isHighlighted = index === 1;

  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
      <div
        className={`group relative overflow-hidden rounded-full px-8 pb-20 pt-20 text-center transition-all duration-300 hover:-translate-y-2 h-full min-h-[540px] flex flex-col justify-between
          ${isHighlighted
            ? "bg-primary text-white shadow-xl"
            : "bg-[#F4F7F9] text-dark dark:bg-dark dark:text-white shadow-sm hover:shadow-md"
          }`}
      >
        {/* Profile Photo */}
        <div className="relative mx-auto mb-8 h-[140px] w-[140px]">
          <div className="absolute inset-0 rounded-full bg-white/20 blur-lg transition-all group-hover:blur-xl"></div>
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-lg bg-white">
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                className={`object-cover transition-transform duration-500 ${index === 1 ? "scale-[1.25] group-hover:scale-[1.35] object-center" :
                  index === 0 ? "scale-[1.0] group-hover:scale-110 object-top" :
                    "group-hover:scale-110 object-center"
                  }`}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-200">
                <svg
                  className="h-16 w-16 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Name & Bio */}
        <div className="relative z-10">
          <h3 className={`mb-3 text-2xl font-bold ${isHighlighted ? "text-white" : "text-dark dark:text-white"}`}>
            {name}
          </h3>
          <p className={`text-base leading-relaxed ${isHighlighted ? "text-white/90" : "text-body-color dark:text-dark-6"}`}>
            {bio || "Building scalable and high-performance digital solutions."}
          </p>
        </div>

        {/* LinkedIn Link */}
        {linkedinLink && (
          <div className="mt-8 flex justify-center">
            <Link
              href={linkedinLink}
              target="_blank"
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-110
                ${isHighlighted
                  ? "bg-white/20 text-white hover:bg-white/40"
                  : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.466 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13.001 10.283 13.001 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleTeam;
