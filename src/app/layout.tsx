import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HassanHauledit | Junk Removal Made Easy",
  description:
    "Fast, professional junk removal in your area. Simple trailer-based pricing, same-day availability, and no-hassle service. Get a free quote today.",
  keywords:
    "junk removal, haul away, cleanout, furniture removal, appliance removal, garage cleanout, estate cleanout",
  openGraph: {
    title: "HassanHauledit | Junk Gone Fast.",
    description:
      "Local junk removal with simple pricing, fast response, and clean professional service. You point. We haul.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-stone-900 text-stone-50 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
