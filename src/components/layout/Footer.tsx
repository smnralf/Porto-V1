import Link from "next/link";
import { MessageCircle, GitBranch, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-base" style={{ borderTop: "1px solid #FF4D00" }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 pt-20 pb-12">

        {/* Top row */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 mb-10">

          {/* Brand column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link href="/" className="font-mono text-xl font-black text-main hover:text-ember transition-colors w-fit">
              smnralf<span className="text-ember">_</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs italic" style={{ color: "#666" }}>
              Mahasiswa Informatika. Fokus pada antarmuka bersih, sistem fungsional, dan komunikasi yang jelas dengan klien.
            </p>
            {/* Status badge — more prominent */}
            <div className="flex items-center gap-2 w-fit">
              <span className="inline-flex items-center gap-1.5 border-2 border-ink bg-lime px-3 py-1.5 text-[0.7rem] font-black uppercase tracking-widest text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-ink animate-pulse" />
                Open for projects
              </span>
            </div>
            {/* Location + response time */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[12px] text-muted">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                Karimunjawa, Indonesia
              </div>
              <div className="flex items-center gap-2 text-[12px] text-muted">
                <Clock className="h-3.5 w-3.5 flex-shrink-0" />
                Respon WhatsApp biasanya dalam 1–3 jam
              </div>
            </div>
          </div>

          {/* Pages */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">Halaman</h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/",         label: "Beranda" },
                { href: "/projects", label: "Project" },
                { href: "/services", label: "Layanan" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-ember transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">Kontak</h3>
            <div className="flex flex-col gap-2.5">
              <a
                href={`https://wa.me/6285176828884?text=${encodeURIComponent("Halo, saya ingin berdiskusi.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-ember transition-colors w-fit"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="https://github.com/smnralf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-ember transition-colors w-fit"
              >
                <GitBranch className="h-4 w-4" />
                GitHub
              </a>
            </div>

            {/* Quick CTA */}
            <a
              href={`https://wa.me/6285176828884?text=${encodeURIComponent("Halo, saya ingin berdiskusi.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 border-2 border-ink bg-ember px-4 py-2 text-[12px] font-black text-ink btn-hard w-fit"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Mari Berdiskusi
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} smnralf. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
