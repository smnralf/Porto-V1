"use client";

import { motion } from "framer-motion";

/*
 * Next.js App Router "template" re-mounts on every navigation,
 * giving us a reliable enter animation without fighting AnimatePresence.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
