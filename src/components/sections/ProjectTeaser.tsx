"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";

const COLORS: Record<string, string> = {
  "Web App":         "#FF4D00",
  "Company Profile": "#7C3AED",
  Dashboard:         "#B6FF4D",
};

export default function ProjectTeaser() {
  const projects = getFeaturedProjects(3);

  return (
    <section className="bg-surface border-b border-white/8">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="h-[2px] w-4 bg-white/30" />
            <p className="text-[0.65rem] font-black uppercase tracking-widest text-muted">Cuplikan project</p>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-1 text-[11px] font-black text-main underline underline-offset-2 hover:text-ember transition-colors">
            Semua <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-0.5 sm:grid sm:grid-cols-3 sm:overflow-visible">
          {projects.map((project, i) => {
            const color = COLORS[project.category] ?? "#F5F2EA";
            const isLight = color === "#B6FF4D" || color === "#F4F1E8";
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.65 + i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="flex-shrink-0 w-[220px] sm:w-auto snap-start shine-card"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block border border-white/10 bg-base hover:border-white/20 transition-all duration-100"
                >
                  {/* Thumbnail */}
                  <div className="h-24 relative overflow-hidden bg-surface-alt">
                    {project.screenshots && project.screenshots.length > 0 ? (
                      <img 
                        src={project.screenshots[0]} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="absolute inset-0" style={{ background: `${color}10` }}>
                        <div className="absolute inset-4 flex items-center gap-3">
                          <div className="h-8 w-8 flex-shrink-0" style={{ background: color, opacity: 0.9 }} />
                          <div className="flex flex-col gap-2 flex-1">
                            <div className="h-2 w-3/4" style={{ background: `${color}40` }} />
                            <div className="h-1.5 w-1/2" style={{ background: `${color}25` }} />
                            <div className="flex gap-1.5 mt-1">
                              <div className="h-4 flex-1 border border-white/10" style={{ background: `${color}18` }} />
                              <div className="h-4 w-8" style={{ background: `${color}12` }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-1.5 right-1.5 shadow-md">
                      <span
                        className="text-[9px] font-black px-1.5 py-0.5 uppercase tracking-wide shadow-hard-sm"
                        style={{ background: color, color: isLight ? "#111" : "#fff" }}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-3 border-t border-white/8">
                    <div className="text-[12px] font-black text-main mb-1.5 leading-tight">{project.title}</div>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 2).map((tech) => (
                        <span key={tech} className="text-[10px] font-semibold text-muted border border-white/12 px-1.5 py-0.5 bg-surface-alt">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
