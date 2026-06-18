"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Check, ArrowRight } from "lucide-react";
import { type Service } from "@/data/services";

/*
 * Tier visual rules (spec):
 *  - landing-page  → minimal, no fill, subtle border only
 *  - web-statis    → 2px orange border, rgba(255,77,0,0.05) bg tint (POPULER)
 *  - web-dinamis   → 2px purple border
 *  - custom        → 2px lime border
 *  ALL price text → white (#F5F2EA)
 */
type Tier = {
  cardClass:   string;
  checkColor: string;
  btnClass:    string;
  popularClass:string;
};

const TIER: Record<string, Tier> = {
  "landing-page": {
    cardClass:   "border border-white/10 bg-surface/50 backdrop-blur-md",
    checkColor:  "#94A3B8",
    btnClass:    "border border-white/10 bg-white/5 text-white hover:bg-white/10",
    popularClass:"bg-surface-alt text-white border border-white/10",
  },
  "web-statis-company-profile": {
    cardClass:   "border border-[#06B6D4]/50 bg-[#06B6D4]/5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]",
    checkColor:  "#06B6D4",
    btnClass:    "bg-[#06B6D4] text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95",
    popularClass:"bg-[#06B6D4] text-black shadow-[0_0_10px_rgba(6,182,212,0.3)]",
  },
  "web-dinamis-admin-panel": {
    cardClass:   "border border-[#8B5CF6]/50 bg-[#8B5CF6]/5 backdrop-blur-md",
    checkColor:  "#8B5CF6",
    btnClass:    "border border-[#8B5CF6] bg-[#8B5CF6]/10 text-[#8B5CF6] hover:bg-[#8B5CF6]/20",
    popularClass:"bg-[#8B5CF6] text-white",
  },
  "custom-web-app": {
    cardClass:   "border border-[#10B981]/50 bg-[#10B981]/5 backdrop-blur-md",
    checkColor:  "#10B981",
    btnClass:    "border border-[#10B981] bg-[#10B981]/10 text-[#10B981] hover:bg-[#10B981]/20",
    popularClass:"bg-[#10B981] text-[#020617]",
  },
};

const DEFAULT_TIER = TIER["landing-page"];

export default function ServiceCard({ service }: { service: Service }) {
  const tier = TIER[service.slug] ?? DEFAULT_TIER;

  return (
    <motion.article
      className={`relative flex flex-col h-full transition-all duration-300 rounded-xl hover:-translate-y-1 ${tier.cardClass}`}
    >
      {service.highlighted && (
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${tier.popularClass}`}
          >
            Popular
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Title + description */}
        <div>
          <h3 className="font-black text-main text-[15px] mb-1.5">{service.title}</h3>
          <p className="text-[12px] text-muted leading-relaxed">{service.shortDescription}</p>
        </div>

        {/* Price — always white */}
        <div>
          <div className="text-[22px] font-black leading-tight text-main">
            {service.price}
          </div>
          <div className="text-[11px] text-muted mt-0.5">Est. {service.estimatedTimeline}</div>
        </div>

        {/* Includes list */}
        <ul className="flex flex-col gap-1.5 flex-1">
          {service.includes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[12px] text-muted">
              <Check
                className="h-3.5 w-3.5 mt-0.5 flex-shrink-0"
                style={{ color: tier.checkColor }}
              />
              {item}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="flex flex-col gap-2 mt-auto pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <a
            href={`https://wa.me/6285176828884?text=${encodeURIComponent(service.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[13px] font-bold transition-all rounded-full ${tier.btnClass}`}
          >
            <MessageCircle className="h-4 w-4" />
            Order Now
          </a>
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-muted hover:text-main transition-colors py-0.5"
          >
            View details <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
