"use client";

import { motion } from "framer-motion";
import RevealClip from "@/components/ui/RevealClip";
import { services } from "@/data/services";
import ServiceCard from "@/components/cards/ServiceCard";

export default function ServicesSection() {
  return (
    <section id="layanan" className="px-5 sm:px-6 lg:px-8 py-24 bg-[#020617] section-rule relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[#06B6D4] opacity-[0.05] blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <RevealClip inline>
            <span className="inline-block rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#06B6D4] mb-4">
              Layanan &amp; Harga
            </span>
          </RevealClip>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            Pilih paket yang sesuai.
          </h2>
          <p className="text-base text-white/60 max-w-xl">
            Harga transparan. Tidak ada biaya tersembunyi. Dari landing page sederhana hingga web app kustom penuh.
          </p>
        </motion.div>

        {/* Modern Pricing Table Layout */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-0 lg:items-center">
          {services.map((service, i) => {
            const isPopular = service.highlighted;
            
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`w-full lg:w-1/4 ${
                  isPopular 
                    ? "z-10 lg:scale-110 lg:-mx-4 shadow-[0_0_40px_rgba(6,182,212,0.15)]" 
                    : "z-0 scale-100"
                }`}
              >
                <ServiceCard service={service} />
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-sm text-white/50 mt-12 text-center max-w-2xl mx-auto"
        >
          * Harga dapat berubah tergantung jumlah halaman, fitur tambahan, kerumitan integrasi, dan kebutuhan hosting/domain khusus.
        </motion.p>
      </div>
    </section>
  );
}
