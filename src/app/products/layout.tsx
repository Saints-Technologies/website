import type { Metadata } from "next";

const baseUrl = "https://saintstechnologies.com/products";

export const metadata: Metadata = {
  title: "Products — Real Projects in Production",
  description:
    "Explore products engineered by Saints Technologies, starting with Ecogümrük — a modern customs automation platform. See the type of production-grade systems we build.",
  keywords: [
    "Saints Technologies Products",
    "Ecogümrük",
    "Customs Automation Software",
    "B2B SaaS Products",
    "Yazılım Ürünleri",
    "Ecogumruk.com",
  ],
  openGraph: {
    title: "Products — Built by Saints Technologies",
    description:
      "Real-world products and platforms engineered by Saints Technologies, including Ecogümrük.",
    url: baseUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saints Technologies — Products",
      },
    ],
  },
  twitter: {
    title: "Products — Built by Saints Technologies",
    description:
      "Explore live products like Ecogümrük engineered by Saints Technologies.",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

