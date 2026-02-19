import CallbackModal from "@/components/CallbackModal";
import CallbackButton from "@/components/CallbackButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import Providers from "./providers";
import { Metadata } from "next";
import JsonLd from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://axentrixx.com"),
  title: {
    default: "Axentrixx - Websites & AI Solutions Built for Business Growth",
    template: "%s | Axentrixx",
  },
  description:
    "Axentrixx builds high-performance websites, AI-powered tools, and custom software to help businesses grow. Web development, mobile apps, data analytics & more.",
  keywords: [
    "Axentrixx",
    "custom software development",
    "web development company",
    "AI solutions",
    "mobile app development",
    "data analytics",
    "business intelligence",
    "healthcare management systems",
    "digital transformation",
    "software company India",
  ],
  authors: [{ name: "Axentrixx", url: "https://axentrixx.com" }],
  creator: "Axentrixx",
  publisher: "Axentrixx",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://axentrixx.com",
    siteName: "Axentrixx",
    title: "Axentrixx - Websites & AI Solutions Built for Business Growth",
    description:
      "Axentrixx builds high-performance websites, AI-powered tools, and custom software to help businesses grow.",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 400,
        height: 400,
        alt: "Axentrixx Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axentrixx - Websites & AI Solutions Built for Business Growth",
    description:
      "Axentrixx builds high-performance websites, AI-powered tools, and custom software to help businesses grow.",
    images: ["/images/logo/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="!scroll-smooth" lang="en">
      <body>
        <JsonLd />
        <Providers>
          <div className="isolate">
            <Header />

            {children}

            <Footer />
            <ScrollToTop />
            <CallbackButton />
            <CallbackModal />
          </div>
        </Providers>
      </body>
    </html>
  );
}
