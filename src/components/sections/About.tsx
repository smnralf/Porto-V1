"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView, useReducedMotion } from "framer-motion";
import RevealClip from "@/components/ui/RevealClip";
import { Code2, Flame, MapPin } from "lucide-react";

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

export default function About() {
  return (
    <section id="about" className="px-5 sm:px-6 lg:px-8 py-20 bg-[#020617] section-rule scroll-mt-16">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <RevealClip inline delay={0}>
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white mb-3">
              Tentang Saya
            </span>
          </RevealClip>
          <RevealClip delay={0.08}>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Kenali Saya.
            </h2>
          </RevealClip>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* Cell 1: Main About Text (Spans 2 cols, 2 rows on large screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 rounded-3xl border border-white/10 bg-surface/30 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#06B6D4] opacity-[0.03] blur-[80px] rounded-full pointer-events-none group-hover:opacity-10 transition-opacity duration-700" />
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
                Membangun <span className="text-[#06B6D4]">solusi nyata</span> dengan kode yang rapi.
              </h3>
              <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-4">
                Saya adalah mahasiswa Informatika yang berdedikasi membangun aplikasi web modern. Tidak sekadar rapi di luar, tapi juga efisien, scalable, dan maintainable di sisi server.
              </p>
              <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                Terbiasa dengan ekosistem <strong>React / Next.js</strong> di frontend, serta <strong>PHP / Laravel / Go</strong> untuk mengamankan data dan logika di backend.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-8 relative z-10">
              <MapPin className="h-5 w-5 text-white/40" />
              <span className="text-sm font-semibold text-white/60">Karimunjawa, Indonesia</span>
            </div>
          </motion.div>

          {/* Cell 2: Availability */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl border border-[#10B981]/20 bg-[#10B981]/5 backdrop-blur-md p-8 flex flex-col justify-center items-center text-center group"
          >
            <div className="h-16 w-16 rounded-full bg-[#10B981]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <div className="h-4 w-4 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_15px_#10B981]" />
            </div>
            <h4 className="text-3xl font-black text-white mb-1">Open</h4>
            <p className="text-sm font-semibold text-[#10B981]">For Freelance</p>
          </motion.div>

          {/* Cell 3: Projects Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl border border-white/10 bg-surface/30 backdrop-blur-md p-8 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#8B5CF6] opacity-10 blur-[50px] rounded-full pointer-events-none group-hover:opacity-20 transition-opacity" />
            <div className="text-6xl font-black text-white drop-shadow-[0_0_15px_rgba(139,92,246,0.5)] mb-2 relative z-10">
              <CountUp from={0} to={5} suffix="+" />
            </div>
            <p className="text-sm font-bold text-white/60 uppercase tracking-widest relative z-10">Project Selesai</p>
          </motion.div>

          {/* Cell 4: Tech Stack (Marquee alternative) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 rounded-3xl border border-white/10 bg-surface/30 backdrop-blur-md p-8 flex flex-col justify-center"
          >
            <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Code2 className="h-4 w-4" /> Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Laravel", "PHP", "Golang", "Node.js", "MySQL", "Git", "Figma", "Linux"].map((tech, i) => (
                <span key={i} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cell 5: Always Learning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl border border-[#FF4D4D]/20 bg-[#FF4D4D]/5 backdrop-blur-md p-8 flex flex-col justify-center items-start"
          >
            <Flame className="h-8 w-8 text-[#FF4D4D] mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Selalu Belajar</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Teknologi berkembang cepat. Fokus saat ini: menguasai arsitektur backend skala besar dengan Go.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
