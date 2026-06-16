import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProjectTeaser from "@/components/sections/ProjectTeaser";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Timeline from "@/components/sections/Timeline";
import FreelanceCTA from "@/components/sections/FreelanceCTA";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "smnralf — Web Developer",
  description:
    "Portfolio smnralf — mahasiswa Informatika dan web developer yang fokus membangun antarmuka bersih, responsif, dan fungsional. Dari frontend sampai backend.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectTeaser />
      <About />
      <TechStack />
      <Timeline />
      <FreelanceCTA />
      <Contact />
    </>
  );
}
