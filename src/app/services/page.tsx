import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import HowIWork from "@/components/sections/HowIWork";
import WhyWorkWithMe from "@/components/sections/WhyWorkWithMe";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development services — landing pages, company profiles, dynamic webs, and custom apps. Transparent pricing, clear revisions, deployment assistance.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-base pt-[58px]">
      <div className="border-b border-white/8 bg-surface px-5 sm:px-6 lg:px-8 py-14">
        <div className="mx-auto max-w-6xl">
          <span className="inline-block border border-ember/30 bg-ember/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-ember mb-5">
            Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-main tracking-tight leading-tight mb-3">
            Website Development.
          </h1>
          <p className="text-[15px] text-muted max-w-xl">
            Landing pages, company profiles, admin panels, to custom web apps. Delivered
            with clear communication and usable results.
          </p>
        </div>
      </div>

      <ServicesSection />
      <HowIWork />
      <WhyWorkWithMe />
      <FAQSection />
    </div>
  );
}
