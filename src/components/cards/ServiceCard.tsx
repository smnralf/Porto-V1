"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Check, ArrowRight } from "lucide-react";
import { type Service } from "@/data/services";

const SLUG_ACCENT: Record<string, { color: string; bg: string; border: string }> = {
  "landing-page":               { color: "#B8B2A7", bg: "rgba(184,178,167,0.1)", border: "rgba(184,178,167,0.2)" },
  "web-statis-company-profile": { color: "#FF4D00", bg: "rgba(255,77,0,0.1)",    border: "rgba(255,77,0,0.3)" },
  "web-dinamis-admin-panel":    { color: "#7C3AED", bg: "rgba(124,58,237,0.1)",  border: "rgba(124,58,237,0.3)" },
  "custom-web-app":             { color: "#B6FF4D", bg: "rgba(182,255,77,0.1)",  border: "rgba(182,255,77,0.3)" },
};

export default function ServiceCard({ service }: { service: Service }) {
  const acc = SLUG_ACCENT[service.slug] ?? SLUG_ACCENT["landing-page"];

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="relative flex flex-col border border-white/10 bg-surface hover:border-white/18 transition-colors h-full"
    >
      {/* Accent top bar */}
      <div className="h-[3px] w-full" style={{ background: acc.color }} />

      {service.highlighted && (
        <div className="absolute top-4 right-4 z-10">
          <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5"
            style={{ background: acc.color, color: acc.color === "#B6FF4D" ? "#111" : "#fff" }}>
            Populer
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <h3 className="font-black text-main text-[15px] mb-1">{service.title}</h3>
          <p className="text-[12px] text-muted leading-relaxed">{service.shortDescription}</p>
        </div>

        <div>
          <div className="text-[22px] font-black" style={{ color: acc.color }}>{service.price}</div>
          <div className="text-[11px] text-muted mt-0.5">Est. {service.estimatedTimeline}</div>
        </div>

        <ul className="flex flex-col gap-1.5 flex-1">
          {service.includes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[12px] text-muted">
              <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: acc.color }} />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2 mt-auto pt-3 border-t border-white/8">
          <a
            href={`https://wa.me/6281234567890?text=${encodeURIComponent(service.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border px-4 py-2.5 text-[13px] font-black transition-colors"
            style={{
              borderColor: acc.border,
              color: acc.color,
              background: acc.bg,
            }}
          >
            <MessageCircle className="h-4 w-4" />
            Pesan Sekarang
          </a>
          <Link href={`/services/${service.slug}`}
            className="inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-muted hover:text-main transition-colors py-0.5">
            Lihat detail <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
