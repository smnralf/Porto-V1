"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5+",   label: "Project Selesai",    accent: "#B6FF4D" },
  { value: "3+",   label: "Klien Dilayani",     accent: "#FF4ECD" },
  { value: "4",    label: "Paket Layanan",       accent: "#7C5CFF" },
  { value: "100%", label: "Komitmen Kualitas",   accent: "#B6FF4D" },
];

export default function Stats() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <div
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: "#11131F",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
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
                <span
                  className="text-3xl sm:text-4xl font-black"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-ash">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
