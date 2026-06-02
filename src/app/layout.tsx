import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";

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
    "Portfolio smnralf — mahasiswa Informatika dan web developer yang fokus membangun antarmuka bersih, responsif, dan fungsional. Dari frontend sampai backend.",
  keywords: [
    "web developer",
    "portfolio",
    "smnralf",
    "Next.js",
    "React",
    "frontend developer",
    "fullstack developer Indonesia",
  ],
  authors: [{ name: "smnralf" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "smnralf",
    title: "smnralf — Web Developer",
    description:
      "Mahasiswa Informatika. Membangun antarmuka bersih, sistem fungsional, dan website yang bisa dipakai secara nyata.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
