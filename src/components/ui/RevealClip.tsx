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
  return (
    <motion.div
      className={className}
      style={{ display: inline ? "inline-block" : "block" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
