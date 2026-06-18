"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="px-5 sm:px-6 lg:px-8 py-32 bg-[#020617] border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[1.05] tracking-tighter">
            Let's create <br className="hidden sm:block" />
            <span className="text-[#06B6D4]">something real.</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/50 max-w-3xl font-light leading-relaxed">
            Need a landing page, company profile, or admin panel? 
            Or just want to discuss tech and collaborate? My doors are always open.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/services"
              className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[15px] font-bold text-black transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              View Services
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            
            <a
              href={`https://wa.me/6285176828884?text=${encodeURIComponent("Hello Soma, I want to talk about...")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-[15px] font-bold text-white backdrop-blur-md transition-colors hover:bg-white/10 hover:border-white/20"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Chat WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
