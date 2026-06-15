"use client";

import { motion } from "framer-motion";
import RevealClip from "@/components/ui/RevealClip";

const EVENTS = [
  {
    year: "2022",
    title: "Mulai Belajar Informatika",
    desc: "Dasar pemrograman, logika, dan algoritma.",
    detail: "Pertama kali menulis kode Python dan C — loop, kondisi, fungsi. Mulai memahami bagaimana komputer berpikir.",
    color: "#FF4D00",
  },
  {
    year: "2023",
    title: "PHP, MySQL & Web Pertama",
    desc: "Membangun aplikasi web pertama dengan PHP native, JSP, dan MySQL.",
    detail: "Bikin Sehatin (pengingat minum obat) dan CRUD App berbasis Java JSP — database pertama, form POST pertama, SQL pertama.",
    color: "#7C3AED",
  },
  {
    year: "2024",
    title: "React, Next.js & Laravel",
    desc: "Beralih ke stack modern — React, TypeScript, Tailwind, dan Laravel.",
    detail: "Deploy pertama ke Vercel, kenalan dengan TypeScript, dan mulai paham konsep component-driven UI serta routing modern.",
    color: "#FF4D00",
  },
  {
    year: "2024",
    title: "Portfolio & Case Projects",
    desc: "Sehatin, Listify, CRUD App, Company Profile Demo, XAUUSD Concept.",
    detail: "Lima project dengan stack berbeda — dari JS vanilla sampai Next.js. Mulai terbiasa mendokumentasikan proses kerja.",
    color: "#7C3AED",
  },
  {
    year: "2025",
    title: "Freelance Ready",
    desc: "Siap mengerjakan landing page, company profile, dan admin panel.",
    detail: "Membuka layanan freelance. Fokus komunikasi klien, estimasi scope, dan pengerjaan end-to-end dari desain ke deploy.",
    color: "#B6FF4D",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="px-5 sm:px-6 lg:px-8 py-16 bg-surface section-rule scroll-mt-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <RevealClip inline>
            <span className="inline-block border border-velvet/30 bg-velvet/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-widest text-velvet mb-4">
              Perjalanan
            </span>
          </RevealClip>
          <RevealClip delay={0.08}>
            <h2 className="h2-display font-black text-main mt-4">
              Bagaimana saya sampai di sini.
            </h2>
          </RevealClip>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[11px] top-3 bottom-3 w-[2px]" style={{ background: "rgba(245,242,234,0.1)" }} />

          <div className="flex flex-col gap-0">
            {EVENTS.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative pl-10 pb-8 last:pb-0"
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-2 h-6 w-6 flex items-center justify-center border-2 border-base"
                  style={{ background: ev.color, boxShadow: `0 0 0 3px ${ev.color}22` }}
                >
                  <div className="h-2 w-2 bg-base" />
                </div>

                <div className="border-2 border-white/8 bg-base p-4 hover:border-white/16 transition-colors duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    {/* Year as fill block — lime fills use dark text */}
                    <span
                      className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 flex-shrink-0"
                      style={{
                        background: ev.color,
                        color: ev.color === "#B6FF4D" ? "#111" : "#fff",
                      }}
                    >
                      {ev.year}
                    </span>
                    <h3 className="font-black text-main text-[14px] leading-snug">{ev.title}</h3>
                  </div>
                  <p className="text-[13px] text-muted leading-relaxed mb-2">{ev.desc}</p>
                  {/* Concrete detail */}
                  <p className="text-[12px] leading-relaxed" style={{ color: "rgba(184,178,167,0.7)" }}>
                    {ev.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
