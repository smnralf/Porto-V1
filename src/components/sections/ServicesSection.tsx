"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceCard from "@/components/cards/ServiceCard";

export default function ServicesSection() {
  return (
    <section id="layanan" className="px-5 sm:px-6 lg:px-8 py-14 bg-base section-rule">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block border border-ember/30 bg-ember/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-ember mb-4">
            Layanan &amp; Harga
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-main leading-tight tracking-tight mb-2">
            Pilih paket yang sesuai.
          </h2>
          <p className="text-[14px] text-muted">Harga transparan. Tidak ada biaya tersembunyi.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-[11px] text-muted mt-6 border-l-2 border-ember pl-3"
        >
          Harga dapat berubah tergantung jumlah halaman, fitur, revisi, deadline, integrasi, dan kebutuhan hosting/domain.
        </motion.p>
      </div>
    </section>
  );
}
