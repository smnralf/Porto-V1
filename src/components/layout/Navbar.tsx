"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/projects", label: "Project" },
  { href: "/services", label: "Layanan" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-base/90 backdrop-blur-2xl border-b border-white/8"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-[68px] items-center justify-between">

          <Link href="/" className="group font-mono text-[18px] font-black text-main hover:text-ember transition-colors select-none">
            smnralf<span className="text-ember group-hover:text-main transition-colors">_</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-[0.875rem] tracking-[0.02em] font-semibold transition-colors py-1",
                    /* Underline: scaleX 0→1 from the left on hover, stays at 1 when active */
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px]",
                    "after:origin-left after:transition-transform after:duration-200",
                    active
                      ? "text-main after:bg-ember after:scale-x-100"
                      : "text-muted hover:text-main after:bg-white/30 after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href={`https://wa.me/6285176828884?text=${encodeURIComponent("Halo, saya ingin berdiskusi.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-ink bg-ember px-4 py-2 text-[13px] font-black text-ink btn-hard"
            >
              Hubungi Saya
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-main"
            aria-label={open ? "Tutup menu" : "Buka menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/8 bg-base/96 backdrop-blur-2xl">
          <div className="mx-auto max-w-6xl px-5 pt-3 pb-5 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-3 text-sm font-semibold transition-colors",
                    active ? "text-ember" : "text-muted hover:text-main"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={`https://wa.me/6285176828884?text=${encodeURIComponent("Halo, saya ingin berdiskusi.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 border-2 border-ink bg-ember px-4 py-3 text-sm font-black text-ink btn-hard"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
