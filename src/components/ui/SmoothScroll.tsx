"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    /* Respect prefers-reduced-motion — disable Lenis, fall back to native scroll */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    /* Lenis auto-disables on touch devices internally */

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    /* Sync Lenis raf with requestAnimationFrame so framer-motion useScroll works */
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return (
    /* MotionConfig handles prefers-reduced-motion for all framer-motion animations */
    <MotionConfig reducedMotion="never">
      {children}
    </MotionConfig>
  );
}
