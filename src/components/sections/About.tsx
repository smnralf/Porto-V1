"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView, useReducedMotion } from "framer-motion";
import RevealClip from "@/components/ui/RevealClip";

/* ── CountUp: animates from `from` to `to` when entering viewport ── */
function CountUp({
  from,
  to,
  suffix = "",
  className,
}: {
  from: number;
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(from);
  const prefersReduced = useReducedMotion();
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    if (prefersReduced) {
      setVal(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, from, to, prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}

/* ── Stat definitions ── */
type NumStat  = { kind: "num";  from: number; to: number; suffix?: string; label: string; cls: string; textVal: string; textLbl: string };
type TextStat = { kind: "text"; value: string;            label: string; cls: string; textVal: string; textLbl: string };
type Stat = NumStat | TextStat;

const STATS: Stat[] = [
  { kind: "num",  from: 0,    to: 5,    suffix: "+", label: "Project selesai", cls: "panel-paper",  textVal: "text-ember", textLbl: "text-ink/70" },
  { kind: "num",  from: 2018, to: 2022,              label: "Mulai coding",    cls: "card-dark",    textVal: "text-main",  textLbl: "text-muted" },
  { kind: "text", value: "Open",                     label: "For freelance",   cls: "panel-lime",   textVal: "text-ink",   textLbl: "text-ink/70" },
];

export default function About() {
  return (
    <section id="about" className="px-5 sm:px-6 lg:px-8 py-32 bg-base section-rule scroll-mt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div>
              <RevealClip inline delay={0}>
                <span className="inline-block border border-white/15 bg-surface px-3 py-1 text-[0.65rem] font-black uppercase tracking-widest text-muted mb-5">
                  Tentang Saya
                </span>
              </RevealClip>
              <RevealClip delay={0.08}>
                <h2 className="h2-display font-black text-main">
                  Developer yang suka membangun{" "}
                  <span className="text-ember">hal yang nyata.</span>
                </h2>
              </RevealClip>
            </div>

            <div className="flex flex-col gap-3 text-[15px] text-muted leading-relaxed max-w-2xl">
              <p>
                Saya adalah mahasiswa Informatika yang tertarik pada pengembangan web —
                terutama membangun website yang tidak hanya terlihat rapi, tetapi juga
                punya <strong className="text-main">struktur dan fungsi yang jelas.</strong>
              </p>
              <p>
                Terbiasa mengerjakan{" "}
                <span className="font-bold text-main">frontend</span> dengan React &amp;
                Next.js,{" "}
                <span className="font-bold text-main">backend dasar</span> dengan PHP &amp; Laravel,
                database MySQL, serta deployment end-to-end.
              </p>
              <p>
                Terbuka untuk proyek freelance sambil terus belajar — terutama di
                area web development dan desain antarmuka.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="border-2 border-ink bg-lime px-3 py-1 text-[11px] font-black text-ink shadow-hard-sm">
                Informatika Student
              </span>
              {["React / Next.js", "PHP / Laravel"].map((tag) => (
                <span
                  key={tag}
                  className="border px-3 py-1 text-[11px] font-bold"
                  style={{ borderColor: "rgba(124,58,237,0.35)", color: "#7C3AED", background: "rgba(124,58,237,0.08)" }}
                >
                  {tag}
                </span>
              ))}
              {["MySQL", "Git"].map((tag) => (
                <span
                  key={tag}
                  className="border px-3 py-1 text-[11px] font-bold"
                  style={{ borderColor: "rgba(245,242,234,0.12)", color: "#B8B2A7", background: "rgba(245,242,234,0.04)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: stats with counter animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-3"
          >
            {STATS.map((s) => (
              <div key={s.label} className={`${s.cls} p-5 flex flex-col gap-0.5`}>
                <div className={`text-4xl font-black leading-none ${s.textVal}`}>
                  {s.kind === "num" ? (
                    <CountUp from={s.from} to={s.to} suffix={s.suffix} />
                  ) : (
                    s.value
                  )}
                </div>
                <div className={`text-[12px] font-bold ${s.textLbl}`}>{s.label}</div>
              </div>
            ))}
            <div className="border border-white/10 bg-surface p-4">
              <p className="text-[11px] font-semibold text-muted leading-relaxed">
                Selalu belajar. Selalu membangun.
                Fokus saat ini: Next.js &amp; Laravel.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
