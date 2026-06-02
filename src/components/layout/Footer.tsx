import Link from "next/link";
import { MessageCircle, GitBranch } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-base">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <Link href="/" className="font-mono text-lg font-black text-main hover:text-ember transition-colors w-fit">
              smnralf<span className="text-ember">_</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Mahasiswa Informatika. Web developer yang fokus pada antarmuka bersih,
              sistem fungsional, dan komunikasi yang jelas.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">Halaman</h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/",         label: "Beranda" },
                { href: "/projects", label: "Project" },
                { href: "/services", label: "Layanan" },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="text-sm text-muted hover:text-ember transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">Kontak</h3>
            <div className="flex flex-col gap-2">
              <a href={`https://wa.me/6281234567890?text=${encodeURIComponent("Halo, saya ingin konsultasi.")}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-ember transition-colors w-fit">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-ember transition-colors w-fit">
                <GitBranch className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">© {new Date().getFullYear()} smnralf. All rights reserved.</p>
          <p className="text-xs text-muted">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
