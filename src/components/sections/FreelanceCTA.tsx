"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FreelanceCTA() {
  return (
    <section className="px-5 sm:px-6 lg:px-8 py-16 bg-[#020617] relative overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 40 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#8B5CF6] opacity-90" />
          
          {/* Subtle noise/texture overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')"
          }} />

          {/* Decorative Glows */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-20 blur-[60px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white opacity-10 blur-[60px] rounded-full pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 px-8 py-14 sm:p-16 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col gap-4 max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white w-fit backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                Freelance
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-md">
                Sedang butuh website?
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-medium">
                Saya menerima pengerjaan landing page, company profile, dan admin
                panel untuk kebutuhan personal, UMKM, maupun bisnis.
              </p>
            </div>

            <Link
              href="/services"
              className="flex-shrink-0 group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-[#020617] transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              Lihat Layanan 
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
