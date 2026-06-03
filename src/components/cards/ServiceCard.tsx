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
  cardBorder: string;
  cardBg:     string;
  checkColor: string;
  btnBorder:  string;
  btnBg:      string;
  btnText:    string;
  popularBg:  string;
  popularText:string;
};

const TIER: Record<string, Tier> = {
  "landing-page": {
    cardBorder:  "1px solid #2a2a2a",
    cardBg:      "#161616",
    checkColor:  "#B8B2A7",
    btnBorder:   "rgba(245,242,234,0.2)",
    btnBg:       "transparent",
    btnText:     "#B8B2A7",
    popularBg:   "#F5F2EA",
    popularText: "#111",
  },
  "web-statis-company-profile": {
    cardBorder:  "2px solid #FF4D00",
    cardBg:      "rgba(255,77,0,0.05)",
    checkColor:  "#FF4D00",
    btnBorder:   "#FF4D00",
    btnBg:       "rgba(255,77,0,0.08)",
    btnText:     "#FF4D00",
    popularBg:   "#FF4D00",
    popularText: "#111",
  },
  "web-dinamis-admin-panel": {
    cardBorder:  "2px solid #7C3AED",
    cardBg:      "rgba(124,58,237,0.05)",
    checkColor:  "#7C3AED",
    btnBorder:   "#7C3AED",
    btnBg:       "rgba(124,58,237,0.1)",
    btnText:     "#7C3AED",
    popularBg:   "#7C3AED",
    popularText: "#fff",
  },
  "custom-web-app": {
    cardBorder:  "2px solid #84cc16",
    cardBg:      "rgba(132,204,22,0.04)",
    checkColor:  "#84cc16",
    btnBorder:   "#84cc16",
    btnBg:       "rgba(132,204,22,0.08)",
    btnText:     "#84cc16",
    popularBg:   "#84cc16",
    popularText: "#111",
  },
};

const DEFAULT_TIER = TIER["landing-page"];

export default function ServiceCard({ service }: { service: Service }) {
  const tier = TIER[service.slug] ?? DEFAULT_TIER;

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.18 }}
      className="relative flex flex-col h-full transition-colors duration-200"
      style={{ background: tier.cardBg, border: tier.cardBorder }}
    >
      {service.highlighted && (
        <div className="absolute top-4 right-4 z-10">
          <span
            className="text-[0.6rem] font-black uppercase tracking-widest px-2 py-0.5"
            style={{ background: tier.popularBg, color: tier.popularText }}
          >
            Populer
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
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[13px] font-black transition-all"
            style={{
              border: `1px solid ${tier.btnBorder}`,
              color: tier.btnText,
              background: tier.btnBg,
            }}
          >
            <MessageCircle className="h-4 w-4" />
            Pesan Sekarang
          </a>
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-muted hover:text-main transition-colors py-0.5"
          >
            Lihat detail <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
