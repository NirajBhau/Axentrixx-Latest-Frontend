export interface ServicePrice {
  id: string;
  nickname: string;
  tagline: string;
  description: string;
  startingFrom: string;
  isPopular?: boolean;
  offers: string[];
  cta: string;
  ctaHref: string;
}

export const pricingData: ServicePrice[] = [
  {
    id: "starter",
    nickname: "Starter",
    tagline: "For Growing Businesses",
    description: "Perfect for startups and SMEs that need a professional digital presence to establish their brand online.",
    startingFrom: "Contact Us",
    offers: [
      "Custom Website Design",
      "Responsive Mobile-First Layout",
      "Up to 5 Pages",
      "Basic SEO Setup",
      "Contact Form Integration",
      "30-Day Post-Launch Support",
    ],
    cta: "Get a Quote",
    ctaHref: "/contact",
  },
  {
    id: "growth",
    nickname: "Growth",
    tagline: "For Scaling Companies",
    description: "Ideal for businesses ready to scale with advanced web apps, analytics integration, and ongoing support.",
    startingFrom: "Contact Us",
    isPopular: true,
    offers: [
      "Full-Stack Web Application",
      "Custom Admin Dashboard",
      "Analytics & Reporting Setup",
      "API & Third-Party Integrations",
      "Performance Optimization",
      "3 Months Dedicated Support",
    ],
    cta: "Get a Quote",
    ctaHref: "/contact",
  },
  {
    id: "enterprise",
    nickname: "Enterprise",
    tagline: "For Large Organizations",
    description: "End-to-end digital transformation for enterprises requiring complex systems, AI, and cloud infrastructure.",
    startingFrom: "Contact Us",
    offers: [
      "Custom Software Architecture",
      "AI & Automation Integration",
      "Cloud-Native Infrastructure",
      "Multi-System Integrations",
      "Dedicated Development Team",
      "Priority 24/7 Support",
    ],
    cta: "Book a Consultation",
    ctaHref: "/contact",
  },
];
