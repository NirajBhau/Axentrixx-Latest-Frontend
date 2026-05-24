
import { Service } from "../../types/service";

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Website Design & Development",
    slug: "web-development",
    paragraph: "High-speed, conversion-optimized websites that turn visitors into customers. We build the engine that drives your global growth.",
    image: "/images/blog/blog-01.jpg",
    details: {
      intro: "Your website is your most powerful sales tool. We build high-performance web experiences that don't just look good—they convert.",
      content: "As your specialized development partner, Axentrixx bridges the gap between design and engineering. We build fast, secure, and SEO-optimized websites using Next.js and React. Whether you're an agency needing a white-label partner or a business ready to scale, we deliver code that drives measurable results.",
      points: [
        { title: "Conversion-First Design", description: "UI/UX engineered to guide users toward your primary goals." },
        { title: "Blazing Fast Performance", description: "Optimized for Core Web Vitals to improve search rankings and user retention." },
        { title: "Scalable Architecture", description: "Modular codebases built to grow from 1,000 to 1M+ users." },
        { title: "SEO-Ready Engineering", description: "Built-in technical SEO to ensure your business is visible globally." },
      ]
    },
    problemSection: {
      title: "Is Your Website Costing You Customers?",
      content: "Slow load times and poor mobile experiences kill conversions. If your site isn't fast and intuitive, you're leaving money on the table."
    },
    solutionSection: {
      title: "Precision-Engineered Growth",
      content: "We solve performance bottlenecks and implement strategic conversion hooks. The result? More leads, higher ROI, and a professional global presence."
    },
    industries: ["SaaS", "E-commerce", "Fintech", "Agencies", "Healthcare"],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
    faqs: [
      {
        question: "How long does a typical project take?",
        answer: "Most custom websites are delivered in 4-8 weeks, depending on complexity and features."
      },
      {
        question: "Do you work with agencies?",
        answer: "Yes, we act as a reliable development arm for agencies worldwide, providing white-label services."
      }
    ],
    seoMetadata: {
      title: "Website Design & Development Partner | Axentrixx",
      description: "Build high-converting, fast websites with Axentrixx. Specialized web development for global businesses and agencies."
    }
  },
  {
    id: 2,
    title: "Analytics & Dashboards",
    slug: "analytics-reporting",
    paragraph: "Stop guessing and start growing. Real-time dashboards that track your ROI, conversions, and customer behavior.",
    image: "/images/blog/blog-03.jpg",
    details: {
      intro: "Data is useless without clarity. We transform raw numbers into actionable insights that drive your business strategy.",
      content: "We build unified data ecosystems. From GA4 setup to custom BI dashboards, we help you see exactly where your revenue is coming from and where your funnel is leaking.",
      points: [
        { title: "Custom ROI Dashboards", description: "Real-time visibility into your most important business KPIs." },
        { title: "Funnel Optimization", description: "Identify and fix drop-off points in your customer journey." },
        { title: "Advanced Event Tracking", description: "Capture every critical click and conversion with precision." },
        { title: "Multi-Channel Attribution", description: "See exactly which marketing channels are driving sales." },
      ]
    },
    problemSection: {
      title: "Decisions Based on Guesswork?",
      content: "Fragmented data leads to wasted marketing spend and missed opportunities. If you can't track it, you can't improve it."
    },
    solutionSection: {
      title: "Total Visual Clarity",
      content: "We provide a single source of truth for your business. Spend your budget effectively and optimize your conversions with confidence."
    },
    industries: ["E-commerce", "SaaS", "Lead Gen", "Professional Services"],
    technologies: ["GA4", "Looker Studio", "BigQuery", "Hotjar", "Mixpanel"],
    faqs: [
      {
        question: "Can you track offline sales?",
        answer: "Yes, we can integrate CRM data to provide a full 360-degree view of your customer lifecycle."
      }
    ],
    seoMetadata: {
      title: "Business Intelligence & Analytics Dashboards | Axentrixx",
      description: "Track your ROI with custom analytics dashboards. Data-driven growth strategies for modern businesses."
    }
  },
  {
    id: 3,
    title: "Custom Software",
    slug: "custom-software",
    paragraph: "Tailor-made software solutions built to solve your unique business bottlenecks. Secure, scalable, and modular.",
    image: "/images/blog/blog-02.jpg",
    details: {
      intro: "Generic software often creates more problems than it solves. We build tools that adapt to your business, not the other way around.",
      content: "From custom CRMs to internal management tools, we build scalable software that automations your unique operations. Our focus is on long-term maintainability and performance.",
      points: [
        { title: "Modular Engineering", description: "Scalable codebases that grow with your business requirements." },
        { title: "Internal Tooling", description: "Custom dashboards and management systems for your team." },
        { title: "Third-Party Integrations", description: "Seamlessly connect your existing tech stack via custom APIs." },
        { title: "Enterprise-Grade Security", description: "Built with the highest security standards to protect your data." },
      ]
    },
    problemSection: {
      title: "The Problem with Off-the-Shelf Tools",
      content: "Generic tools often lack the specific features you need, forcing your team into inefficient workarounds."
    },
    solutionSection: {
      title: "Built for Your Workflow",
      content: "We build software that fits your business like a glove. Eliminate bottlenecks and future-proof your operations with custom code."
    },
    industries: ["Logistics", "Fintech", "Healthcare", "Operations"],
    technologies: ["Node.js", "React", "PostgreSQL", "AWS", "TypeScript"],
    faqs: [
      {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer maintenance and support packages to ensure your software remains updated and secure."
      }
    ],
    seoMetadata: {
      title: "Custom Software Development | Axentrixx",
      description: "Solve business bottlenecks with custom software. Scalable, secure, and built for your unique workflow."
    }
  }
];
