"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-5 sm:px-6 lg:px-8 py-24 bg-[#020617] border-t border-white/5 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#8B5CF6] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            FAQ
          </h2>
          <p className="text-base text-white/50 max-w-xl">
            Beberapa pertanyaan yang sering diajukan terkait proses pengerjaan, harga, dan teknis website.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-white/10">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left group"
                aria-expanded={open === i}
              >
                <span className={cn(
                  "text-lg sm:text-xl font-bold transition-colors duration-200",
                  open === i ? "text-[#06B6D4]" : "text-white group-hover:text-[#06B6D4]"
                )}>
                  {faq.question}
                </span>
                
                <span className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  open === i 
                    ? "border-[#06B6D4] bg-[#06B6D4]/10 text-[#06B6D4]" 
                    : "border-white/20 text-white/50 group-hover:border-[#06B6D4] group-hover:text-[#06B6D4]"
                )}>
                  {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 pr-12 text-base text-white/60 leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
