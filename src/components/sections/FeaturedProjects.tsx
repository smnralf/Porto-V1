"use client";

import { motion } from "framer-motion";
import RevealClip from "@/components/ui/RevealClip";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects(3);

  return (
    <section id="projects" className="bg-base section-rule scroll-mt-16">
      <div className="border-b border-white/8 bg-surface px-5 sm:px-6 lg:px-8 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-block border border-velvet/30 bg-velvet/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-widest text-velvet">
              Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-main tracking-tight">
              Featured projects.
            </h2>
          </div>
          <Link href="/projects"
            className="hidden sm:inline-flex items-center gap-2 text-[12px] font-black text-main underline underline-offset-2 hover:text-ember transition-colors">
            View All <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div className="px-5 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <Link href="/projects"
              className="inline-flex items-center gap-2 border border-white/15 bg-surface px-5 py-2.5 text-[13px] font-black text-main">
              View All Projects <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
