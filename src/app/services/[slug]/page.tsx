import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.title, description: service.shortDescription };
}

export default async function ServiceDetailPage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const card = "border border-white/8 bg-surface p-6";

  return (
    <div className="min-h-screen bg-base pt-[58px]">
      <div className="border-b border-white/8 bg-surface px-5 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-4xl">
          <Link href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ember transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Layanan
          </Link>
          <h1 className="text-4xl sm:text-5xl font-black text-main tracking-tight leading-tight mb-3">{service.title}</h1>
          <p className="text-[15px] text-muted leading-relaxed mb-4 max-w-2xl">{service.longDescription}</p>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-black text-ember">{service.price}</span>
            <span className="text-sm font-semibold text-muted border border-white/12 px-2 py-0.5">
              Est. {service.estimatedTimeline}
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2 flex flex-col gap-5">
              <section className={card}>
                <h2 className="font-black text-main mb-4 border-b border-white/8 pb-2">Untuk Siapa?</h2>
                <ul className="flex flex-col gap-2">
                  {service.forWho.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-muted">
                      <span className="mt-1.5 h-2 w-2 bg-velvet flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className={card}>
                <h2 className="font-black text-main mb-4 border-b border-white/8 pb-2">Yang Sudah Termasuk</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-muted">
                      <Check className="h-3.5 w-3.5 text-ember mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className={card}>
                <h2 className="font-black text-main mb-4 border-b border-white/8 pb-2">FAQ Layanan Ini</h2>
                <div className="flex flex-col gap-4">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="border-b border-white/5 last:border-0 pb-4 last:pb-0">
                      <p className="text-[13px] font-black text-main mb-1.5">{faq.question}</p>
                      <p className="text-[13px] text-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div>
              <div className="border border-white/8 bg-surface p-6 flex flex-col gap-5 sticky top-20">
                <div>
                  <div className="text-2xl font-black text-ember">{service.price}</div>
                  <div className="text-[11px] font-semibold text-muted mt-0.5">Est. {service.estimatedTimeline}</div>
                </div>

                <a
                  href={`https://wa.me/6285176828884?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-ink bg-ember px-4 py-3 text-[13px] font-black text-ink btn-hard w-full"
                >
                  <MessageCircle className="h-4 w-4" /> Konsultasi Sekarang
                </a>

                <p className="text-[11px] text-muted text-center">Gratis konsultasi · Tanpa komitmen</p>

                <div className="border-t border-white/8 pt-4">
                  <p className="text-[10px] font-black uppercase tracking-wider text-muted mb-2">Termasuk:</p>
                  <ul className="flex flex-col gap-1.5">
                    {service.includes.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] text-muted">
                        <Check className="h-3.5 w-3.5 text-ember mt-0.5 flex-shrink-0" />{item}
                      </li>
                    ))}
                    {service.includes.length > 4 && (
                      <li className="text-[11px] text-muted pl-5">+{service.includes.length - 4} lainnya</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/services"
              className="inline-flex items-center gap-2 border border-white/15 bg-surface px-6 py-3 text-sm font-semibold text-main hover:border-white/25 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Lihat Semua Layanan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
