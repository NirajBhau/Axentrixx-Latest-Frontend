import Image from "next/image";

const Founder = () => {
  return (
    <section className="bg-white py-20 lg:py-[140px] overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap -mx-4 items-start">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-[45%] px-4">
            <div className="relative">
              {/* Coordinates Header */}
              <div className="flex items-center space-x-2 mb-3">
                 <div className="h-2 w-2 rounded-full bg-[#3056D3]"></div>
                 <span className="text-[10px] font-bold text-[#A1ADBB] tracking-widest uppercase">
                    POS: 19.0760° N, 72.8777° E
                 </span>
              </div>

              {/* Main Image with Blue Accent Bar */}
              <div className="relative">
                 <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#3056D3] z-10"></div>
                 <div className="overflow-hidden shadow-2xl">
                    <Image
                      src="/images/team/patil.png"
                      alt="Niraj Patil"
                      width={600}
                      height={700}
                      className="w-full object-cover"
                    />
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Details & Manifesto */}
          <div className="w-full lg:w-[55%] px-4 lg:pl-20 mt-12 lg:mt-0">
             {/* Offset to align with image top - the header is about 30px, so we adjust */}
            <div className="max-w-[500px] lg:pt-[33px]">
              <span className="block mb-4 text-xs font-bold text-[#3056D3] tracking-[0.3em] uppercase">
                Leadership Profile
              </span>
              <h2 className="text-5xl lg:text-7xl font-bold text-[#090E34] mb-2 tracking-tight">
                Niraj Patil
              </h2>
              <p className="text-xl italic font-bold text-[#A1ADBB] uppercase tracking-widest mb-12">
                Founder
              </p>

              <div className="relative mb-16 pt-8">
                {/* Quotation Marks */}
                <div className="absolute top-0 left-0">
                   <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 20V10.8108C0 4.86486 4.32432 0 10.2703 0V4.32432C7.56757 4.32432 5.40541 6.48649 5.40541 9.18919V10.8108H10.2703V20H0ZM13.7297 20V10.8108C13.7297 4.86486 18.0541 0 24 0V4.32432C21.2973 4.32432 19.1351 6.48649 19.1351 9.18919V10.8108H24V20H13.7297Z" fill="#D6E0FF"/>
                   </svg>
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-[#090E34] font-medium">
                  "We don't just build software; we engineer the momentum that drives industries forward with quiet confidence and absolute technical clarity."
                </p>
              </div>

              <div className="flex items-center space-x-12 mb-16">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="group flex items-center space-x-3"
                >
                  <div className="h-[1px] w-8 bg-[#A1ADBB] group-hover:bg-[#3056D3] group-hover:w-12 transition-all"></div>
                  <span className="text-xs font-bold text-[#090E34] tracking-widest uppercase group-hover:text-[#3056D3]">
                    Linkedin
                  </span>
                </a>
                <a
                  href="/contact"
                  className="group flex items-center space-x-3"
                >
                  <div className="h-[1px] w-8 bg-[#A1ADBB] group-hover:bg-[#3056D3] group-hover:w-12 transition-all"></div>
                  <span className="text-xs font-bold text-[#090E34] tracking-widest uppercase group-hover:text-[#3056D3]">
                    Contact
                  </span>
                </a>
              </div>

               {/* Founder's Manifesto Slide & Popup Animation */}
               <div className="group relative flex items-center h-[200px] w-full">
                 {/* The Popup Detail Card (Rectangle-Round) */}
                 <div className="absolute z-10 left-0 h-[180px] w-0 bg-[#F4F7FF] rounded-[30px] shadow-lg overflow-hidden transition-all duration-700 ease-in-out group-hover:w-full group-hover:translate-x-[40px] border border-primary/5">
                    <div className="h-full p-8 pl-32 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-400">
                       <p className="text-[10px] font-bold text-[#3056D3] tracking-widest uppercase mb-2">
                          Company Goals
                       </p>
                       <p className="text-xs leading-relaxed text-[#5C6B82] font-bold">
                          Engineering the future of enterprise technology with precision, passion, and global innovation.
                       </p>
                    </div>
                 </div>

                 {/* The Main Pill Card (Initial State) */}
                 <div className="absolute z-20 h-[200px] w-[140px] bg-[#3056D3] rounded-full flex flex-col items-center justify-center p-4 text-center transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:-translate-x-[20px] group-hover:scale-90 shadow-xl cursor-pointer">
                    <p className="text-[10px] font-black text-white tracking-widest uppercase mb-2">
                        Founder's <br/> Manifesto
                    </p>
                    <div className="h-[1px] w-8 bg-white/30 my-2"></div>
                    <span className="text-[8px] text-white/70 uppercase font-bold tracking-widest">Hover to <br/> Expand</span>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
