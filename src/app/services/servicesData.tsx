
import { Service } from "../../types/service";

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    paragraph: "We build high-performance, scalable, and visually stunning websites that drive growth and elevate your brand presence.",
    image: "/images/blog/blog-01.jpg",
    details: {
      intro: "Your website is your digital storefront. Make it count.",
      content: "In today's digital-first world, a robust online presence is non-negotiable. We specialize in creating custom web solutions that are not just visually appealing but also highly functional, secure, and optimized for performance. From simple landing pages to complex enterprise web applications, we leverage modern technologies like Next.js, React, and Tailwind CSS to deliver exceptional user experiences.",
      points: [
        { title: "Custom Website Design", description: "Tailored designs that align perfectly with your brand identity and business goals, ensuring a unique digital footprint." },
        { title: "Full-Stack Development", description: "End-to-end development services covering frontend, backend, database management, and API integrations." },
        { title: "E-Commerce Solutions", description: "Scalable online stores with secure payment gateways, inventory management, and seamless checkout experiences." },
        { title: "CMS Integration", description: "Easy-to-manage content management systems (CMS) like Sanity, Strapi, or WordPress for effortless content updates." },
        { title: "Performance & SEO", description: "Speed-optimized code and built-in SEO best practices to ensure your site ranks high and loads instantly." },
      ]
    }
  },
  {
    id: 2,
    title: "AI Automation Services",
    slug: "ai-automation",
    paragraph: "Revolutionize your business operations with intelligent AI automation that saves time, reduces costs, and boosts efficiency.",
    image: "/images/blog/blog-02.jpg",
    details: {
      intro: "Work smarter, not harder, with the power of AI.",
      content: "Artificial Intelligence is transforming how businesses operate. We help you harness this power to automate repetitive tasks, enhance customer interactions, and streamline complex workflows. Our AI automation services are designed to free up your team's time so they can focus on high-value strategic initiatives while our intelligent systems handle the rest.",
      points: [
        { title: "Intelligent Chatbots", description: "Deploy 24/7 AI-powered customer support agents that can handle inquiries, book appointments, and qualify leads instantly." },
        { title: "Workflow Automation via Zapier/Make", description: "Seamlessly connect your favorite apps (CRM, Email, Slack) to automate data entry and cross-platform workflows." },
        { title: "Custom AI Agents", description: "Bespoke AI agents trained on your specific business data to assist with internal research, document analysis, and decision support." },
        { title: "Lead Generation Automation", description: "Automated systems to identify, scrape, and reach out to potential leads, nurturing them through the sales funnel." },
        { title: "Content Generation Pipelines", description: "Automated workflows for generating SEO-optimized blog posts, social media captions, and marketing copy." },
      ]
    }
  },
  {
    id: 3,
    title: "Analytics & Reporting",
    slug: "analytics-reporting",
    paragraph: "Unlock the full potential of your data with advanced analytics tracking and custom visualization dashboards.",
    image: "/images/blog/blog-03.jpg",
    details: {
      intro: "Turn raw data into actionable business intelligence.",
      content: "Data is your most valuable asset, but only if you can understand it. We provide comprehensive analytics services that give you a clear, real-time view of your business performance. We move beyond vanity metrics to track what truly matters—conversions, retention, and ROI—empowering you to make informed decisions that drive growth.",
      points: [
        { title: "Advanced GA4 Setup", description: "Complete Google Analytics 4 configuration with custom events, conversions, and audiences tailored to your user journey." },
        { title: "Google Tag Manager (GTM)", description: "Robust tag management for tracking marketing pixels (Meta, LinkedIn, Google Ads) without code bloat." },
        { title: "Looker Studio Dashboards", description: "Visually stunning, interactive dashboards that consolidate data from multiple sources into a single source of truth." },
        { title: "User Behavior Analysis", description: "Heatmaps, session recordings, and funnel analysis to understand exactly how users interact with your product." },
        { title: "Conversion Rate Optimization (CRO)", description: "Data-backed audits and A/B testing strategies to significantly improve your website's conversion rates." },
      ]
    }
  },
];
