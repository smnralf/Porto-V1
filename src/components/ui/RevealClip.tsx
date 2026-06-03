"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface RevealClipProps {
  children: React.ReactNode;
  delay?: number;
  /** true → wrapper renders as inline-block (for badge spans) */
  inline?: boolean;
  className?: string;
}

/* Clip-path curtain: hidden bottom (inset 100%) → fully visible (inset 0%) */
export default function RevealClip({ children, delay = 0, inline, className }: RevealClipProps) {
  const ref          = useRef(null);
  const inView       = useInView(ref, { once: true, amount: 0.2 });
  const prefersReduc = useReducedMotion();

  if (prefersReduc) {
    return (
      <div ref={ref} style={{ display: inline ? "inline-block" : "block" }} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ display: inline ? "inline-block" : "block" }}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={inView ? { clipPath: "inset(0 0 0% 0)" } : {}}
      transition={{ duration: 0.6, delay, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}
