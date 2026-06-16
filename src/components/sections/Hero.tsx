"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, User } from "lucide-react";
import Link from "next/link";
import { isLSDone } from "@/lib/loading-signal";

/* ── Bento card wrapper ──
   animate is gated on `ready` so the card stays invisible until
   the loading screen has dismissed — above-the-fold, mount-driven,
   never scroll-triggered.                                         */
function BentoCard({
  ready, delay, rotate, children, className,
}: {
  ready: boolean; delay: number; rotate: number;
  children: React.ReactNode; className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </motion.div>
  );
}

const BENTO_PROJECTS = [
  { name: "XAUUSD",  tech: "Next.js / FastAPI", color: "#FF4D00" },
  { name: "NextPos", tech: "Laravel 12",      color: "#B6FF4D" },
  { name: "HRIS",    tech: "Laravel / PHP",   color: "#7C3AED" },
];
const FRONTEND = ["React", "Next.js", "TypeScript", "Tailwind"];
const BACKEND  = ["PHP", "Laravel", "MySQL", "FastAPI"];

export default function Hero() {
  const [ready, setReady] = useState(false);
  const [displayText, setDisplayText] = useState("smnralf.");

  useEffect(() => {
    const CHARS  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const target = "smnralf.";

    const startTimer = setTimeout(() => {
      target.split("").forEach((finalChar, i) => {
        if (finalChar === "." || finalChar === " ") return;

        let count = 0;
        const iv = setInterval(() => {
          setDisplayText((prev) => {
            const arr = prev.split("");
            arr[i] = count < 20
              ? CHARS[Math.floor(Math.random() * CHARS.length)]
              : finalChar;
            return arr.join("");
          });
          count++;
          if (count > 20) clearInterval(iv);
        }, 40);
      });
    }, 2000);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (isLSDone()) {
      setReady(true);
      return;
    }

    const handler = () => setReady(true);
    window.addEventListener("ls:done", handler, { once: true });

    /* Fallback: if event never fires, show after 4s */
    const fallback = setTimeout(() => setReady(true), 4000);

    return () => {
      window.removeEventListener("ls:done", handler);
      clearTimeout(fallback);
    };
  }, []);

  /* All animation delays are relative to `ready` becoming true.
     Framer-motion's `animate` prop only fires when the value changes,
     so we use key={ready} to re-trigger when ready flips. */

  const d = (s: number) => s; /* explicit offset helper for readability */

  return (
    <section className="relative min-h-screen flex items-center bg-base overflow-hidden">

      {/* Background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.022]" style={{
          backgroundImage: "linear-gradient(rgba(245,242,234,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(245,242,234,0.5) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "#FF4D00", filter: "blur(80px)" }} />
        <div className="absolute bottom-[5%] right-[20%] w-[380px] h-[380px] rounded-full opacity-[0.06]"
          style={{ background: "#7C3AED", filter: "blur(70px)" }} />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 pt-[18vh] pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_420px] gap-10 lg:gap-12 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-5">

            {/* Status badge with pulse glow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: d(0), ease: "easeOut" }}
            >
              <motion.span
                className="inline-flex items-center gap-2 border-2 border-ink bg-lime px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-ink shadow-hard-sm"
                animate={ready ? {
                  boxShadow: [
                    "2px 2px 0 0 #111, 0 0 0px rgba(182,255,77,0)",
                    "2px 2px 0 0 #111, 0 0 18px rgba(182,255,77,0.45)",
                    "2px 2px 0 0 #111, 0 0 0px rgba(182,255,77,0)",
                  ],
                } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: d(2) }}
              >
                <span className="h-2 w-2 rounded-full bg-ink animate-pulse" />
                Open for project
              </motion.span>
            </motion.div>

            {/* "Hi, saya" */}
            <h1 className="flex flex-col gap-1">
              <span className="overflow-hidden block">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={ready ? { y: "0%", opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: d(0), ease: "easeOut" }}
                  className="block text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5rem] font-black text-muted leading-tight"
                >
                  Hi, saya
                </motion.span>
              </span>

              {/* "smnralf." — always visible, scramble is the animation */}
              <span className="block text-[5rem] sm:text-[6.5rem] lg:text-[7.5rem] font-black text-ember leading-[0.88] tracking-tight">
                {displayText}
              </span>
            </h1>

            {/* Name & Location */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: d(0.6), ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3 mt-2"
            >
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-muted" />
                <span className="text-[14px] lg:text-[15px] font-semibold text-muted">Soma Nur Alif</span>
              </div>
              <span className="text-muted/40 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-muted" />
                <span className="text-[14px] lg:text-[15px] font-semibold text-muted">Karimunjawa, Indonesia</span>
              </div>
            </motion.div>

            {/* Value prop */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: d(0.7), ease: "easeOut" }}
              className="text-[16px] sm:text-[18px] lg:text-[20px] text-muted leading-relaxed max-w-[600px] mt-2"
            >
              Berfokus pada pengembangan antarmuka yang bersih, responsif, dan fungsional.{" "}
              <span className="font-black text-main">Mengubah ide menjadi barisan kode</span>
              {" "}untuk menciptakan pengalaman digital yang optimal.
            </motion.p>

            {/* Stack line */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: d(0.8), ease: "easeOut" }}
              className="text-[14px] lg:text-[15px] text-muted/70 max-w-[500px]"
            >
              Stack:{" "}
              <span className="font-bold text-velvet">React / Next.js</span>
              {" "}·{" "}
              <span className="font-bold text-ember">PHP / Laravel</span>
              {" "}·{" "}
              <span className="font-semibold text-muted">MySQL</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: d(0.9), ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/projects"
                className="inline-flex items-center justify-center gap-2 border-2 border-ink bg-ember px-8 py-4 text-[15px] lg:text-[16px] font-black text-ink btn-hard">
                Lihat Project <ArrowRight className="h-5 w-5" />
              </Link>
              <motion.a
                href={`https://wa.me/6285176828884?text=${encodeURIComponent("Halo, saya ingin berdiskusi.")}`}
                target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: d(0.95), ease: "easeOut" }}
                className="inline-flex items-center justify-center gap-2 border-2 border-ink bg-paper px-8 py-4 text-[15px] lg:text-[16px] font-black text-ink btn-hard"
              >
                <MessageCircle className="h-5 w-5" />
                Mari Berdiskusi
              </motion.a>
            </motion.div>

            {/* Service link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={ready ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: d(1.05) }}
              className="mt-2"
            >
              <Link href="/services"
                className="inline-flex items-center gap-2 text-[14px] font-bold text-muted hover:text-ember transition-colors">
                Lihat Layanan &amp; Harga <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Bento grid — mount-triggered, 0.08s stagger, first card at 0.3s */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <BentoCard ready={ready} delay={0.30} rotate={-0.5} className="panel-paper p-6 flex flex-col gap-4 relative">
              <div className="inline-block -rotate-1 self-start">
                <span className="inline-block bg-ember border border-ink px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-ink shadow-hard-sm">Informatika</span>
              </div>
              <div>
                <div className="text-[28px] font-black text-ink leading-none tracking-tight">smnralf</div>
                <div className="text-[13px] font-semibold text-ink/60 mt-1">Web Developer</div>
              </div>
              <div className="border-t border-ink/15 pt-3 flex items-center gap-2 mt-auto">
                <span className="h-2 w-2 rounded-full bg-lime flex-shrink-0 border border-ink/20" />
                <span className="text-[11px] font-black text-ink/70 uppercase tracking-[0.1em]">Open for project</span>
              </div>
            </BentoCard>

            <BentoCard ready={ready} delay={0.38} rotate={0.5} className="card-dark p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">Projects</p>
                <span className="border-2 border-ink bg-paper px-2 py-0.5 text-[11px] font-black text-ink shadow-hard-sm">5+</span>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                {BENTO_PROJECTS.map((p) => (
                  <div key={p.name} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                    <div className="h-3 w-3 flex-shrink-0" style={{ background: p.color }} />
                    <span className="text-[13px] font-semibold text-main flex-1">{p.name}</span>
                    <span className="text-[11px] text-muted font-mono">{p.tech}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/8 pt-3 mt-1">
                <span className="text-[11px] font-bold text-muted">Case study tersedia →</span>
              </div>
            </BentoCard>

            <BentoCard ready={ready} delay={0.46} rotate={0.3} className="panel-velvet p-5 flex flex-col gap-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">Frontend</p>
              <div className="flex flex-wrap gap-2">
                {FRONTEND.map((t) => (
                  <span key={t} className="border border-white/25 bg-white/12 px-2.5 py-1 text-[11px] font-bold text-white">{t}</span>
                ))}
              </div>
            </BentoCard>

            <BentoCard ready={ready} delay={0.54} rotate={-0.3} className="panel-lime p-5 flex flex-col gap-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/60">Backend</p>
              <div className="flex flex-wrap gap-2">
                {BACKEND.map((t) => (
                  <span key={t} className="border border-ink/25 bg-ink/10 px-2.5 py-1 text-[11px] font-bold text-ink">{t}</span>
                ))}
              </div>
              <div className="mt-auto pt-2">
                <span className="text-[11px] font-black text-ink">⚡ Full stack delivery</span>
              </div>
            </BentoCard>
          </div>
        </div>

        {/* Mobile chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: d(1.0) }}
          className="lg:hidden mt-8 pt-6 border-t border-white/10"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted mb-3">Stack</p>
          <div className="flex flex-wrap gap-2">
            {FRONTEND.map((t) => (
              <span key={t} className="border px-2.5 py-1 text-[11px] font-semibold"
                style={{ borderColor: "rgba(124,58,237,0.4)", color: "#B8B2A7", background: "rgba(124,58,237,0.08)" }}>
                {t}
              </span>
            ))}
            {BACKEND.map((t) => (
              <span key={t} className="border px-2.5 py-1 text-[11px] font-semibold"
                style={{ borderColor: "rgba(255,77,0,0.4)", color: "#B8B2A7", background: "rgba(255,77,0,0.08)" }}>
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
