export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Axentrixx",
    url: "https://axentrixx.com",
    logo: "https://axentrixx.com/images/logo/axenlogo.png",
    description:
      "Axentrixx is a premier web development partner for digital agencies and global businesses, engineering high-performance websites, AI tools, and custom software.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9998249244",
        contactType: "sales",
        email: "sales@axentrixx.com",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        contactType: "human resources",
        email: "hr@axentrixx.com",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/axentrixx",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Axentrixx",
    url: "https://axentrixx.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://axentrixx.com/services?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Axentrixx",
    url: "https://axentrixx.com",
    image: "https://axentrixx.com/images/logo/axenlogo.png",
    telephone: "+91-9998249244",
    email: "sales@axentrixx.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 20.5937,
        longitude: 78.9629,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software & Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "High-Performance Web Development",
            description: "Custom Next.js and React web application engineering built for high conversion and scaling.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Agency Web Development Partner",
            description: "Dedicated white-label engineering team for digital marketing and design agencies.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software & AI Solutions",
            description: "Enterprise software, custom API integrations, and AI workflow automation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Analytics & Data Intelligence",
            description: "Custom business intelligence dashboards, real-time metrics, and reporting.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
