import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Consultation",
  description:
    "Get in touch with Saints Technologies for custom AI development, B2B SaaS, ERP platforms, and full-stack solutions. Free discovery call within 24 hours.",
  keywords: [
    "Contact Saints Technologies",
    "AI Development Consultation",
    "Software Development Quote",
    "Free Technical Consultation",
    "Hire Software Engineers",
    "Saints Technologies İletişim",
    "Yazılım Geliştirme Teklifi",
  ],
  openGraph: {
    title: "Contact Saints Technologies — Free Consultation",
    description:
      "Book a free discovery call and get a tailored technical roadmap for your project within 48 hours.",
    url: "https://saintstechnologies.com/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saints Technologies — Contact Us",
      },
    ],
  },
  twitter: {
    title: "Contact Saints Technologies — Free Consultation",
    description:
      "Book a free discovery call and get a tailored technical roadmap within 48 hours.",
  },
  alternates: {
    canonical: "https://saintstechnologies.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
