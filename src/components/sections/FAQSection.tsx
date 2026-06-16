"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-5 sm:px-6 lg:px-8 py-14 bg-surface section-rule">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block border border-ember/30 bg-ember/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-widest text-ember mb-4">
            FAQ
          </span>
          <h2 className="h2-display font-black text-main">
            Pertanyaan yang sering ditanya.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className={cn(
                "border bg-base transition-all duration-150",
                open === i ? "border-ember/30" : "border-white/8"
              )}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="text-[13px] font-black text-main">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 flex-shrink-0 transition-transform duration-200",
                    open === i ? "rotate-180 text-ember" : "text-muted"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-[13px] text-muted leading-relaxed border-t border-white/6">
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
