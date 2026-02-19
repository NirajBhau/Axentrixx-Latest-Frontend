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
const Team = dynamic(() => import("@/components/Team"), { ssr: true });
const HomeBlogSection = dynamic(() => import("@/components/Blog/HomeBlogSection"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export const metadata: Metadata = {
  title: "Axentrixx - Websites & AI Solutions Built for Business Growth",
  description: "Axentrixx delivers custom websites, AI-powered tools, mobile apps, and data analytics solutions that drive real business growth. Get a free consultation today.",
  openGraph: {
    title: "Axentrixx - Websites & AI Solutions Built for Business Growth",
    description: "Custom websites, AI-powered tools, mobile apps & data analytics that drive real business growth.",
    url: "https://axentrixx.com",
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
      <About />
      <Works />
      <Clients />
      <CallToAction />
      <Testimonials />
      <Team />
      <HomeBlogSection posts={posts} />
      <Contact />
    </main>
  );
}
