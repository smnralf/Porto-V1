"use client";

import { motion } from "framer-motion";
import RevealClip from "@/components/ui/RevealClip";

const steps = [
  { num: "01", title: "Konsultasi Kebutuhan",    desc: "Diskusi mendalam mengenai tujuan, target pengguna, dan kebutuhan website Anda." },
  { num: "02", title: "Scope & Estimasi Harga",  desc: "Menetapkan fitur, halaman, teknologi, timeline, dan estimasi harga secara transparan." },
  { num: "03", title: "Desain Tampilan",          desc: "Menyusun tampilan visual sesuai brand dan preferensi Anda." },
  { num: "04", title: "Development",              desc: "Pengembangan website menggunakan teknologi modern dengan kode bersih." },
  { num: "05", title: "Revisi",                   desc: "Perbaikan berdasarkan feedback Anda sesuai jumlah revisi yang disepakati." },
  { num: "06", title: "Deploy",                   desc: "Website dipublikasikan ke hosting/server pilihan dan siap diakses publik." },
  { num: "07", title: "Serah Terima",             desc: "Dokumentasi, akses, dan penjelasan penggunaan diserahkan kepada Anda." },
];

/* Lime only as accent bar/dot — step number uses it at very low opacity as decoration */
const STEP_COLORS = ["#FF4D00", "#7C3AED", "#B6FF4D", "#FF4D00", "#7C3AED", "#B6FF4D", "#FF4D00"];

export default function HowIWork() {
  return (
    <section id="cara-kerja" className="px-5 sm:px-6 lg:px-8 py-14 bg-surface section-rule">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block border border-velvet/30 bg-velvet/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-widest text-velvet mb-4">
            Proses Kerja
          </span>
          <h2 className="h2-display font-black text-main">Bagaimana saya bekerja.</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card-depth-2 p-5 flex flex-col gap-3"
            >
              <span className="text-[28px] font-black leading-none" style={{ color: `${STEP_COLORS[i]}35` }}>
                {step.num}
              </span>
              <div className="h-[2px] w-6" style={{ background: STEP_COLORS[i] }} />
              <h3 className="font-black text-main text-[13px]">{step.title}</h3>
              <p className="text-[12px] text-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
