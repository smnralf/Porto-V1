"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/tech-stack";

const allTechs = techStack.flatMap((g) =>
  g.items.map((item) => ({ name: item.name, category: g.category, primary: item.level === "primary" }))
);
const row1 = [...allTechs, ...allTechs];
const row2 = [...allTechs.slice().reverse(), ...allTechs.slice().reverse()];

const CAT_STYLE: Record<string, { color: string; bg: string; border: string }> = {
  Frontend: { color: "#7C3AED", bg: "rgba(124,58,237,0.12)", border: "rgba(124,58,237,0.3)" },
  Backend:  { color: "#FF4D00", bg: "rgba(255,77,0,0.12)",   border: "rgba(255,77,0,0.3)" },
  Database: { color: "#B6FF4D", bg: "rgba(182,255,77,0.12)", border: "rgba(182,255,77,0.3)" },
  Tools:    { color: "#B8B2A7", bg: "rgba(184,178,167,0.08)", border: "rgba(184,178,167,0.2)" },
};

export default function TechStack() {
  return (
    <section id="tech" className="py-16 overflow-hidden bg-surface-alt section-rule scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block border border-ember/30 bg-ember/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-ember mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-main leading-tight tracking-tight">
            Teknologi yang saya kuasai.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {techStack.map((group) => {
            const s = CAT_STYLE[group.category];
            return (
              <span
                key={group.category}
                className="inline-flex items-center gap-2 border px-3 py-1.5 text-[12px] font-bold"
                style={{ color: s.color, borderColor: s.border, background: s.bg }}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                {group.category}
              </span>
            );
          })}
        </motion.div>
      </div>

      {/* Row 1 — forward */}
      <div className="relative mb-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-surface-alt to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-surface-alt to-transparent" />
        <div className="flex gap-2.5 animate-marquee-fwd" style={{ width: "max-content" }}>
          {row1.map((tech, i) => {
            const s = CAT_STYLE[tech.category];
            return (
              <div key={`r1-${i}`} className="flex-shrink-0 flex items-center gap-2 border px-4 py-2.5"
                style={{ background: s.bg, borderColor: s.border }}>
                <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ background: s.color }} />
                <span className="text-sm font-semibold" style={{ color: tech.primary ? s.color : "#B8B2A7" }}>
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-surface-alt to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-surface-alt to-transparent" />
        <div className="flex gap-2.5 animate-marquee-rev" style={{ width: "max-content" }}>
          {row2.map((tech, i) => {
            const s = CAT_STYLE[tech.category];
            return (
              <div key={`r2-${i}`} className="flex-shrink-0 flex items-center gap-2 border px-4 py-2.5 bg-base"
                style={{ borderColor: "rgba(245,242,234,0.08)" }}>
                <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ background: s.color }} />
                <span className="text-sm font-medium text-muted">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
