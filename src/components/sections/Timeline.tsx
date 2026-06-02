"use client";

import { motion } from "framer-motion";

const EVENTS = [
  { year: "2022", title: "Mulai Belajar Informatika",   desc: "Dasar pemrograman, logika, dan algoritma.", color: "#FF4D00" },
  { year: "2023", title: "PHP, MySQL & Web Pertama",    desc: "Membangun aplikasi web pertama dengan PHP native, JSP, dan MySQL.", color: "#7C3AED" },
  { year: "2024", title: "React, Next.js & Laravel",   desc: "Beralih ke stack modern — React, TypeScript, Tailwind, dan Laravel.", color: "#FF4D00" },
  { year: "2024", title: "Portfolio & Case Projects",   desc: "Sehatin, Listify, CRUD App, Company Profile Demo, XAUUSD Concept.", color: "#7C3AED" },
  { year: "2025", title: "Freelance Ready",             desc: "Siap mengerjakan landing page, company profile, dan admin panel.", color: "#B6FF4D" },
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
          className="mb-10"
        >
          <span className="inline-block border border-velvet/30 bg-velvet/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-velvet mb-4">
            Perjalanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-main leading-tight tracking-tight">
            Bagaimana saya sampai di sini.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-white/12" />
          <div className="flex flex-col gap-0">
            {EVENTS.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative pl-10 pb-7 last:pb-0"
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-1.5 h-6 w-6 flex items-center justify-center border-2 border-base"
                  style={{ background: ev.color, boxShadow: `0 0 0 3px ${ev.color}25` }}
                >
                  <div className="h-2 w-2 bg-base" />
                </div>

                <div className="border border-white/8 bg-base p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5"
                      style={{ background: ev.color, color: ev.color === "#B6FF4D" ? "#111" : "#fff" }}
                    >
                      {ev.year}
                    </span>
                    <h3 className="font-black text-main text-[14px]">{ev.title}</h3>
                  </div>
                  <p className="text-[13px] text-muted leading-relaxed">{ev.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
