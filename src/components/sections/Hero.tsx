"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin } from "lucide-react";
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
  { name: "Sehatin", tech: "PHP",    color: "#FF4D00" },
  { name: "Listify", tech: "JS",     color: "#7C3AED" },
  { name: "XAUUSD",  tech: "Next.js",color: "#B6FF4D" },
];
const FRONTEND = ["React", "Next.js", "TypeScript", "Tailwind"];
const BACKEND  = ["PHP", "Laravel", "MySQL", "Node.js"];

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
    /* Start immediately if loading screen already finished */
    if (isLSDone()) { setReady(true); return; }

    let fired = false;
    const handler = () => { fired = true; setReady(true); };
    window.addEventListener("ls:done", handler, { once: true });

    /* Fallback: always start within 3.2s from mount */
    const fallback = setTimeout(() => { if (!fired) setReady(true); }, 3200);

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
                Tersedia untuk freelance
              </motion.span>
            </motion.div>

            {/* "Hi, saya" */}
            <h1 className="flex flex-col gap-0.5">
              <span className="overflow-hidden block">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={ready ? { y: "0%", opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: d(0), ease: "easeOut" }}
                  className="block text-[1.4rem] sm:text-[1.7rem] font-black text-muted leading-tight"
                >
                  Hi, saya
                </motion.span>
              </span>

              {/* "smnralf." — always visible, scramble is the animation */}
              <span className="block text-[4rem] sm:text-[5rem] lg:text-[5.5rem] font-black text-ember leading-[0.88] tracking-tight">
                {displayText}
              </span>
            </h1>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: d(0.6), ease: "easeOut" }}
              className="flex items-center gap-1.5"
            >
              <MapPin className="h-3.5 w-3.5 text-muted" />
              <span className="text-[12px] font-semibold text-muted">Karimunjawa, Indonesia</span>
            </motion.div>

            {/* Value prop */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: d(0.7), ease: "easeOut" }}
              className="text-[15px] sm:text-[16px] text-muted leading-relaxed max-w-[500px]"
            >
              Membangun website untuk{" "}
              <span className="font-black text-main">bisnis, UMKM, dan personal brand</span>
              {" "}— dari landing page sederhana sampai aplikasi web dengan panel admin.
            </motion.p>

            {/* Stack line */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: d(0.8), ease: "easeOut" }}
              className="text-[13px] text-muted/70 max-w-[480px]"
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
              className="flex flex-col sm:flex-row gap-3 pt-1"
            >
              <Link href="/projects"
                className="inline-flex items-center justify-center gap-2 border-2 border-ink bg-ember px-7 py-3.5 text-[14px] font-black text-ink btn-hard">
                Lihat Project <ArrowRight className="h-4 w-4" />
              </Link>
              <motion.a
                href={`https://wa.me/6285176828884?text=${encodeURIComponent("Halo, saya ingin berdiskusi.")}`}
                target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: d(0.95), ease: "easeOut" }}
                className="inline-flex items-center justify-center gap-2 border-2 border-ink bg-paper px-7 py-3.5 text-[14px] font-black text-ink btn-hard"
              >
                <MessageCircle className="h-4 w-4" />
                Konsultasi Gratis
              </motion.a>
            </motion.div>

            {/* Service link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={ready ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: d(1.05) }}
            >
              <Link href="/services"
                className="inline-flex items-center gap-1.5 text-[12px] font-bold text-muted hover:text-ember transition-colors">
                Lihat Layanan &amp; Harga <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Bento grid — mount-triggered, 0.08s stagger, first card at 0.3s */}
          <div className="hidden lg:grid grid-cols-2 gap-2.5">
            <BentoCard ready={ready} delay={0.30} rotate={-0.5} className="panel-paper p-5 flex flex-col gap-3 relative">
              <div className="inline-block -rotate-1 self-start">
                <span className="inline-block bg-ember border border-ink px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.12em] text-ink shadow-hard-sm">Informatika</span>
              </div>
              <div>
                <div className="text-[22px] font-black text-ink leading-none tracking-tight">smnralf</div>
                <div className="text-[11px] font-semibold text-ink/60 mt-0.5">Web Developer</div>
              </div>
              <div className="border-t border-ink/15 pt-2 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-lime flex-shrink-0 border border-ink/20" />
                <span className="text-[10px] font-black text-ink/70 uppercase tracking-[0.1em]">Open for freelance</span>
              </div>
            </BentoCard>

            <BentoCard ready={ready} delay={0.38} rotate={0.5} className="card-dark p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted">Projects</p>
                <span className="border-2 border-ink bg-paper px-1.5 py-0.5 text-[10px] font-black text-ink shadow-hard-sm">5+</span>
              </div>
              <div className="flex flex-col gap-0.5 flex-1">
                {BENTO_PROJECTS.map((p) => (
                  <div key={p.name} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0">
                    <div className="h-2.5 w-2.5 flex-shrink-0" style={{ background: p.color }} />
                    <span className="text-[11px] font-semibold text-main flex-1">{p.name}</span>
                    <span className="text-[10px] text-muted font-mono">{p.tech}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/8 pt-2">
                <span className="text-[10px] font-bold text-muted">Case study tersedia →</span>
              </div>
            </BentoCard>

            <BentoCard ready={ready} delay={0.46} rotate={0.3} className="panel-velvet p-4 flex flex-col gap-3">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">Frontend</p>
              <div className="flex flex-wrap gap-1.5">
                {FRONTEND.map((t) => (
                  <span key={t} className="border border-white/25 bg-white/12 px-2 py-0.5 text-[10px] font-bold text-white">{t}</span>
                ))}
              </div>
            </BentoCard>

            <BentoCard ready={ready} delay={0.54} rotate={-0.3} className="panel-lime p-4 flex flex-col gap-3">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-ink/60">Backend</p>
              <div className="flex flex-wrap gap-1.5">
                {BACKEND.map((t) => (
                  <span key={t} className="border border-ink/25 bg-ink/10 px-2 py-0.5 text-[10px] font-bold text-ink">{t}</span>
                ))}
              </div>
              <div className="mt-auto pt-1">
                <span className="text-[10px] font-black text-ink">⚡ Full stack delivery</span>
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
