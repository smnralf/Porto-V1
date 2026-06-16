"use client";

import { motion } from "framer-motion";
import RevealClip from "@/components/ui/RevealClip";
import { MessageCircle, GitBranch } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-5 sm:px-6 lg:px-8 py-20 bg-base section-rule scroll-mt-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <span className="inline-block rounded-full border border-white/15 bg-surface px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-muted mb-5">
            Hubungi Saya
          </span>

          <h2 className="h2-display font-black text-main mb-4">
            Ada proyek atau pertanyaan?
          </h2>
          <p className="text-[15px] text-muted leading-relaxed mb-8">
            Saya terbuka untuk diskusi, kolaborasi, atau pengerjaan proyek. Hubungi
            lewat WhatsApp untuk respons lebih cepat.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/6285176828884?text=${encodeURIComponent("Halo, saya ingin berdiskusi.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-bold text-black transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <MessageCircle className="h-4 w-4" />
              Mari Berdiskusi via WhatsApp
            </a>
            <a
              href="https://github.com/smnralf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-[14px] font-bold text-white backdrop-blur-md transition-colors hover:bg-white/10 hover:border-white/20"
            >
              <GitBranch className="h-4 w-4" />
              Lihat GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
