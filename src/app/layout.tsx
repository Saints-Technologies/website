import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://saintstechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Saints Technologies | Custom AI, SaaS & Full-Stack Development Agency",
    template: "%s | Saints Technologies",
  },
  description:
    "Saints Technologies builds custom AI solutions, RAG pipelines, B2B SaaS platforms, ERP systems, and full-stack applications. Enterprise-grade LLM implementations, scalable data engineering, and industrial software for visionary companies. Based in Turkey, serving worldwide.",
  keywords: [
    "AI Development Company",
    "Custom AI Solutions",
    "RAG Pipeline Development",
    "LLM Implementation",
    "AI Chatbot Development",
    "B2B SaaS Development",
    "ERP Software Development",
    "Full-Stack Development Agency",
    "Data Engineering Services",
    "Software Development Company",
    "Custom Software Development",
    "React Next.js Development",
    "Enterprise Software Solutions",
    "Tech Agency Turkey",
    "Startup Technology Partner",
    "Saints Technologies",
    "Yapay Zeka Geliştirme",
    "Yapay Zeka Şirketi",
    "Yazılım Ajansı",
    "Yazılım Geliştirme Şirketi",
    "SaaS Geliştirme",
    "ERP Yazılım Geliştirme",
    "Özel Yazılım Geliştirme",
    "Veri Mühendisliği",
  ],
  authors: [{ name: "Saints Technologies" }],
  creator: "Saints Technologies",
  publisher: "Saints Technologies",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "tr_TR",
    url: siteUrl,
    siteName: "Saints Technologies",
    title: "Saints Technologies | Custom AI, SaaS & Full-Stack Development",
    description:
      "We build custom AI solutions, scalable SaaS platforms, and industrial software for visionary companies. Enterprise-grade development, worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saints Technologies — Custom AI, SaaS & Full-Stack Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saints Technologies | Custom AI, SaaS & Full-Stack Development",
    description:
      "We build custom AI solutions, scalable SaaS platforms, and industrial software for visionary companies.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Saints Technologies",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.png`,
    description:
      "Saints Technologies builds custom AI solutions, RAG pipelines, B2B SaaS platforms, ERP systems, and full-stack applications for visionary companies worldwide.",
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Izmir",
      addressCountry: "TR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@saintstechnologies.com",
      contactType: "sales",
      availableLanguage: ["English", "Turkish"],
    },
    sameAs: [
      "https://linkedin.com/company/saintstechnologies",
      "https://instagram.com/saintstechnologies",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Large Language Models",
      "RAG Systems",
      "Natural Language Processing",
      "SaaS Development",
      "ERP Systems",
      "Full-Stack Development",
      "Data Engineering",
      "Cloud Computing",
    ],
    areaServed: {
      "@type": "GeoShape",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom AI & RAG Development",
            description:
              "Enterprise-grade LLM implementations and retrieval-augmented generation pipelines.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "B2B SaaS & ERP Development",
            description:
              "Custom platforms that scale business operations from CRM to full ERP suites.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Stack Web & Mobile Development",
            description:
              "End-to-end web and mobile solutions with pixel-perfect interfaces and robust architectures.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Data Engineering",
            description:
              "Scalable data pipelines, real-time analytics, and infrastructure that powers decisions.",
          },
        },
      ],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Saints Technologies",
    url: siteUrl,
    description:
      "Custom AI, SaaS & Full-Stack Development Agency",
    publisher: {
      "@type": "Organization",
      name: "Saints Technologies",
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="Qp_AAqJFW6n8QRFIWEFhkOzQxWEfOfNoIBk4A3pMN1s" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
