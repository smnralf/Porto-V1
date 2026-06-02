"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(182,255,77,0.07) 0%, #11131F 50%, rgba(124,92,255,0.07) 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Corner blobs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl"
            style={{ background: "rgba(182,255,77,0.08)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl"
            style={{ background: "rgba(124,92,255,0.08)" }}
          />

          {/* Decoration line */}
          <div
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-48"
            style={{
              background: "linear-gradient(to right, transparent, rgba(182,255,77,0.5), transparent)",
            }}
          />

          <div className="relative">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-spark mb-4">
              Siap Mulai?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-snow mb-4">
              Wujudkan Website Impian Anda
            </h2>
            <p className="text-ash mb-10 max-w-md mx-auto text-[15px] leading-relaxed">
              Konsultasikan kebutuhan website Anda sekarang. Gratis, tanpa komitmen,
              dan langsung dapat estimasi harga.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/6281234567890?text=${encodeURIComponent("Halo, saya ingin konsultasi terkait pembuatan website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-spark px-8 py-4 text-[15px] font-bold text-ink-900 hover:brightness-110 active:scale-[0.97] transition-all shadow-[0_0_32px_rgba(182,255,77,0.3)]"
              >
                <MessageCircle className="h-[18px] w-[18px]" />
                Konsultasi via WhatsApp
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-8 py-4 text-[15px] font-semibold text-snow hover:bg-white/[0.07] hover:border-white/16 active:scale-[0.97] transition-all"
              >
                Lihat Semua Layanan
                <ArrowRight className="h-4 w-4 text-ash" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
