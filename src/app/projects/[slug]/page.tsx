import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, GitBranch, ExternalLink, Code2, Rocket } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import Badge from "@/components/ui/Badge";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.shortDescription };
}

export default async function ProjectDetailPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const firstImage = project.screenshots?.[0] || null;
  const otherImages = project.screenshots?.slice(1) || [];

  return (
    <div className="min-h-screen bg-[#020617] pt-[58px]">
      
      {/* 1. Full-bleed Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[400px] flex flex-col justify-end">
        {/* Background Image with Gradient Overlay */}
        {firstImage ? (
          <div className="absolute inset-0 z-0">
            <Image 
              src={firstImage} 
              alt={project.title} 
              fill 
              className="object-cover object-top opacity-40" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#06B6D4]/10 to-[#8B5CF6]/10">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent" />
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 w-full px-5 sm:px-6 lg:px-8 pb-12 mx-auto max-w-7xl">
          <Link href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors mb-8 backdrop-blur-md bg-white/5 px-4 py-2 rounded-full border border-white/10 w-fit">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <Badge status={project.status}>{project.status}</Badge>
            <span className="text-[12px] font-bold text-[#06B6D4] border border-[#06B6D4]/30 bg-[#06B6D4]/10 px-3 py-1 rounded-full">{project.year}</span>
            <span className="text-[12px] font-bold text-[#8B5CF6] border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1 rounded-full">{project.category}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 max-w-4xl drop-shadow-2xl">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl font-medium">
            {project.shortDescription}
          </p>
        </div>
      </div>

      {/* 2. Main Content (Sticky Sidebar Layout) */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Sticky Sidebar Info */}
          <aside className="lg:w-1/3">
            <div className="sticky top-[100px] flex flex-col gap-8">
              
              {/* Action Buttons */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex flex-col gap-3">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06B6D4] px-6 py-4 text-sm font-bold text-[#020617] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                      <Rocket className="h-5 w-5" /> Visit Live Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-surface/50 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10 hover:border-white/20">
                      <GitBranch className="h-5 w-5" /> View Source Code
                    </a>
                  )}
                </div>
              )}

              {/* Tech Stack */}
              <div className="rounded-3xl border border-white/10 bg-surface/30 backdrop-blur-md p-6 sm:p-8">
                <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Code2 className="h-4 w-4" /> Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium text-white hover:bg-white/10 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Right Column: Editorial Content */}
          <article className="lg:w-2/3 prose prose-invert prose-lg max-w-none">
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Overview</h2>
              <p className="text-white/70 leading-relaxed text-lg">{project.longDescription}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="rounded-3xl border border-[#FF4D4D]/20 bg-[#FF4D4D]/5 p-8 backdrop-blur-md">
                <h3 className="text-xl font-bold text-[#FF4D4D] mb-4">The Challenge</h3>
                <p className="text-white/70 text-base leading-relaxed">{project.problem}</p>
              </div>
              <div className="rounded-3xl border border-[#10B981]/20 bg-[#10B981]/5 p-8 backdrop-blur-md">
                <h3 className="text-xl font-bold text-[#10B981] mb-4">The Solution</h3>
                <p className="text-white/70 text-base leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-8">Key Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none pl-0">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-white/80 bg-surface/30 p-4 rounded-2xl border border-white/5">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#06B6D4] flex-shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Result & Impact</h2>
              <p className="text-white/70 leading-relaxed text-lg p-6 border-l-4 border-[#8B5CF6] bg-[#8B5CF6]/5 rounded-r-2xl">
                {project.result}
              </p>
            </div>

            {/* Additional Screenshots Showcase */}
            {otherImages.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-black text-white mb-8">Gallery</h2>
                <div className="flex flex-col gap-8">
                  {otherImages.map((src, i) => (
                    <div key={i} className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative group">
                      <Image
                        src={src}
                        alt={`${project.title} screenshot ${i + 2}`}
                        width={1200}
                        height={800}
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#06B6D4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
