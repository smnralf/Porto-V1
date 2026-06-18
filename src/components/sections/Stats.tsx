"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5+",   label: "Projects Completed",  accent: "#06B6D4" },
  { value: "3+",   label: "Clients Served",   accent: "#7C3AED" },
  { value: "4",    label: "Service Packages",     accent: "#06B6D4" },
  { value: "100%", label: "Quality Commitment", accent: "#7C3AED" },
];

export default function Stats() {
  return (
    <section className="px-5 sm:px-6 lg:px-8 py-12 bg-base section-rule">
      <div className="mx-auto max-w-6xl">
        <div className="border-2 border-white/10 bg-surface p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center gap-1.5 text-center"
              >
                <span className="text-3xl sm:text-4xl font-black" style={{ color: stat.accent }}>
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-muted">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
