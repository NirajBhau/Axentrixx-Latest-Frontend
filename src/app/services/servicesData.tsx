
import { Service } from "../../types/service";

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    paragraph: "We build high-performance, scalable, and visually stunning websites that drive growth and elevate your brand presence.",
    image: "/images/blog/blog-01.jpg",
    details: {
      intro: "Your website is more than just a digital brochure; it's the engine that drives your business growth. In an era where 94% of first impressions are design-related, having a professional, high-performance web presence is non-negotiable.",
      content: "As a leading web development agency for startups and businesses, Axentrixx bridges the gap between creative vision and technical excellence. We don't just write code; we architect digital experiences that convert visitors into loyal customers. Whether you're a burgeoning startup in India looking to disrupt the market or an established enterprise in the USA seeking to modernize your legacy infrastructure, our full-stack engineering team delivers scalable, secure, and blazing-fast solutions using the latest web technologies.",
      points: [
        { title: "Strategic Discovery & Architecture", description: "We start by understanding your business DNA. Our architects map out a technical blueprint that ensures your website can scale from 100 to 1,000,000+ users without breaking a sweat." },
        { title: "Conversion-Focused UI/UX Design", description: "Our designs are rooted in user psychology. We create intuitive interfaces that guide users toward your primary call-to-action, maximizing your ROI from day one." },
        { title: "Agile Full-Stack Engineering", description: "Leveraging Next.js, React, and Node.js, we build modular applications that are easy to maintain and incredibly fast, ensuring your site passes Core Web Vitals with flying colors." },
        { title: "SEO & Performance-First Approach", description: "Every line of code we write is optimized for search engines. From proper heading structures to advanced image compression, we ensure you're visible and fast." },
      ]
    },
    problemSection: {
      title: "The Silent Growth Killer: Mediocre Web Presence",
      content: "Many businesses struggle with websites that look good but perform poorly. Common pain points include:\n- Slow load times leading to high bounce rates.\n- Non-responsive designs that alienate mobile users.\n- Lack of a clear conversion strategy, turning traffic into missed opportunities.\n- Difficult-to-update systems that bottleneck your marketing team.\n- Poor SEO architecture that keeps your business hidden on page 2 of Google."
    },
    solutionSection: {
      title: "Precision Engineering for Digital Dominance",
      content: "Axentrixx solves these challenges by combining elite engineering with strategic business consulting. Our solution provides:\n- Ultra-fast performance using static site generation and edge caching.\n- Pixel-perfect responsiveness across every device and browser.\n- Built-in conversion hooks and strategic CTA placement.\n- Headless CMS integrations that empower your team to publish content in seconds.\n- Enterprise-grade security protocols to protect your data and your customers."
    },
    industries: ["Startups", "SaaS", "E-commerce", "Fintech", "Healthcare", "Real Estate"],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "AWS"],
    faqs: [
      {
        question: "How long does it take to develop a custom website?",
        answer: "A typical project ranges from 4 to 12 weeks depending on complexity. Small startup landing pages can be delivered in 3 weeks, while complex enterprise platforms require more intensive architecture and testing."
      },
      {
        question: "What is your pricing model for web development?",
        answer: "We offer both fixed-price project models and monthly retainers. Our pricing is transparent and based on the scope of work, technical requirements, and the level of customization required."
      },
      {
        question: "Do you support international clients in the USA and Europe?",
        answer: "Yes, Axentrixx works with startups and businesses in India, the USA, and globally. We have robust async communication workflows and overlap hours to ensure seamless collaboration across time zones."
      },
      {
        question: "Will I be able to update content myself after launch?",
        answer: "Absolutely. We specialize in Headless CMS integrations (Sanity, Strapi, Contentful) that allow your marketing team to manage content safely without needing a developer for every small change."
      }
    ],
    seoMetadata: {
      title: "Web Development Agency for Startups and Businesses | Axentrixx",
      description: "Looking for a top-tier web development agency for startups and businesses? Axentrixx delivers high-performance custom websites and web apps optimized for growth in India and the USA."
    }
  },
  {
    id: 2,
    title: "AI Automation Services",
    slug: "ai-automation",
    paragraph: "Revolutionize your business operations with intelligent AI automation that saves time, reduces costs, and boosts efficiency.",
    image: "/images/blog/blog-02.jpg",
    details: {
      intro: "Innovation isn't just about having the latest tools; it's about using them to redefine how your business operates. AI automation is the catalyst that transforms manual constraints into scalable competitive advantages.",
      content: "As a premier provider of AI automation services for businesses, Axentrixx empowers organizations in India and the USA to break free from repetitive, time-consuming tasks. We design and deploy intelligent systems that think, learn, and act—allowing your human talent to focus on creativity and strategy. From sophisticated customer support agents to complex data processing pipelines, our AI solutions are engineered to deliver measurable ROI by reducing operational costs and increasing output velocity.",
      points: [
        { title: "Strategic Workflow Mapping", description: "We analyze your existing business processes to identify high-impact automation opportunities where AI can deliver the most significant time and cost savings." },
        { title: "Intelligent Agent Development", description: "We build custom AI agents trained on your specific business data, capable of handling complex reasoning, document analysis, and 24/7 customer interactions." },
        { title: "Cross-Platform Integration", description: "Our solutions don't exist in silos. We seamlessly integrate AI capabilities into your existing CRMs, ERPs, and communications stacks via Zapier, Make, or custom API bridges." },
        { title: "Continuous Optimization & Tuning", description: "AI is not a 'set and forget' solution. We provide ongoing monitoring and fine-tuning to ensure your automation systems remain accurate, efficient, and aligned with your evolving goals." },
      ]
    },
    problemSection: {
      title: "The Manual Bottleneck: Why Businesses Stall",
      content: "Modern businesses are often held back by legacy manual workflows. These inefficiencies manifest as:\n- High operational costs due to labor-intensive repetitive tasks.\n- Inconsistent customer support experiences with long wait times.\n- Human error in data entry and processing leading to costly mistakes.\n- Inability to scale operations without proportional increases in headcount.\n- Missed opportunities as teams are too bogged down in admin work to innovate."
    },
    solutionSection: {
      title: "Intelligent Efficiency: The Power of AI Automation",
      content: "Axentrixx provides a comprehensive AI automation framework that turns manual friction into digital momentum. Our services include:\n- 24/7 AI Customer Support: Intelligent agents that resolve queries and book meetings instantly.\n- Automated Lead Nurturing: Intelligent pipelines that qualify and follow up with leads automatically.\n- Document Intelligence: AI systems that extract, summarize, and categorize data from thousands of files in minutes.\n- Smart Workflow Orchestration: Connecting disjointed apps into a unified, autonomous business engine.\n- Predictable Scalability: Systems that handle 10x volume increases without increasing your overhead."
    },
    industries: ["SaaS", "Real Estate", "Ecommerce", "Legal Services", "Marketing Agencies", "Logistics"],
    technologies: ["OpenAI / LLMs", "Python", "LangChain", "Zapier", "Make.com", "Vector Databases", "Pinecone"],
    faqs: [
      {
        question: "How do I know which processes should be automated first?",
        answer: "We recommend a 'High Volume, Low Complexity' approach for initial wins. Tasks that are repetitive, rule-based, and consume significant team hours (like lead intake or support tickets) usually offer the highest ROI."
      },
      {
        question: "Is my business data safe when using AI automation?",
        answer: "Security is our top priority. We implement enterprise-grade data privacy measures, ensuring that your proprietary information is never used for training public models and remains strictly within your secure environment."
      },
      {
        question: "What is the typical ROI timeframe for AI automation services?",
        answer: "Most businesses see a positive ROI within 3 to 6 months. By reducing manual labor costs and increasing lead conversion rates, the systems often pay for themselves through regained time and increased efficiency."
      },
      {
        question: "Do you provide AI automation services for small businesses in the USA?",
        answer: "Yes, Axentrixx works with startups and businesses in India, the USA, and globally. We tailor our AI solutions to fit the budget and scale of organizations of all sizes, from boutiques to global enterprises."
      }
    ],
    seoMetadata: {
      title: "AI Automation Services for Businesses | Axentrixx",
      description: "Boost efficiency with Axentrixx's AI automation services for businesses. We build intelligent agents and automated workflows to scale your operations in India, the USA, and beyond."
    }
  },
  {
    id: 3,
    title: "Analytics & Reporting",
    slug: "analytics-reporting",
    paragraph: "Unlock the full potential of your data with advanced analytics tracking and custom visualization dashboards.",
    image: "/images/blog/blog-03.jpg",
    details: {
      intro: "Data is the raw material of the 21st century, but without expert interpretation, it's just noise. Transforming raw numbers into strategic growth requires a sophisticated approach to tracking, visualization, and analysis.",
      content: "As a specialized provider of website analytics and reporting services, Axentrixx helps businesses in India and the USA move beyond vanity metrics to uncover the 'why' behind their data. We don't just set up tags; we architect data ecosystems that provide a single source of truth for your entire organization. Our mission is to empower decision-makers with real-time insights that drive higher conversion rates, optimized marketing spend, and superior customer retention.",
      points: [
        { title: "Custom Tracking Frameworks", description: "We go beyond basic setups to implement advanced event tracking that captures every critical touchpoint in your user journey—from scroll depth to complex multi-step conversions." },
        { title: "Multi-Channel Data Attribution", description: "Stop guessing where your best customers come from. We implement robust attribution models that accurately credit your marketing channels, helping you allocate budget effectively." },
        { title: "Interactive Business Intelligence", description: "We replace static spreadsheets with dynamic, automated dashboards in Looker Studio or Power BI, giving you an at-a-glance view of your most vital KPIs." },
        { title: "Data-Driven CRO Audits", description: "Our analysts identify leaks in your conversion funnel using heatmaps and session recordings, providing actionable recommendations to boost your website's performance." },
      ]
    },
    problemSection: {
      title: "Data Blindness: The Cost of Incomplete Insights",
      content: "Many organizations suffer from 'data fragmentation'—having plenty of numbers but no clear answers. Common symptoms include:\n- Making critical business decisions based on 'gut feel' rather than verified data.\n- Discrepancies between different marketing platforms (Meta vs. GA4 vs. CRM).\n- Inability to track the true ROI of specific marketing campaigns.\n- Lack of visibility into where users are dropping off in the checkout or signup flow.\n- Overwhelmingly complex reports that your team doesn't have time to decipher."
    },
    solutionSection: {
      title: "Clarity Through Data: The Axentrixx Analytics Engine",
      content: "Our website analytics and reporting services bring order to the chaos by implementing a unified data strategy. We provide:\n- Clean Data Architecture: Ensuring your tracking is accurate, GDPR-compliant, and future-proof.\n- Conversational Dashboards: Visualizations that tell a story and highlight exactly what needs your attention.\n- Predictive Insights: Using historical data to forecast trends and identify upcoming growth opportunities.\n- Seamless Tech Integration: Connecting your website data with your sales, email, and advertising platforms.\n- Expert Analysis: Monthly deep-dives where we interpret the data for you and suggest strategic pivots."
    },
    industries: ["SaaS", "E-commerce", "Lead Generation", "Healthcare", "Education", "B2B Professional Services"],
    technologies: ["GA4", "Google Tag Manager", "Looker Studio", "BigQuery", "Hotjar / Microsoft Clarity", "Mixpanel", "SQL"],
    faqs: [
      {
        question: "Why should I upgrade to GA4 if I'm already using basic tracking?",
        answer: "GA4 is the new standard for privacy-centric, cross-platform tracking. It offers superior event-based modeling and deeper integration with Google Ads, allowing for much more granular audience building and ROI measurement."
      },
      {
        question: "How do you ensure data accuracy in your reports?",
        answer: "We perform a comprehensive 50-point data audit before any project. We check for duplicate tags, bot traffic filtering, and cross-domain tracking issues to ensure your reports reflect true human behavior."
      },
      {
        question: "Can you help me track offline conversions or CRM data?",
        answer: "Yes. We specialize in 'closing the loop' by importing offline conversion data or CRM leads back into your analytics platforms, providing a complete 360-degree view of your customer lifecycle."
      },
      {
        question: "Do you offer analytics and reporting services for startups in the USA?",
        answer: "Absolutely. Axentrixx works with startups and businesses in India, the USA, and globally. We offer scalable analytics packages that grow with your company, from initial setup to enterprise-level data warehousing."
      }
    ],
    seoMetadata: {
      title: "Website Analytics and Reporting Services | Axentrixx",
      description: "Unlock actionable insights with Axentrixx's website analytics and reporting services. We provide GA4 setups, custom dashboards, and data-driven growth strategies for global businesses."
    }
  },
];
