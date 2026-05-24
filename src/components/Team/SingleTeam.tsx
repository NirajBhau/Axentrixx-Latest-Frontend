import { TeamType } from "@/types/team";
import Image from "next/image";
import Link from "next/link";

const SingleTeam = ({ team, index }: { team: TeamType; index: number }) => {
  const { image, name, designation, linkedinLink, bio } = team;

  // Highlight the second card (index 1) with dark teal background
  const isHighlighted = index === 1;

  return (
    <div className="w-full flex justify-center py-10">
      <div className="group relative flex items-center justify-center h-[600px] w-full max-w-[850px]">
        
        {/* The Detail Popup Card (Rectangle with rounded corners) */}
        <div className="absolute z-10 left-1/2 -translate-x-1/2 h-[520px] w-[0px] bg-white dark:bg-dark-2 rounded-[60px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-700 ease-in-out group-hover:w-full group-hover:translate-x-[50px] border border-primary/5">
          <div className="h-full w-full p-14 pl-[240px] flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-400">
            <div className="grid grid-cols-2 gap-10">
              {/* Left Side: Bio & Vision */}
              <div className="space-y-10">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="h-1 w-10 bg-primary rounded-full"></div>
                    <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Founder's Vision</span>
                  </div>
                  <p className="text-base italic leading-relaxed text-body-color dark:text-dark-6">
                    "Building the next generation of technical infrastructure where performance meets human-centric design."
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="h-1 w-10 bg-[#8BC34A] rounded-full"></div>
                    <span className="text-xs font-bold text-[#8BC34A] uppercase tracking-[0.3em]">Company Goals</span>
                  </div>
                  <p className="text-base font-medium leading-relaxed text-dark dark:text-white">
                    Engineering the future of enterprise technology with 99.9% reliability and global scalability.
                  </p>
                </div>
              </div>

              {/* Right Side: Expertise & Values */}
              <div className="space-y-10 border-l border-gray-100 dark:border-dark-3 pl-10">
                <div>
                   <span className="block text-xs font-black text-dark dark:text-white uppercase tracking-widest mb-4">Core Expertise</span>
                   <div className="flex flex-wrap gap-3">
                      {["Full-Stack", "AI Systems", "Cloud Arch", "DevOps"].map((tag) => (
                        <span key={tag} className="px-4 py-1.5 bg-primary/5 text-primary text-xs font-bold rounded-full border border-primary/10">
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>
                <div>
                   <span className="block text-xs font-black text-dark dark:text-white uppercase tracking-widest mb-4">Strategic Values</span>
                   <ul className="text-sm space-y-3 text-body-color dark:text-dark-6 font-medium">
                      <li className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div> Precision Engineering
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div> Global Scalability
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div> Technical Integrity
                      </li>
                   </ul>
                </div>
              </div>
            </div>

            {/* Bottom: Action */}
            <div className="mt-12 flex items-center justify-between border-t border-gray-100 dark:border-dark-3 pt-8">
              {linkedinLink && (
                <Link
                  href={linkedinLink}
                  target="_blank"
                  className="group/link inline-flex items-center space-x-4 text-sm font-black text-primary uppercase tracking-widest"
                >
                  <span className="group-hover/link:underline">Connect on LinkedIn</span>
                  <div className="p-2.5 bg-primary/10 rounded-full group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
                </Link>
              )}
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Axentrixx Leadership / 2026</span>
            </div>
          </div>
        </div>

        {/* The Main Pill Card (The Initial Interactive Element) */}
        <div className="absolute z-20 h-[580px] w-[300px] rounded-full bg-white dark:bg-dark shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:-translate-x-[280px] group-hover:scale-90 border border-primary/10 cursor-pointer overflow-hidden">
          <div className="relative mb-10 h-[220px] w-[220px]">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl transition-all group-hover:blur-3xl"></div>
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-xl bg-white">
              <Image
                src={image || "/images/team/patil.png"}
                alt={name}
                fill
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          </div>
          <div className="text-center px-8 relative z-10">
            <h3 className="mb-3 text-4xl font-black text-dark dark:text-white leading-tight tracking-tight">
              {name}
            </h3>
            <div className="inline-block px-5 py-2 bg-primary/10 rounded-full">
              <p className="text-xs font-black text-primary uppercase tracking-[0.2em]">
                Founder
              </p>
            </div>
            <div className="mt-12 flex justify-center opacity-30 group-hover:opacity-100 transition-opacity">
               <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Hover to Discover</span>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-x text-primary"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SingleTeam;
