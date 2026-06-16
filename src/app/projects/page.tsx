import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";

export const metadata: Metadata = {
  title: "Project",
  description: "Kumpulan project web — case study, prototype, dan konsep produk digital.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#020617] pt-[58px]">
      {/* Cinematic Header */}
      <div className="relative border-b border-white/5 bg-surface/30 px-5 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-[#06B6D4] opacity-10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-[#8B5CF6] opacity-10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-6xl">
          <span className="inline-block rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#8B5CF6] mb-5 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            Portfolio
          </span>
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
            Semua Project.
          </h1>
          <p className="text-lg text-white/70 max-w-2xl font-medium leading-relaxed">
            Case study, prototype, dan konsep — eksperimen serta karya nyata yang mendemonstrasikan proses problem-solving melalui kode.
          </p>
        </div>
      </div>

      {/* Asymmetrical Gallery */}
      <div className="px-5 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => {
              // Asymmetrical logic: 
              // Make every 4th item (0, 3, 6) span 2 columns on large screens to break monotony.
              const isLarge = i % 4 === 0 || i % 4 === 3;
              
              return (
                <div 
                  key={project.slug} 
                  className={`flex flex-col ${isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1"}`}
                >
                  <ProjectCard project={project} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
