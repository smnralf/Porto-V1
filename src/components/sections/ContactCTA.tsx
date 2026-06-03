"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="px-5 sm:px-6 lg:px-8 py-20 bg-base section-rule">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden border-2 border-white/12 bg-surface p-8 sm:p-14 text-center"
        >
          {/* Background blobs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl"
            style={{ background: "rgba(182,255,77,0.06)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl"
            style={{ background: "rgba(124,58,237,0.06)" }}
          />

          {/* Top accent line */}
          <div
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-32"
            style={{ background: "#FF4D00" }}
          />

          <div className="relative">
            <span className="inline-block border-2 border-ink bg-lime px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-ink mb-5 shadow-hard-sm">
              Siap Mulai?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-main mb-4 leading-tight tracking-tight">
              Wujudkan Website Anda Sekarang
            </h2>
            <p className="text-muted mb-10 max-w-md mx-auto text-[15px] leading-relaxed">
              Konsultasikan kebutuhan website Anda. Gratis, tanpa komitmen, dan langsung dapat estimasi harga.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/6285176828884?text=${encodeURIComponent("Halo, saya ingin konsultasi terkait pembuatan website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-ink bg-ember px-8 py-4 text-[15px] font-black text-ink btn-hard"
              >
                <MessageCircle className="h-5 w-5" />
                Konsultasi via WhatsApp
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/15 bg-surface-alt px-8 py-4 text-[15px] font-black text-main hover:border-white/25 transition-colors btn-hard"
              >
                Lihat Semua Layanan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
