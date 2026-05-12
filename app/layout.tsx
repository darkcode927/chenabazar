import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "./providers";
import FloatingSearch from "@/components/home/FloatingSearch";


export const viewport = {
  themeColor: "#7C3AED",
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chenabazar.com"),
  title: {
    default: "Chena Bazar",
    template: "%s | Chena Bazar",
  },

  description:
    "Bangladesh's modern trusted online marketplace for fashion, electronics, groceries, lifestyle products and unbeatable deals.",

  keywords: [
    "Chena Bazar",
    "Bangladesh Ecommerce",
    "Online Shopping",
    "Daraz Alternative",
    "Fashion",
    "Electronics",
    "Groceries",
  ],

  authors: [
    {
      name: "Chena Bazar",
    },
  ],

  creator: "Chena Bazar",

  openGraph: {
    title: "Chena Bazar",
    description:
      "Modern Bangladeshi eCommerce platform with premium shopping experience.",
    url: "/",
    siteName: "Chena Bazar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Chena Bazar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chena Bazar",
    description: "Premium online marketplace for smart shopping experience.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        scroll-smooth
      `}
    >
      <body
        className="
          min-h-screen
          bg-gradient-to-b
          from-white
          via-pink-50/30
          to-white
          text-gray-900
          antialiased
          overflow-x-hidden
          font-sans
        "
      >
        {/* 🔥 Background Effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Top Glow */}
          <div
            className="
              absolute
              top-[-120px]
              left-[-120px]
              w-[350px]
              h-[350px]
              bg-pink-300/20
              rounded-full
              blur-3xl
            "
          />

          {/* Right Glow */}
          <div
            className="
              absolute
              top-[20%]
              right-[-100px]
              w-[300px]
              h-[300px]
              bg-red-300/20
              rounded-full
              blur-3xl
            "
          />

          {/* Bottom Glow */}
          <div
            className="
              absolute
              bottom-[-120px]
              left-[30%]
              w-[400px]
              h-[400px]
              bg-orange-200/20
              rounded-full
              blur-3xl
            "
          />
        </div>

        {/* 🔥 App Wrapper */}
        <Providers>
          {/* 🔷 Navbar */}
          <Navbar />
          <FloatingSearch />

          {/* 🔷 Main Content */}
          <main className="flex-1 relative z-10">
            <div>{children}</div>
          </main>

          {/* 🔷 Footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
