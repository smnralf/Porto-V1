import type { Metadata } from "next";
import { ArrowRight, Code2, BrainCircuit, GraduationCap, MapPin, Download } from "lucide-react";
import RevealClip from "@/components/ui/RevealClip";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about my career journey, coding philosophy, and explorations in Software Engineering & AI.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020617] pt-[120px] pb-24">
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#06B6D4] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Photo */}
        <div className="mb-16 flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center md:items-start">
          <div className="flex-1 text-center md:text-left">
            <RevealClip inline>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80 mb-6 shadow-xl">
                <span className="h-2 w-2 rounded-full bg-[#06B6D4] animate-pulse" />
                About Me
              </span>
            </RevealClip>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
              More than just <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]">writing code.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-medium max-w-2xl mx-auto md:mx-0">
              I believe that software engineering is not just about making programs run, but about designing systems that are efficient, highly scalable, and intelligent.
            </p>
          </div>

          {/* Profile Photo */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 shrink-0 rounded-full md:rounded-[3rem] border border-white/10 bg-surface/30 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <img src="/images/profile.jpg" alt="Profile" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-3xl border border-white/10 bg-surface/30 backdrop-blur-md p-8 group transition-colors hover:bg-surface/50 hover:border-white/20">
            <div className="h-12 w-12 rounded-xl bg-[#06B6D4]/10 flex items-center justify-center mb-6">
              <Code2 className="h-6 w-6 text-[#06B6D4]" />
            </div>
            <h3 className="text-2xl font-black text-white mb-4">Software Engineering</h3>
            <p className="text-white/70 leading-relaxed">
              Large-scale system architecture requires a strong foundation. My current focus is mastering the Go (Golang) and Node.js ecosystems to handle high concurrency and backend performance.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-surface/30 backdrop-blur-md p-8 group transition-colors hover:bg-surface/50 hover:border-white/20">
            <div className="h-12 w-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center mb-6">
              <BrainCircuit className="h-6 w-6 text-[#8B5CF6]" />
            </div>
            <h3 className="text-2xl font-black text-white mb-4">Artificial Intelligence</h3>
            <p className="text-white/70 leading-relaxed">
              AI is no longer the future, it is the industry standard today. I am actively exploring the integration of AI Agents, RAG (Retrieval-Augmented Generation), and LLMs using Python and PyTorch.
            </p>
          </div>
        </div>

        {/* Detailed Background */}
        <div className="rounded-3xl border border-white/10 bg-surface/30 backdrop-blur-md overflow-hidden mb-16">
          <div className="p-8 sm:p-10 border-b border-white/10">
            <h2 className="text-3xl font-black text-white mb-6">My Journey</h2>
            <div className="prose prose-invert prose-lg max-w-none text-white/70">
              <p>
                As an Informatics student, I have always been challenged to look behind the scenes of every modern application. Initially, I focused on Frontend development using the React ecosystem. However, as time progressed, my interests expanded into data architecture and system design.
              </p>
              <p>
                The hardest challenge in building software is not the programming language itself, but rather <strong>how to design business logic flows that are resilient to change</strong>. That is why I am not a fanatic of any single language—whether it's Go, Python, or TypeScript—they are all just tools to solve problems.
              </p>
            </div>
          </div>
          <div className="p-8 sm:p-10 bg-base/50 flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <GraduationCap className="h-5 w-5 text-white/70" />
              </div>
              <div>
                <h4 className="text-white font-bold">Informatics Student</h4>
                <p className="text-sm text-white/50 flex items-center gap-1 mt-1">
                  <MapPin className="h-3 w-3" /> Karimunjawa, Indonesia
                </p>
              </div>
            </div>
            {/* Optional Download CV Button */}
            <a 
              href="/resume.pdf"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <Download className="h-4 w-4" /> Download Resume (PDF)
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white/60 mb-6">Interested in collaborating or discussing AI & Tech?</p>
          <a
            href={`https://wa.me/6285176828884?text=${encodeURIComponent("Hello, I would like to discuss a project.")}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06B6D4] px-8 py-4 text-sm font-bold text-[#020617] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Let's Talk <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
