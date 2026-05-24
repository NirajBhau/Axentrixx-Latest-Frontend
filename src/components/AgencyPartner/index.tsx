"use client";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

const AgencyPartner = () => {
  const { openPartnerModal } = useModal();
  const features = [
    {
      title: "White-label development support",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
          <path d="m14 14 2.5 2.5a2.12 2.12 0 1 0 3-3L15 9l-1 1" />
          <path d="m15 9 1.5-1.5a2.12 2.12 0 1 0-3-3l-2 2" />
          <path d="m10 9-1.5 1.5a2.12 2.12 0 1 0 3 3L13 12l1-1" />
          <path d="m13 12-1.5 1.5a2.12 2.12 0 1 0 3 3l2-2" />
          <path d="m8 14-2.5-2.5a2.12 2.12 0 1 0-3 3L7 19l1-1" />
          <path d="m7 19 1.5 1.5a2.12 2.12 0 1 0 3-3l-2-2" />
        </svg>
      ),
      fullWidth: false,
    },
    {
      title: "Reliable delivery",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      ),
      fullWidth: false,
    },
    {
      title: "Fast turnaround",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      fullWidth: false,
    },
    {
      title: "Clean code",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      fullWidth: false,
    },
    {
      title: "Long-term collaboration",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
        </svg>
      ),
      fullWidth: true,
    },
  ];

  const stats = [
    { value: "3+", label: "Active Partnerships" },
    { value: "89+", label: "Projects Delivered" },
    { value: "99.8%", label: "Code Quality Score" },
    { value: "24/7", label: "Technical Support" },
  ];

  return (
    <section className="bg-[#F8FAFC] pt-16 pb-12 dark:bg-dark md:pt-20 md:pb-16 lg:pt-28 lg:pb-20 font-sans">
      <div className="container">
        
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Content */}
          <div className="w-full px-4 lg:w-5/12 xl:w-5/12">
            <div className="mb-12 max-w-[540px] lg:mb-0 wow fadeInUp" data-wow-delay=".2s">
              
              {/* Title Section matching the new design */}
              <div className="mb-8">
                <h2 className="text-[36px] font-bold text-[#0F172A] dark:text-white sm:text-[44px] mb-4">
                  Agency Partnership Program
                </h2>
                <div className="h-[5px] w-[120px] rounded-full bg-[#8CC63F]"></div>
              </div>
              
              {/* Subtitle & Description */}
              <div className="mb-10 text-[15px] leading-relaxed text-[#475569] dark:text-dark-6">
                <p className="font-semibold text-[#0F172A] dark:text-white mb-3 text-[16px]">
                  Development Partner <br className="hidden sm:block" /> for Agencies
                </p>
                <p>
                  We augment your internal team with elite engineering talent, allowing you to scale production without the overhead of full-time hires. Precision-engineered solutions delivered under your brand.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-4 rounded-xl bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:bg-dark-2 ${feature.fullWidth ? 'sm:col-span-2' : ''}`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F0F5FF] text-[#0056D2] dark:bg-primary/10">
                      {feature.icon}
                    </div>
                    <span className="text-[14px] font-semibold text-[#1e293b] dark:text-white max-w-[150px] leading-snug">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={openPartnerModal}
                className="inline-flex items-center justify-center rounded-lg bg-[#0056D2] px-8 py-3.5 text-center text-[15px] font-medium text-white transition-all duration-300 hover:bg-[#0047b3] hover:shadow-lg cursor-pointer"
              >
                Partner With Us 
                <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="w-full px-4 lg:w-7/12 xl:w-7/12">
            <div className="relative z-10 mx-auto w-full max-w-[700px] lg:ml-auto wow fadeInRight flex justify-end" data-wow-delay=".3s">
              
              {/* Browser Mockup Wrapper */}
              <div className="relative w-full max-w-[650px] rounded-[12px] bg-[#E8F0FE] p-2 sm:p-3 shadow-[0_30px_60px_rgba(0,0,0,0.08)] dark:bg-dark-2">
                
                {/* Inner Browser */}
                <div className="relative overflow-hidden rounded-[8px] bg-white border border-gray-100 dark:border-white/5 dark:bg-dark-3">
                  {/* Browser Header */}
                  <div className="flex items-center bg-[#F1F5F9] px-4 py-2.5 dark:bg-dark-2">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div className="mx-auto flex h-6 w-full max-w-[300px] items-center justify-start rounded-md bg-white px-3 text-[10px] text-gray-400 shadow-sm dark:bg-dark-3">
                      axentrixx.io/partnership/dashboard
                    </div>
                  </div>

                  {/* Browser Content */}
                  <div className="relative w-full pb-[60%] bg-white">
                    {/* Placeholder for dashboard image - replace with actual if available */}
                    <Image 
                      src="/images/about/about-image-01.jpg"
                      alt="Agency Dashboard"
                      fill
                      className="object-cover opacity-20 filter grayscale"
                    />
                    
                    {/* CSS Dashboard Wireframe (resembling the screenshot) */}
                    <div className="absolute inset-0 bg-white/95 p-6 flex flex-col gap-6">
                       <div className="flex gap-4 border-b border-gray-100 pb-4">
                          <div className="w-8 h-8 rounded-full bg-[#F0F5FF]"></div>
                          <div className="w-24 h-4 mt-2 rounded bg-gray-100"></div>
                       </div>
                       
                       <div className="flex flex-col gap-8 h-full">
                          {/* Top Chart Section */}
                          <div className="h-32 border border-gray-100 rounded-lg p-4 flex items-end gap-2 px-10">
                             {/* Bar Chart Mockup */}
                             {[40, 60, 30, 80, 50, 70, 45, 90, 65, 30, 80].map((h, i) => (
                               <div key={i} className="flex-1 rounded-t-sm bg-[#52B6D6] opacity-80" style={{ height: `${h}%` }}></div>
                             ))}
                          </div>
                          
                          {/* Bottom Table Section */}
                          <div className="h-24 border border-gray-100 rounded-lg p-4">
                             <div className="w-full h-3 bg-gray-100 rounded mb-4 w-1/3"></div>
                             <div className="flex flex-col gap-3">
                                <div className="w-full h-2 bg-[#A0C9EB] rounded"></div>
                                <div className="w-4/5 h-2 bg-[#A0C9EB] rounded"></div>
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Floating Card */}
                <div className="absolute -left-6 -bottom-6 w-[280px] rounded-[16px] bg-[#0056D2] p-6 shadow-[0_20px_40px_rgba(0,86,210,0.3)] z-20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-white leading-tight">Development Team</h4>
                      <span className="text-[10px] font-bold uppercase text-white/70 tracking-wider">Assigned Hub</span>
                    </div>
                  </div>
                  
                  <p className="text-[13px] text-white font-medium leading-snug mb-6">
                    Precision Engineering & <br /> Technical Execution
                  </p>
                  
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full border-2 border-[#0056D2] bg-gray-300 overflow-hidden relative"><Image src="/images/testimonials/author-01.png" alt="team" fill className="object-cover"/></div>
                      <div className="h-8 w-8 rounded-full border-2 border-[#0056D2] bg-gray-300 overflow-hidden relative"><Image src="/images/testimonials/author-02.png" alt="team" fill className="object-cover"/></div>
                      <div className="h-8 w-8 rounded-full border-2 border-[#0056D2] bg-gray-300 overflow-hidden relative"><Image src="/images/testimonials/author-03.png" alt="team" fill className="object-cover"/></div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0056D2] bg-[#0047b3] text-[10px] font-medium text-white">+8</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="my-16 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-white/10"></div>
        
        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 px-4 lg:px-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col border-l-2 border-gray-100 pl-4 dark:border-white/10">
              <span className="text-[22px] font-bold text-[#0056D2] dark:text-white">
                {stat.value}
              </span>
              <span className="text-[14px] text-[#64748b] dark:text-dark-6 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AgencyPartner;
