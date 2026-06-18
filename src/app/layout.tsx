import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CustomCursor from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "smnralf — Web Developer",
    template: "%s | smnralf",
  },
  description:
    "smnralf Portfolio — Software Engineer and AI Enthusiast focused on building scalable, intelligent, and functional systems.",
  keywords: [
    "software engineer",
    "portfolio",
    "smnralf",
    "AI enthusiast",
    "machine learning",
    "fullstack developer",
    "python",
  ],
  authors: [{ name: "smnralf" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "smnralf",
    title: "smnralf — Software Engineer & AI Enthusiast",
    description:
      "Computer Science Student. Building intelligent, scalable solutions and AI-integrated applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col">
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
