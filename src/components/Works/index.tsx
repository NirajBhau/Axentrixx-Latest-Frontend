"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/images/portfolio/ecommerce.jpg",
    description: "Scalable online store for retail brand with secure payment integration and inventory management.",
  },
  {
    id: 2,
    title: "Healthcare CRM",
    category: "Web Development",
    image: "/images/portfolio/healthcare.jpg",
    description: "Patient management system for clinics to streamline appointments and medical records.",
  },
  {
    id: 3,
    title: "FinTech Dashboard",
    category: "AI Chatbot",
    image: "/images/portfolio/fintech.jpg",
    description: "Real-time analytics and AI-driven financial insights for investment firms.",
  },
  {
    id: 4,
    title: "Industrial Website",
    category: "Design",
    image: "/images/portfolio/industrial.jpg",
    description: "Modern corporate presence for manufacturing sector showcasing capabilities and infrastructure.",
  },
];

const Works = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle Escape Key and Scroll Lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Lock scroll
    } else {
      document.body.style.overflow = "unset"; // Unlock scroll
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset"; // Cleanup
    };
  }, [isOpen]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  const tabs = ["All", "Web Development", "AI Chatbot", "Design"];

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setPhotoIndex((photoIndex + 1) % filteredProjects.length);
  };

  const prevImage = () => {
    setPhotoIndex((photoIndex + filteredProjects.length - 1) % filteredProjects.length);
  };

  return (
    <section id="works" className="py-16 md:py-20 lg:py-28 bg-[#F9FAFB]">
      <div className="container">
        <div className="mb-12 text-center">
          <h4 className="mb-2 text-lg font-semibold text-primary">
            Creative Portfolio
          </h4>
          <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
            Our Portfolio
          </h2>
          <p className="mx-auto max-w-[600px] text-base text-body-color dark:text-dark-6">
            Explore how we have helped businesses across industries achieve their digital goals through innovative web and mobile solutions.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`rounded-full px-6 py-2 text-base font-medium transition-all duration-300 ${activeTab === tab
                ? "bg-primary text-white shadow-lg"
                : "text-body-color hover:bg-primary/5 hover:text-primary"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="w-full">
              <div
                className="mb-6 overflow-hidden rounded-xl relative aspect-[570/360] group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/40 opacity-0 transition duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <button className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white shadow-lg transform scale-0 transition-transform duration-300 group-hover:scale-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-dark dark:text-white sm:text-2xl">
                {project.title}
              </h3>
              <p className="text-base font-medium text-body-color dark:text-dark-6">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Lightbox / Gallery via Portal */}
        {mounted && isOpen && createPortal(
          <div
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center px-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.90)' }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 z-[100000] rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-all backdrop-blur-sm"
              aria-label="Close lightbox"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-[100000] hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-sm"
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-[100000] hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-sm"
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Image Container - Responsive Layout */}
            <div
              className="relative w-full max-w-6xl flex-1 min-h-0 flex items-center justify-center py-8"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredProjects[photoIndex].image}
                alt={filteredProjects[photoIndex].title}
                fill
                priority
                className="object-contain drop-shadow-2xl"
                sizes="100vw"
              />
            </div>

            {/* Caption - Bottom Fixed within Flex */}
            <div
              className="shrink-0 mb-8 text-center relative z-[100000]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="inline-block rounded-full bg-neutral-900/80 px-8 py-3 backdrop-blur-md border border-white/10 shadow-xl max-w-[90vw]">
                <h3 className="text-xl font-bold text-white">{filteredProjects[photoIndex].title}</h3>
                <p className="text-gray-300 text-sm mt-1">{filteredProjects[photoIndex].category}</p>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
};

export default Works;
