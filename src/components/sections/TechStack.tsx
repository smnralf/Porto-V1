"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/tech-stack";
import RevealClip from "@/components/ui/RevealClip";

const allTechs = techStack.flatMap((g) =>
  g.items.map((item) => ({ name: item.name, category: g.category, primary: item.level === "primary" }))
);
const row1 = [...allTechs, ...allTechs];
const row2 = [...allTechs.slice().reverse(), ...allTechs.slice().reverse()];

const CAT_STYLE: Record<string, { color: string; bg: string; border: string }> = {
  Frontend: { color: "#8B5CF6", bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.3)" },
  Backend:  { color: "#06B6D4", bg: "rgba(6,182,212,0.12)",   border: "rgba(6,182,212,0.3)" },
  Database: { color: "#10B981", bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.3)" },
  Tools:    { color: "#94A3B8", bg: "rgba(148,163,184,0.08)", border: "rgba(148,163,184,0.2)" },
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
          <RevealClip inline>
            <span className="inline-block rounded-full border border-ember/30 bg-ember/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-ember mb-4">
              Tech Stack
            </span>
          </RevealClip>
          <RevealClip delay={0.08}>
            <h2 className="h2-display font-black text-main mt-4">
              Teknologi yang saya kuasai.
            </h2>
          </RevealClip>
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
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-bold"
                style={{ color: s.color, borderColor: s.border, background: s.bg }}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                {group.category}
              </span>
            );
          })}
        </motion.div>
      </div>

      {/* Row 1 — forward, pauses on hover via group */}
      <div className="relative mb-3 group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-surface-alt to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-surface-alt to-transparent" />
        <div
          className="flex gap-2.5 animate-marquee-fwd group-hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {row1.map((tech, i) => {
            const s = CAT_STYLE[tech.category];
            return (
              <div
                key={`r1-${i}`}
                className="flex-shrink-0 flex items-center gap-2.5 rounded-xl border px-4 py-2.5"
                style={{ background: s.bg, borderColor: s.border }}
              >
                <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ background: s.color }} />
                <span className="text-sm font-semibold whitespace-nowrap" style={{ color: tech.primary ? s.color : "#B8B2A7" }}>
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2 — reverse, pauses on hover via group */}
      <div className="relative group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-surface-alt to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-surface-alt to-transparent" />
        <div
          className="flex gap-2.5 animate-marquee-rev group-hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {row2.map((tech, i) => {
            const s = CAT_STYLE[tech.category];
            return (
              <div
                key={`r2-${i}`}
                className="flex-shrink-0 flex items-center gap-2.5 rounded-xl border px-4 py-2.5 bg-base"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ background: s.color }} />
                <span className="text-sm font-medium text-muted whitespace-nowrap">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
