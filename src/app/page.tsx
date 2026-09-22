import dynamic from "next/dynamic";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

// Lazy load below-fold components — only loaded when they come into view
const AboutConnect = dynamic(() => import("@/components/AboutConnect"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Works = dynamic(() => import("@/components/Works"), { ssr: true });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: true });
const CallToAction = dynamic(() => import("@/components/CallToAction"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const Founder = dynamic(() => import("@/components/Founder"), { ssr: true });
const HomeBlogSection = dynamic(() => import("@/components/Blog/HomeBlogSection"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const AgencyPartner = dynamic(() => import("@/components/AgencyPartner"), { ssr: true });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: true });

export const metadata: Metadata = {
  title: "Axentrixx - High-Performance Web Development Partner for Agencies",
  description: "Axentrixx is a specialized web development partner for digital agencies and global enterprises. We engineer lightning-fast Next.js websites, AI tools, and custom software at scale.",
  alternates: {
    canonical: "https://axentrixx.com",
  },
  openGraph: {
    title: "Axentrixx - High-Performance Web Development Partner",
    description: "Specialized web development arm for agencies and global businesses. We build fast, modern, and high-converting websites at scale.",
    url: "https://axentrixx.com",
    siteName: "Axentrixx",
    images: [
      {
        url: "/images/logo/axenlogo.png",
        width: 1200,
        height: 630,
        alt: "Axentrixx Web Development Agency Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axentrixx - High-Performance Web Development Partner",
    description: "Specialized web development arm for agencies and global businesses. We build fast, modern, and high-converting websites at scale.",
    images: ["/images/logo/axenlogo.png"],
  },
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug", "author", "authorImage", "tags", "designation"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <AboutConnect />
      <Services />
      <AgencyPartner />
      <HowItWorks />
      <About />
      <Works />
      <Clients />
      <CallToAction />
      <Testimonials />
      <Founder />
      <HomeBlogSection posts={posts} />
      <Contact />
    </main>
  );
}
