"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "5+",    label: "Project selesai",  cls: "panel-paper",  textVal: "text-ember",   textLbl: "text-ink/70" },
  { value: "2022",  label: "Mulai coding",      cls: "card-dark",    textVal: "text-main",    textLbl: "text-muted" },
  { value: "Open",  label: "For freelance",     cls: "panel-lime",   textVal: "text-ink",     textLbl: "text-ink/70" },
];

export default function About() {
  return (
    <section id="about" className="px-5 sm:px-6 lg:px-8 py-16 bg-base section-rule scroll-mt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div>
              <span className="inline-block border border-white/15 bg-surface px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-muted mb-5">
                Tentang Saya
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-main leading-tight tracking-tight">
                Developer yang suka membangun{" "}
                <span className="text-ember">hal yang nyata.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-3 text-[15px] text-muted leading-relaxed max-w-2xl">
              <p>
                Saya adalah mahasiswa Informatika yang tertarik pada pengembangan web —
                terutama membangun website yang tidak hanya terlihat rapi, tetapi juga
                punya <strong className="text-main">struktur dan fungsi yang jelas.</strong>
              </p>
              <p>
                Terbiasa mengerjakan{" "}
                <span className="font-black text-velvet">frontend</span> dengan React &
                Next.js,{" "}
                <span className="font-black text-ember">backend dasar</span> dengan PHP & Laravel,
                database MySQL, serta deployment end-to-end.
              </p>
              <p>
                Terbuka untuk proyek freelance sambil terus belajar — terutama di
                area web development dan desain antarmuka.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {["Informatika Student", "React / Next.js", "PHP / Laravel", "MySQL", "Git"].map((tag, i) => (
                <span
                  key={tag}
                  className="border px-3 py-1 text-[11px] font-bold"
                  style={{
                    borderColor: i === 0 ? "rgba(182,255,77,0.3)" : i < 3 ? "rgba(124,58,237,0.3)" : "rgba(245,242,234,0.12)",
                    color: i === 0 ? "#B6FF4D" : i < 3 ? "#7C3AED" : "#B8B2A7",
                    background: i === 0 ? "rgba(182,255,77,0.08)" : i < 3 ? "rgba(124,58,237,0.08)" : "rgba(245,242,234,0.04)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-3"
          >
            {STATS.map((s) => (
              <div key={s.label} className={`${s.cls} p-5 flex flex-col gap-0.5`}>
                <div className={`text-4xl font-black leading-none ${s.textVal}`}>{s.value}</div>
                <div className={`text-[12px] font-bold ${s.textLbl}`}>{s.label}</div>
              </div>
            ))}
            <div className="border border-white/10 bg-surface p-4">
              <p className="text-[11px] font-semibold text-muted leading-relaxed">
                Selalu belajar. Selalu membangun.
                Fokus saat ini: Next.js &amp; Laravel.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
