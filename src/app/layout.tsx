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
    default: "Saints Technologies | Engineering Intelligent Solutions",
    template: "%s | Saints Technologies",
  },
  description:
    "We build custom AI, scalable data systems, and industrial software for visionary companies. Enterprise-grade LLM implementations, B2B SaaS, ERP platforms, and full-stack development.",
  keywords: [
    "AI Development",
    "Custom AI Solutions",
    "RAG Pipelines",
    "LLM Implementation",
    "B2B SaaS Development",
    "ERP Software",
    "Full-Stack Development",
    "Data Engineering",
    "Tech Agency",
    "Software Development Company",
    "Saints Technologies",
    "Enterprise Software",
    "Startup Technology Partner",
    "Yapay Zeka Geliştirme",
    "Yazılım Ajansı",
    "SaaS Geliştirme",
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
    title: "Saints Technologies | Engineering Intelligent Solutions",
    description:
      "We build custom AI, scalable data systems, and industrial software for visionary companies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saints Technologies — Engineering Intelligent Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saints Technologies | Engineering Intelligent Solutions",
    description:
      "We build custom AI, scalable data systems, and industrial software for visionary companies.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Saints Technologies",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "We build custom AI, scalable data systems, and industrial software for visionary companies.",
    foundingDate: "2026",
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
      "RAG Systems",
      "LLM Implementation",
      "SaaS Development",
      "ERP Systems",
      "Full-Stack Development",
      "Data Engineering",
    ],
    areaServed: "Worldwide",
    serviceType: [
      "Custom AI Development",
      "B2B SaaS Development",
      "ERP Platform Development",
      "Full-Stack Web Development",
      "Data Engineering",
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="Qp_AAqJFW6n8QRFIWEFhkOzQxWEfOfNoIBk4A3pMN1s" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
