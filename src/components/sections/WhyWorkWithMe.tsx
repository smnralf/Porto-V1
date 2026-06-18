"use client";

import { motion } from "framer-motion";
import RevealClip from "@/components/ui/RevealClip";
import { Smartphone, Code2, Search, CloudUpload, Wrench, MessageSquare } from "lucide-react";

const reasons = [
  { icon: Smartphone,    title: "Responsive Design",    color: "#06B6D4", desc: "Optimized to look perfect on all screen sizes." },
  { icon: Code2,         title: "Clean Code",           color: "#7C3AED", desc: "Clean, readable, and easily maintainable codebase." },
  { icon: Search,        title: "Basic SEO",            color: "#B6FF4D", desc: "Basic SEO structure to help your website get found." },
  { icon: CloudUpload,   title: "Deploy Assistance",    color: "#06B6D4", desc: "Help with deployment process until your website is live." },
  { icon: Wrench,        title: "Optional Maintenance", color: "#7C3AED", desc: "Post-project maintenance service available optionally." },
  { icon: MessageSquare, title: "Clear Communication",  color: "#B6FF4D", desc: "Regular progress updates, no need to worry about being left in the dark." },
];

export default function WhyWorkWithMe() {
  return (
    <section id="why-me" className="px-5 sm:px-6 lg:px-8 py-14 bg-base section-rule">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block border border-white/12 bg-surface px-3 py-1 text-[0.65rem] font-black uppercase tracking-widest text-muted mb-4">
            Advantages
          </span>
          <h2 className="h2-display font-black text-main">Why choose me?</h2>
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
