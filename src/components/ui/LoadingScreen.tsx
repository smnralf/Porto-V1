"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { setLSDone } from "@/lib/loading-signal";

const SESSION_KEY = "smnralf_loaded";

export default function LoadingScreen() {
  const [shouldRender, setShouldRender] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const isDev = process.env.NODE_ENV === "development";

    if (window.matchMedia("(pointer: coarse)").matches) {
      setLSDone();
      window.dispatchEvent(new Event("ls:done"));
      return;
    }

    if (!isDev && sessionStorage.getItem(SESSION_KEY)) {
      setLSDone();
      window.dispatchEvent(new CustomEvent("ls:done"));
      return;
    }

    if (!isDev) sessionStorage.setItem(SESSION_KEY, "1");

    setShouldRender(true);

    const timer = setTimeout(() => {
      setExiting(true);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <motion.div
      suppressHydrationWarning
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] select-none"
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      animate={exiting ? { clipPath: "inset(100% 0 0% 0)" } : { clipPath: "inset(0 0 0% 0)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (exiting) {
          setLSDone();
          window.dispatchEvent(new CustomEvent("ls:done"));
          setTimeout(() => setShouldRender(false), 100);
        }
      }}
    >
      {/* Subtle Grain Overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Main Brand Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-white text-2xl sm:text-3xl font-black tracking-[0.4em] ml-[0.4em] mb-6 relative z-10"
      >
        SMNRALF
      </motion.div>

      {/* Loading Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="h-[2px] w-48 sm:w-64 bg-white/10 overflow-hidden relative z-10"
      >
        <motion.div
          className="absolute top-0 left-0 h-full bg-[#06B6D4]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
        />
      </motion.div>

    </motion.div>
  );
}
