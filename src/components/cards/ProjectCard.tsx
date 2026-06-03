"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, BookOpen } from "lucide-react";
import { type Project } from "@/data/projects";

const THUMB: Record<string, { bg: string; accent: string; pattern: "grid" | "list" | "dashboard" }> = {
  "Web App":         { bg: "#0F0805", accent: "#FF4D00", pattern: "list"      },
  "Company Profile": { bg: "#0B0916", accent: "#7C3AED", pattern: "grid"      },
  "Dashboard":       { bg: "#050E18", accent: "#2563EB", pattern: "dashboard" },
};

const STATUS_STYLE: Record<string, { bg: string; text: string }> = {
  "Case Study": { bg: "#FF4D00", text: "#111" },
  "Prototype":  { bg: "#7C3AED", text: "#fff" },
  "Demo":       { bg: "#F4F1E8", text: "#111" },
  "Concept":    { bg: "#222",    text: "#B8B2A7" },
  "Live":       { bg: "#B6FF4D", text: "#111" },
};

function MockUI({ accent, pattern }: { accent: string; pattern: "grid" | "list" | "dashboard" }) {
  if (pattern === "dashboard") {
    return (
      <div className="absolute inset-0 p-3.5 pt-2 flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
          <div className="h-1 w-20 rounded-sm" style={{ background: `${accent}30` }} />
        </div>
        <div className="flex gap-1.5">
          {[0.7, 1, 0.5].map((op, j) => (
            <div key={j} className="flex-1 border p-1.5 flex flex-col gap-0.5"
              style={{ borderColor: `${accent}25`, background: `${accent}0${Math.round(op * 8).toString(16)}` }}>
              <div className="h-1 w-full" style={{ background: `${accent}35` }} />
              <div className="h-2.5 w-2/3" style={{ background: `${accent}50` }} />
            </div>
          ))}
        </div>
        <div className="flex-1 border flex items-end gap-0.5 px-1.5 pb-1.5"
          style={{ borderColor: `${accent}20` }}>
          {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.55].map((h, j) => (
            <div key={j} className="flex-1"
              style={{ height: `${h * 100}%`, background: `${accent}${Math.round(h * 50).toString(16).padStart(2, "0")}` }} />
          ))}
        </div>
      </div>
    );
  }

  if (pattern === "list") {
    return (
      <div className="absolute inset-0 p-3.5 pt-2 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="h-1.5 w-16" style={{ background: `${accent}40` }} />
          <div className="h-4 w-8 border" style={{ borderColor: `${accent}30`, background: `${accent}12` }} />
        </div>
        {[1, 0.7, 0.85, 0.6].map((op, j) => (
          <div key={j} className="flex items-center gap-2 border-b py-0.5"
            style={{ borderColor: `${accent}10`, opacity: op }}>
            <div className="h-2 w-2 flex-shrink-0" style={{ background: `${accent}60` }} />
            <div className="h-1.5 flex-1" style={{ background: `${accent}25` }} />
            <div className="h-3 w-6 border" style={{ borderColor: `${accent}25`, background: `${accent}0F` }} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 p-3.5 pt-2 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2" style={{ background: accent }} />
        <div className="h-1 w-12" style={{ background: `${accent}30` }} />
        <div className="flex-1" />
        <div className="flex gap-1">
          {[1, 1, 1].map((_, j) => (
            <div key={j} className="h-1 w-7" style={{ background: `${accent}20` }} />
          ))}
        </div>
      </div>
      <div className="border p-2 flex flex-col gap-1"
        style={{ borderColor: `${accent}20`, background: `${accent}08` }}>
        <div className="h-2 w-2/3" style={{ background: `${accent}35` }} />
        <div className="h-1 w-1/2" style={{ background: `${accent}20` }} />
        <div className="h-4 w-14 mt-0.5 border" style={{ borderColor: accent, background: `${accent}15` }} />
      </div>
      <div className="flex gap-1.5 flex-1">
        {[0.9, 0.6, 0.75].map((op, j) => (
          <div key={j} className="flex-1 border"
            style={{ borderColor: `${accent}15`, background: `${accent}0${Math.round(op * 8).toString(16)}`, opacity: op }} />
        ))}
      </div>
    </div>
  );
}

function Thumbnail({ project }: { project: Project }) {
  const t = THUMB[project.category] ?? { bg: "#111", accent: "#FF4D00", pattern: "list" as const };
  const sc = STATUS_STYLE[project.status] ?? STATUS_STYLE["Concept"];

  return (
    /* Thumbnail height: 220px per spec */
    <div className="relative overflow-hidden shine-card flex-shrink-0" style={{ height: 220, background: t.bg }}>
      {/* Status badge — 0.6rem tracking-widest, top-left, no radius */}
      <div className="absolute top-3 left-3 z-10">
        <span
          className="text-[0.6rem] font-black uppercase tracking-widest px-2 py-0.5"
          style={{ background: sc.bg, color: sc.text }}
        >
          {project.status}
        </span>
      </div>
      <div
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[90px] font-black leading-none select-none pointer-events-none"
        style={{ color: `${t.accent}07` }}
      >
        {project.title.charAt(0)}
      </div>
      <MockUI accent={t.accent} pattern={t.pattern} />
      <div
        className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${t.bg}, transparent)` }}
      />
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group flex flex-col h-full card-depth-1 transition-colors duration-200"
    >
      {/* Thumbnail */}
      <div className="overflow-hidden relative">
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.28, ease: "easeOut" }}>
          <Thumbnail project={project} />
        </motion.div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-250"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.028) 3px, rgba(255,255,255,0.028) 4px)",
          }}
        />
      </div>

      <div className="flex flex-col flex-1 p-5 gap-4" style={{ borderTop: "1px solid #2a2a2a" }}>
        <div>
          <div className="text-[0.65rem] font-black uppercase tracking-widest text-muted mb-1.5">
            {project.category} · {project.year}
          </div>
          <h3 className="text-[16px] font-black text-main mb-2 leading-snug">{project.title}</h3>
          <p className="text-[13px] text-muted leading-[1.7] line-clamp-2">{project.shortDescription}</p>
        </div>

        {/* Tech tags — outlined only, no fill */}
        <div className="flex flex-wrap gap-1.5 transition-transform duration-200 ease-out group-hover:translate-x-1">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-muted px-2 py-0.5"
              style={{ border: "1px solid #333", background: "transparent" }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs text-muted/50">+{project.techStack.length - 4}</span>
          )}
        </div>

        {/* Case Study button: full-width, border-top only, flat */}
        <div className="mt-auto flex gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex flex-1 items-center justify-center gap-1.5 px-3 py-2.5 text-[12px] font-black text-ember hover:text-main hover:bg-ember/10 transition-colors"
            style={{ borderTop: "1px solid #2a2a2a" }}
          >
            <BookOpen className="h-3.5 w-3.5" />
            Case Study
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 px-3 py-2.5 text-[12px] font-semibold text-muted hover:text-main transition-colors"
              style={{ borderTop: "1px solid #2a2a2a" }}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
