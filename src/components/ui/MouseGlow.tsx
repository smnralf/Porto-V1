"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 65, damping: 28 });
  const y = useSpring(rawY, { stiffness: 65, damping: 28 });

  useEffect(() => {
    rawX.set(window.innerWidth / 2);
    rawY.set(window.innerHeight / 2);

    const handler = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [rawX, rawY]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-0 rounded-full"
      style={{
        left: x,
        top: y,
        x: "-50%",
        y: "-50%",
        width: 720,
        height: 720,
        background:
          "radial-gradient(circle at center, rgba(182,255,77,0.045) 0%, rgba(255,78,205,0.025) 45%, transparent 65%)",
      }}
    />
  );
}
