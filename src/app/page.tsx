import About from "@/components/About";
import AboutConnect from "@/components/AboutConnect";
import Services from "@/components/Services";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Works from "@/components/Works";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";

import Hero from "@/components/Hero";

import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

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
