import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, GitBranch, ExternalLink } from "lucide-react";
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

  const card = "border border-white/8 bg-surface p-6";

  return (
    <div className="min-h-screen bg-base pt-[58px]">
      <div className="border-b border-white/8 bg-surface px-5 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-4xl">
          <Link href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ember transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge status={project.status}>{project.status}</Badge>
            <span className="text-[11px] font-bold text-muted border border-white/12 px-2 py-0.5">{project.year}</span>
            <span className="text-[11px] font-bold text-muted border border-white/12 px-2 py-0.5">{project.category}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-main tracking-tight leading-tight mb-3">{project.title}</h1>
          <p className="text-[15px] text-muted leading-relaxed max-w-2xl">{project.shortDescription}</p>

          {(project.liveUrl || project.githubUrl) && (
            <div className="flex gap-3 mt-6">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-ink bg-ember px-4 py-2 text-sm font-black text-ink btn-hard">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/15 bg-surface-alt px-4 py-2 text-sm font-semibold text-main hover:border-white/25 transition-colors">
                  <GitBranch className="h-4 w-4" /> GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="px-5 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-4xl">
          {/* Screenshot placeholder */}
          <div className="border border-white/8 h-56 sm:h-72 mb-8 flex items-center justify-center relative overflow-hidden bg-surface">
            <div className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: "linear-gradient(rgba(245,242,234,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(245,242,234,0.5) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
            <span className="text-[80px] font-black text-white/5 select-none relative z-10">{project.title.charAt(0)}</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <section className={card}>
              <h2 className="text-base font-black text-main mb-3 border-b border-white/8 pb-2">Overview</h2>
              <p className="text-[14px] text-muted leading-relaxed">{project.longDescription}</p>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <section className={card}>
                <h2 className="text-base font-black text-main mb-3 border-b border-white/8 pb-2">Problem</h2>
                <p className="text-[13px] text-muted leading-relaxed">
                  Banyak pengguna kesulitan mengingat jadwal dan dosis obat secara konsisten, yang berdampak pada efektivitas pengobatan.
                </p>
              </section>
              <section className={card}>
                <h2 className="text-base font-black text-main mb-3 border-b border-white/8 pb-2">Solution</h2>
                <p className="text-[13px] text-muted leading-relaxed">
                  Membangun aplikasi web berbasis browser yang ringan dan mudah digunakan, dengan fitur pengingat jadwal yang dapat diakses tanpa instalasi.
                </p>
              </section>
            </div>

            <section className={card}>
              <h2 className="text-base font-black text-main mb-4 border-b border-white/8 pb-2">Fitur Utama</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-[13px] text-muted">
                    <span className="mt-1.5 h-2 w-2 bg-ember flex-shrink-0" />{feature}
                  </li>
                ))}
              </ul>
            </section>

            <section className={card}>
              <h2 className="text-base font-black text-main mb-4 border-b border-white/8 pb-2">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="border border-white/12 bg-surface-alt px-3 py-1.5 text-[12px] font-bold text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className={card}>
              <h2 className="text-base font-black text-main mb-3 border-b border-white/8 pb-2">Hasil</h2>
              <p className="text-[14px] text-muted leading-relaxed">
                Project ini berhasil mendemonstrasikan kemampuan membangun aplikasi web fungsional dengan fokus pada user experience yang sederhana namun efektif.
              </p>
            </section>
          </div>

          <div className="mt-8">
            <Link href="/projects"
              className="inline-flex items-center gap-2 border border-white/15 bg-surface px-6 py-3 text-sm font-semibold text-main hover:border-white/25 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Kembali ke Semua Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
