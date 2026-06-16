"use client";

import { motion } from "framer-motion";
import RevealClip from "@/components/ui/RevealClip";
import { Smartphone, Code2, Search, CloudUpload, Wrench, MessageSquare } from "lucide-react";

const reasons = [
  { icon: Smartphone,    title: "Responsive Design",    color: "#FF4D00", desc: "Dioptimalkan untuk tampil sempurna di semua ukuran layar." },
  { icon: Code2,         title: "Clean Code",           color: "#7C3AED", desc: "Kode bersih, mudah dibaca, dan mudah dikembangkan." },
  { icon: Search,        title: "Basic SEO",            color: "#B6FF4D", desc: "Struktur SEO dasar agar website mudah ditemukan." },
  { icon: CloudUpload,   title: "Deploy Assistance",    color: "#FF4D00", desc: "Bantu proses deploy hingga website live dan siap diakses." },
  { icon: Wrench,        title: "Maintenance Opsional", color: "#7C3AED", desc: "Layanan maintenance pasca-proyek tersedia secara opsional." },
  { icon: MessageSquare, title: "Komunikasi Jelas",     color: "#B6FF4D", desc: "Update progress rutin, tidak perlu khawatir kehilangan info." },
];

export default function WhyWorkWithMe() {
  return (
    <section id="kenapa" className="px-5 sm:px-6 lg:px-8 py-14 bg-base section-rule">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block border border-white/12 bg-surface px-3 py-1 text-[0.65rem] font-black uppercase tracking-widest text-muted mb-4">
            Keunggulan
          </span>
          <h2 className="h2-display font-black text-main">Kenapa pilih saya?</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="card-depth-2 p-6 flex flex-col gap-4 transition-colors"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center border"
                  style={{ background: `${r.color}12`, borderColor: `${r.color}30` }}
                >
                  <Icon className="h-5 w-5" style={{ color: r.color }} />
                </div>
                <div>
                  <h3 className="font-black text-main mb-1 text-[14px]">{r.title}</h3>
                  <p className="text-[13px] text-muted leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
