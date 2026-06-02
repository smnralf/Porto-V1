"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, BookOpen } from "lucide-react";
import { type Project } from "@/data/projects";

const THUMB: Record<string, { bg: string; accent: string }> = {
  "Web App":         { bg: "#180D04", accent: "#FF4D00" },
  "Company Profile": { bg: "#100D1C", accent: "#7C3AED" },
  Dashboard:         { bg: "#0A1018", accent: "#2563EB" },
};

const STATUS_COLOR: Record<string, { bg: string; text: string }> = {
  "Case Study": { bg: "#FF4D00", text: "#111" },
  Prototype:    { bg: "#7C3AED", text: "#fff" },
  Demo:         { bg: "#F4F1E8", text: "#111" },
  Concept:      { bg: "#333",    text: "#B8B2A7" },
  Live:         { bg: "#B6FF4D", text: "#111" },
};

function Thumbnail({ project }: { project: Project }) {
  const t = THUMB[project.category] ?? { bg: "#1A1A1A", accent: "#FF4D00" };
  const sc = STATUS_COLOR[project.status] ?? STATUS_COLOR["Concept"];

  return (
    <div className="relative h-44 overflow-hidden shine-card flex-shrink-0" style={{ background: t.bg }}>
      {/* Status badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5"
          style={{ background: sc.bg, color: sc.text }}>
          {project.status}
        </span>
      </div>
      {/* Large initial */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[80px] font-black leading-none select-none"
        style={{ color: `${t.accent}0C` }}>
        {project.title.charAt(0)}
      </div>
      {/* Mock UI */}
      <div className="absolute inset-0 p-4 flex flex-col gap-2 pt-11">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="h-2 w-2" style={{ background: t.accent }} />
          <div className="h-1.5 w-16 rounded-sm" style={{ background: `${t.accent}20` }} />
          <div className="flex-1" />
          <div className="h-1.5 w-10" style={{ background: `${t.accent}15` }} />
        </div>
        <div className="h-2 w-2/3 rounded-sm" style={{ background: `${t.accent}25` }} />
        <div className="h-1.5 w-1/2" style={{ background: `${t.accent}15` }} />
        <div className="flex gap-2 mt-1">
          {[0.9, 1, 0.7].map((op, j) => (
            <div key={j} className="flex-1 border" style={{
              height: 28,
              background: `${t.accent}${Math.round(op * 18).toString(16).padStart(2, "0")}`,
              borderColor: `${t.accent}18`,
            }} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-10"
        style={{ background: `linear-gradient(to top, ${t.bg}, transparent)` }} />
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col h-full border border-white/10 bg-surface hover:border-white/20 transition-colors duration-200"
    >
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3, ease: "easeOut" }} className="overflow-hidden">
        <Thumbnail project={project} />
      </motion.div>

      <div className="flex flex-col flex-1 p-5 gap-4 border-t border-white/8">
        <div>
          <div className="text-[10px] font-black uppercase tracking-[0.14em] text-muted mb-1">
            {project.category} · {project.year}
          </div>
          <h3 className="text-[15px] font-black text-main mb-1.5">{project.title}</h3>
          <p className="text-[13px] text-muted leading-relaxed line-clamp-2">{project.shortDescription}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="border border-white/10 bg-surface-alt px-2 py-0.5 text-[11px] font-medium text-muted">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 text-[11px] text-muted">+{project.techStack.length - 4}</span>
          )}
        </div>

        <div className="flex gap-2 mt-auto">
          <Link href={`/projects/${project.slug}`}
            className="inline-flex flex-1 items-center justify-center gap-1.5 border border-ember/30 bg-ember/8 px-3 py-2 text-[12px] font-black text-ember hover:bg-ember/15 transition-colors">
            <BookOpen className="h-3.5 w-3.5" />
            Case Study
          </Link>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 border border-white/10 bg-surface-alt px-3 py-2 text-[12px] font-medium text-muted hover:text-main transition-colors">
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
