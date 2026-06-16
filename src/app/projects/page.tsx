import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";

export const metadata: Metadata = {
  title: "Project",
  description: "Kumpulan project web — case study, prototype, dan konsep produk digital.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-base pt-[58px]">
      <div className="border-b border-white/8 bg-surface px-5 sm:px-6 lg:px-8 py-14">
        <div className="mx-auto max-w-6xl">
          <span className="inline-block border border-velvet/30 bg-velvet/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-velvet mb-5">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-main tracking-tight leading-tight mb-3">
            Semua Project.
          </h1>
          <p className="text-[15px] text-muted max-w-xl">
            Case study, prototype, dan konsep — semua project yang pernah saya kerjakan dan pelajari.
          </p>
        </div>
      </div>

      <div className="px-5 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
