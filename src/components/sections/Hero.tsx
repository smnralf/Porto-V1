"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const BENTO_PROJECTS = [
  { name: "Sehatin",    tech: "PHP",    color: "#FF4D00" },
  { name: "Listify",    tech: "JS",     color: "#7C3AED" },
  { name: "XAUUSD",     tech: "Next.js",color: "#B6FF4D" },
];

const FRONTEND_CHIPS = ["React", "Next.js", "TypeScript", "Tailwind"];
const BACKEND_CHIPS  = ["PHP", "Laravel", "MySQL", "Node.js"];

function BentoCard({
  delay,
  rotate,
  children,
  className,
  style,
}: {
  delay: number;
  rotate: number;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className={className}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-base overflow-hidden">

      {/* ── Background ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,242,234,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,242,234,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Orange shape — behind bento area */}
        <div
          className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "#FF4D00", filter: "blur(80px)" }}
        />
        {/* Violet shape */}
        <div
          className="absolute bottom-[5%] right-[20%] w-[380px] h-[380px] rounded-full opacity-[0.06]"
          style={{ background: "#7C3AED", filter: "blur(70px)" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_420px] gap-10 lg:gap-12 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-6">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 border border-lime/30 bg-lime/10 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-lime">
                <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
                Open for freelance projects
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="flex flex-col gap-1">
              <span className="overflow-hidden block">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
                  className="block text-[1.5rem] sm:text-[1.8rem] font-black text-muted leading-tight"
                >
                  Hi, saya
                </motion.span>
              </span>
              <span className="overflow-hidden block">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
                  className="block text-[3.8rem] sm:text-[4.8rem] lg:text-[5.2rem] font-black text-ember leading-[0.9] tracking-tight"
                >
                  smnralf.
                </motion.span>
              </span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38, ease: "easeOut" }}
              className="text-[15px] sm:text-base text-muted leading-relaxed max-w-[500px]"
            >
              Web developer yang fokus membangun tampilan rapi, responsif, dan sistem
              web yang benar-benar bisa dipakai — dari{" "}
              <span className="font-black text-velvet">frontend</span> sampai{" "}
              <span className="font-black text-ember">backend</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.52, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 border-2 border-ink bg-ember px-7 py-3.5 text-[15px] font-black text-ink btn-hard"
              >
                Lihat Project
                <ArrowRight className="h-[17px] w-[17px]" />
              </Link>
              <a
                href={`https://wa.me/6281234567890?text=${encodeURIComponent("Halo, saya ingin berdiskusi.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-ink bg-paper px-7 py-3.5 text-[15px] font-black text-ink btn-hard"
              >
                <MessageCircle className="h-[17px] w-[17px]" />
                Hubungi Saya
              </a>
            </motion.div>

            {/* Small service link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.68 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-[12px] font-bold text-muted hover:text-ember transition-colors"
              >
                Lihat Layanan <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          </div>

          {/* ── RIGHT: Bento grid ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-2.5"
          >
            {/* ① Profile card — paper */}
            <BentoCard delay={0.28} rotate={-0.5} className="panel-paper p-5 flex flex-col gap-3 relative">
              {/* Orange sticker inside */}
              <div className="inline-block -rotate-1 self-start">
                <span className="inline-block bg-ember border border-ink px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.12em] text-ink shadow-hard-sm">
                  Informatika
                </span>
              </div>
              <div>
                <div className="text-[22px] font-black text-ink leading-none tracking-tight">smnralf</div>
                <div className="text-[11px] font-semibold text-ink/60 mt-0.5">Web Developer</div>
              </div>
              <div className="border-t border-ink/15 pt-2 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-lime flex-shrink-0" />
                <span className="text-[10px] font-black text-ink/70 uppercase tracking-[0.1em]">Open for freelance</span>
              </div>
            </BentoCard>

            {/* ② Projects card — dark surface */}
            <BentoCard delay={0.36} rotate={0.5} className="card-dark p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted">Projects</p>
                <span className="border border-lime/40 bg-lime/10 px-1.5 py-0.5 text-[10px] font-black text-lime">5+</span>
              </div>
              <div className="flex flex-col gap-0.5 flex-1">
                {BENTO_PROJECTS.map((p) => (
                  <div key={p.name} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0">
                    <div className="h-2.5 w-2.5 flex-shrink-0" style={{ background: p.color }} />
                    <span className="text-[11px] font-semibold text-main flex-1 leading-none">{p.name}</span>
                    <span className="text-[10px] text-muted font-mono">{p.tech}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/8 pt-2">
                <span className="text-[10px] font-bold text-muted">Case study tersedia →</span>
              </div>
            </BentoCard>

            {/* ③ Frontend / Tech — velvet */}
            <BentoCard delay={0.44} rotate={0.3} className="panel-velvet p-4 flex flex-col gap-3">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">Frontend</p>
              <div className="flex flex-wrap gap-1.5">
                {FRONTEND_CHIPS.map((t) => (
                  <span key={t} className="border border-white/25 bg-white/12 px-2 py-0.5 text-[10px] font-bold text-white">
                    {t}
                  </span>
                ))}
              </div>
            </BentoCard>

            {/* ④ Backend — lime */}
            <BentoCard delay={0.52} rotate={-0.3} className="panel-lime p-4 flex flex-col gap-3">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-ink/60">Backend</p>
              <div className="flex flex-wrap gap-1.5">
                {BACKEND_CHIPS.map((t) => (
                  <span key={t} className="border border-ink/25 bg-ink/10 px-2 py-0.5 text-[10px] font-bold text-ink">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-1 flex items-center gap-1.5">
                <span className="text-ink/80 text-[14px] leading-none">⚡</span>
                <span className="text-[10px] font-black text-ink">Full stack delivery</span>
              </div>
            </BentoCard>
          </motion.div>
        </div>

        {/* Mobile: compact chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.75 }}
          className="lg:hidden mt-8 pt-6 border-t border-white/10"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted mb-3">Stack</p>
          <div className="flex flex-wrap gap-2">
            {[...FRONTEND_CHIPS, ...BACKEND_CHIPS].map((t, i) => (
              <span
                key={t}
                className="border px-2.5 py-1 text-[11px] font-semibold"
                style={{
                  borderColor: i < 4 ? "rgba(124,58,237,0.4)" : "rgba(255,77,0,0.4)",
                  color: i < 4 ? "#7C3AED" : "#FF4D00",
                  background: i < 4 ? "rgba(124,58,237,0.1)" : "rgba(255,77,0,0.1)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
