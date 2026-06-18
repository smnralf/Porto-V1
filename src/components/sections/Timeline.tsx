"use client";

import { motion } from "framer-motion";
import RevealClip from "@/components/ui/RevealClip";

const EVENTS = [
  {
    year: "2022",
    title: "Started Learning Computer Science",
    desc: "Programming basics, logic, and algorithms.",
    detail: "Wrote my first Python and C code — loops, conditions, functions. Started understanding how computers think.",
    color: "#06B6D4",
  },
  {
    year: "2023",
    title: "PHP, MySQL & First Web App",
    desc: "Built my first web apps using native PHP, JSP, and MySQL.",
    detail: "Created 'Sehatin' (medicine reminder) and a Java JSP CRUD App — my first database, first POST form, and first SQL queries.",
    color: "#8B5CF6",
  },
  {
    year: "2024",
    title: "Exploring Backend & Golang",
    desc: "Began deep-diving into Go to build fast and scalable backends.",
    detail: "Understood the Go ecosystem, goroutines, and efficient architectures for handling server-side processes.",
    color: "#06B6D4",
  },
  {
    year: "2025",
    title: "Building Portfolio",
    desc: "Gathering case studies, prototypes, and digital app concepts.",
    detail: "Reorganized past projects and documented the working process in a single, modern professional portfolio website.",
    color: "#8B5CF6",
  },
  {
    year: "2026",
    title: "Open for Projects",
    desc: "Started accepting professional projects and web development collaborations.",
    detail: "Ready to work on end-to-end web applications. Focusing on technical solutions, great client communication, and delivering quality products.",
    color: "#10B981",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="px-5 sm:px-6 lg:px-8 py-24 bg-surface section-rule scroll-mt-16 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <RevealClip inline>
            <span className="inline-block rounded-full border border-velvet/30 bg-velvet/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-velvet mb-4">
              Journey
            </span>
          </RevealClip>
          <RevealClip delay={0.08}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-main mt-4">
              How I got here.
            </h2>
          </RevealClip>
        </motion.div>

        <div className="relative">
          {/* Centered Vertical timeline line for Desktop, Left for Mobile */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px]" style={{ background: "rgba(255,255,255,0.05)" }} />

          <div className="flex flex-col gap-12 md:gap-0">
            {EVENTS.map((ev, i) => {
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 50 }}
                  className={`relative flex items-center w-full ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* The dot positioned exactly on the line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div
                      className="h-4 w-4 md:h-6 md:w-6 rounded-full border-4 border-base"
                      style={{ background: ev.color, boxShadow: `0 0 15px ${ev.color}60` }}
                    />
                  </div>

                  {/* The content card */}
                  <div className={`w-full pl-16 md:pl-0 md:w-5/12 ${isEven ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"}`}>
                    <div className="rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-md p-6 sm:p-8 hover:border-white/20 hover:bg-surface transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.3)] group hover:-translate-y-1">
                      
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex-shrink-0"
                          style={{
                            background: `${ev.color}15`,
                            color: ev.color,
                            border: `1px solid ${ev.color}30`
                          }}
                        >
                          {ev.year}
                        </span>
                        <h3 className="font-black text-white text-lg leading-snug group-hover:text-ember transition-colors">
                          {ev.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-white/80 leading-relaxed mb-3">
                        {ev.desc}
                      </p>
                      
                      <div className="h-[1px] w-full bg-white/5 my-3" />
                      
                      <p className="text-[13px] text-white/50 leading-relaxed">
                        {ev.detail}
                      </p>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
