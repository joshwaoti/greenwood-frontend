import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import ErrorBoundary from "@/components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greenwood City Mall - Meru's Premier Shopping Destination",
  description:
    "Experience shopping at Greenwood City Mall, Meru's premier destination with over 150 stores, diverse dining options, and family entertainment.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏪</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  keywords: [
    "Greenwood City Mall",
    "Meru shopping",
    "Kenya mall",
    "Meru mall",
    "Meru city",
    "Meru city mall",
    "Meru city shopping",
    "Meru city dining",
    "Meru city entertainment",
    "Meru city family fun",
    "Meru city luxury shopping",
    "Meru city shopping center",
    "shopping center",
    "retail stores",
    "dining",
    "entertainment",
    "family fun",
    "luxury shopping",
  ],
  authors: [{ name: "Greenwood City Mall" }],
  creator: "Greenwood City Mall",
  publisher: "Greenwood City Mall",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Greenwood City Mall - Nairobi's Premier Shopping Destination",
    description:
      "Experience shopping at Greenwood City Mall, Nairobi's premier destination with over 150 stores, diverse dining options, and family entertainment.",
    url: "https://greenwoodcitymall.com",
    siteName: "Greenwood City Mall",
    images: [
      {
        url: "https://greenwoodcitymall.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Greenwood City Mall - Premier Shopping Destination",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenwood City Mall - Nairobi's Premier Shopping Destination",
    description:
      "Experience shopping at Greenwood City Mall, Meru's premier destination with over 150 stores, diverse dining options, and family entertainment.",
    images: ["https://greenwoodcitymall.com/twitter-image.jpg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <Navbar />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
