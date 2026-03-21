import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import GetQuoteModal from "@/components/GetQuote/GetQuoteModal";
import CallbackModal from "@/components/CallbackModal";
import BookingModal from "@/components/BookingModal";
import CallbackButton from "@/components/CallbackButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { ModalProvider } from "@/context/ModalContext";
import { Inter } from "next/font/google";
import "@/styles/index.css";
import { Toaster } from "react-hot-toast";
import "../styles/prism-vsc-dark-plus.css";
import Providers from "./providers";
import { Metadata } from "next";
import JsonLd from "@/components/SEO/JsonLd";

const inter = Inter({ subsets: ["latin"] });

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
        url: "/images/logo/axenlogo.png",
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
    images: ["/images/logo/axenlogo.png"],
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
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <JsonLd />
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
            <CallbackButton />
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
      <Script
        id="cal-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.q) { cal.q = []; }
      p(cal, ar);
    };
    if (C.Cal.ns) return;
    C.Cal.ns = {};
    C.Cal.p = p;
    C.Cal.ar = [];
    L = d.createElement(A);
    L.async = 1;
    L.src = "https://app.cal.com/embed/embed.js";
    let s = d.getElementsByTagName(A)[0];
    s.parentNode.insertBefore(L, s);
  })(window, "script");
Cal("init", { origin: "https://cal.com" });
Cal("ui", { "styles": { "branding": { "brandColor": "#F7941D", "hideBranding": true } }, "hideEventTypeDetails": true, "layout": "month_view" });
`,
        }}
      />
    </html>
  );
}
