import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import HowIWork from "@/components/sections/HowIWork";
import WhyWorkWithMe from "@/components/sections/WhyWorkWithMe";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan pembuatan website — landing page, company profile, web dinamis, dan custom app. Harga transparan, revisi jelas, deploy dibantu.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-base pt-[58px]">
      <div className="border-b border-white/8 bg-surface px-5 sm:px-6 lg:px-8 py-14">
        <div className="mx-auto max-w-6xl">
          <span className="inline-block border border-ember/30 bg-ember/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-ember mb-5">
            Layanan
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-main tracking-tight leading-tight mb-3">
            Jasa Pembuatan Website.
          </h1>
          <p className="text-[15px] text-muted max-w-xl">
            Landing page, company profile, admin panel, hingga custom web app. Dikerjakan
            dengan komunikasi yang jelas dan hasil yang bisa dipakai.
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
