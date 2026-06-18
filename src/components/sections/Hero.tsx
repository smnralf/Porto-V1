"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { isLSDone } from "@/lib/loading-signal";

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (isLSDone()) {
      setReady(true);
      return;
    }

    const handler = () => setReady(true);
    window.addEventListener("ls:done", handler, { once: true });
    
    /* Fallback */
    const fallback = setTimeout(() => setReady(true), 4000);

    return () => {
      window.removeEventListener("ls:done", handler);
      clearTimeout(fallback);
    };
  }, []);

  const d = (s: number) => s;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden">
      
      {/* Cinematic Background Elements */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {/* Glowing Orb */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={ready ? { opacity: 0.15, scale: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full"
          style={{ 
            background: "radial-gradient(circle, #06B6D4 0%, transparent 60%)", 
            filter: "blur(100px)" 
          }} 
        />
        {/* Subtle grid with radial mask */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at center, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)"
        }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-[-5vh]">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: d(0.2), ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <div className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_10px_#10B981]" />
            <span>Open for project</span>
          </span>
        </motion.div>

        {/* Massive Typography */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={ready ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.2, delay: d(0.3), ease: [0.16, 1, 0.3, 1] }}
          className="text-[4.5rem] sm:text-[7rem] lg:text-[10rem] font-black tracking-tighter leading-none mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/20">
            smnralf.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: d(0.5), ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl lg:text-2xl text-muted max-w-2xl font-light tracking-wide leading-relaxed"
        >
          Soma Nur Alif — <span className="font-medium text-white">Software Engineer & AI Enthusiast</span> building intelligent, scalable, and functional digital ecosystems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: d(0.7), ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 sm:mt-12 w-full sm:w-auto"
        >
          <Link href="/projects"
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            View Projects 
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`https://wa.me/6285176828884?text=${encodeURIComponent("Hello, I would like to discuss a project.")}`}
            target="_blank" rel="noopener noreferrer"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10 hover:border-white/20"
          >
            <MessageCircle className="h-4 w-4" />
            Let's Talk
          </a>
        </motion.div>
      </div>
      
      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
    </section>
  );
}
