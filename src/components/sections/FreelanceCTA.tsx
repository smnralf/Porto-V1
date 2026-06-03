"use client";

import { motion } from "framer-motion";
import RevealClip from "@/components/ui/RevealClip";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FreelanceCTA() {
  return (
    <section className="bg-ember border-y border-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex flex-col gap-2">
            <span className="inline-block border border-ink/30 bg-ink/10 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.18em] text-ink/70 w-fit">
              Freelance
            </span>
            <RevealClip delay={0.05}>
              <h2 className="h2-display font-black text-ink">
                Sedang butuh website?
              </h2>
            </RevealClip>
            <p className="text-[14px] text-ink/75 leading-relaxed max-w-xl">
              Saya juga menerima pengerjaan landing page, company profile, dan admin
              panel untuk kebutuhan personal, UMKM, maupun bisnis.
            </p>
          </div>

          <Link
            href="/services"
            className="flex-shrink-0 inline-flex items-center gap-2 border-2 border-ink bg-ink px-7 py-3.5 text-[14px] font-black text-main btn-hard"
          >
            Lihat Layanan <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
