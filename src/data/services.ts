import { WHATSAPP_NUMBER } from "@/lib/utils";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  price: string;
  priceNote?: string;
  estimatedTimeline: string;
  includes: string[];
  forWho: string[];
  faqs: ServiceFAQ[];
  whatsappMessage: string;
  highlighted?: boolean;
}

export const CONTACT_WHATSAPP = WHATSAPP_NUMBER;

export const services: Service[] = [
  {
    slug: "landing-page",
    title: "Landing Page",
    shortDescription:
      "Untuk halaman promosi sederhana, produk, event, campaign, atau personal link.",
    longDescription:
      "Landing page adalah solusi cepat dan efektif untuk mempromosikan produk, event, atau campaign bisnis Anda. Dengan desain yang menarik dan CTA yang jelas, landing page membantu mengkonversi pengunjung menjadi pelanggan.",
    price: "Mulai dari Rp500.000",
    estimatedTimeline: "3–5 hari kerja",
    includes: [
      "1 halaman landing page",
      "Responsive mobile",
      "CTA WhatsApp",
      "Section basic",
      "Revisi 1x",
      "Deploy basic",
    ],
    forWho: [
      "UMKM yang ingin mempromosikan produk",
      "Event organizer untuk halaman event",
      "Personal brand yang butuh link-in-bio premium",
      "Campaign marketing yang butuh landing page cepat",
    ],
    faqs: [
      {
        question: "Apakah sudah termasuk domain dan hosting?",
        answer:
          "Belum termasuk. Harga domain dan hosting akan disepakati terpisah sesuai kebutuhan. Saya bisa membantu proses setup-nya.",
      },
      {
        question: "Berapa lama proses pengerjaannya?",
        answer:
          "Estimasi 3–5 hari kerja tergantung kelengkapan konten yang disiapkan klien.",
      },
      {
        question: "Apakah bisa request desain dari nol?",
        answer:
          "Bisa. Saya akan menyesuaikan desain dengan brand dan preferensi Anda.",
      },
    ],
    whatsappMessage:
      "Halo, saya tertarik dengan layanan Landing Page. Boleh info lebih lanjut?",
  },
  {
    slug: "web-statis-company-profile",
    title: "Web Statis / Company Profile",
    shortDescription:
      "Untuk company profile, portfolio bisnis, dan website informasi 3–5 halaman.",
    longDescription:
      "Website company profile profesional untuk membangun kredibilitas bisnis Anda secara online. Tampilkan profil, layanan, dan kontak bisnis dalam satu website yang elegan dan informatif.",
    price: "Mulai dari Rp3.500.000",
    estimatedTimeline: "7–14 hari kerja",
    includes: [
      "3–5 halaman",
      "Desain modern",
      "Responsive mobile",
      "Basic SEO",
      "Form kontak / WhatsApp integration",
      "Revisi 2x",
      "Deploy",
    ],
    forWho: [
      "Bisnis yang ingin tampil profesional secara online",
      "UMKM yang membutuhkan company profile digital",
      "Freelancer atau konsultan yang butuh portfolio online",
      "Organisasi yang butuh website informasi",
    ],
    faqs: [
      {
        question: "Apakah sudah termasuk domain dan hosting?",
        answer:
          "Belum termasuk. Biaya domain dan hosting akan dibahas terpisah sesuai kebutuhan.",
      },
      {
        question: "Apa yang dimaksud basic SEO?",
        answer:
          "Meliputi meta title, meta description, heading structure, dan sitemap dasar untuk membantu website ditemukan di mesin pencari.",
      },
      {
        question: "Bagaimana jika saya butuh lebih dari 5 halaman?",
        answer:
          "Bisa dikustomisasi. Harga akan menyesuaikan jumlah halaman tambahan.",
      },
    ],
    whatsappMessage:
      "Halo, saya tertarik dengan layanan Web Statis / Company Profile. Boleh info lebih lanjut?",
    highlighted: true,
  },
  {
    slug: "web-dinamis-admin-panel",
    title: "Web Dinamis / Admin Panel",
    shortDescription:
      "Untuk website dengan login, dashboard, database, dan pengelolaan data.",
    longDescription:
      "Website dinamis lengkap dengan sistem manajemen konten, panel admin, dan database. Cocok untuk bisnis yang membutuhkan pengelolaan data secara mandiri tanpa membutuhkan developer setiap saat.",
    price: "Mulai dari Rp6.500.000",
    estimatedTimeline: "14–30 hari kerja",
    includes: [
      "Login admin",
      "Dashboard",
      "CRUD data",
      "Database",
      "Upload gambar/file",
      "Responsive layout",
      "Revisi 3x",
      "Deploy",
    ],
    forWho: [
      "Bisnis yang butuh pengelolaan data mandiri",
      "Toko online sederhana dengan manajemen produk",
      "Sekolah atau instansi yang butuh sistem informasi",
      "Startup yang membutuhkan MVP cepat",
    ],
    faqs: [
      {
        question: "Teknologi apa yang digunakan?",
        answer:
          "Tergantung kebutuhan. Bisa menggunakan Next.js, Laravel, PHP Native, atau kombinasi sesuai requirement.",
      },
      {
        question: "Apakah bisa integrasi dengan payment gateway?",
        answer:
          "Bisa, namun akan ada biaya tambahan tergantung kompleksitas integrasi.",
      },
      {
        question: "Berapa lama proses pengerjaan?",
        answer:
          "Estimasi 14–30 hari kerja tergantung kompleksitas fitur yang dibutuhkan.",
      },
    ],
    whatsappMessage:
      "Halo, saya tertarik dengan layanan Web Dinamis / Admin Panel. Boleh info lebih lanjut?",
  },
  {
    slug: "custom-web-app",
    title: "Custom Web App",
    shortDescription:
      "Untuk sistem custom sesuai kebutuhan bisnis atau workflow tertentu.",
    longDescription:
      "Solusi pengembangan web custom untuk kebutuhan bisnis spesifik yang tidak terpenuhi oleh solusi standar. Dari sistem manajemen, integrasi API pihak ketiga, hingga aplikasi web kompleks — semua bisa dikustomisasi sesuai kebutuhan.",
    price: "By Request",
    estimatedTimeline: "Menyesuaikan scope",
    includes: [
      "Fitur custom",
      "Role user/admin",
      "Integrasi API",
      "Database design",
      "Dashboard",
      "Dokumentasi basic",
      "Scope menyesuaikan kebutuhan",
    ],
    forWho: [
      "Bisnis dengan kebutuhan sistem yang spesifik",
      "Perusahaan yang butuh integrasi antar sistem",
      "Startup yang butuh produk digital dari nol",
      "Tim internal yang butuh tools khusus",
    ],
    faqs: [
      {
        question: "Bagaimana cara menentukan harga untuk custom app?",
        answer:
          "Harga ditentukan setelah diskusi mendalam mengenai scope, fitur, timeline, dan kompleksitas proyek. Akan ada proposal tertulis sebelum pengerjaan dimulai.",
      },
      {
        question: "Apakah ada garansi setelah proyek selesai?",
        answer:
          "Ada masa garansi bug-fix selama 30 hari setelah serah terima proyek.",
      },
      {
        question: "Apakah bisa dikerjakan secara bertahap?",
        answer:
          "Bisa. Pengerjaan bisa dibagi dalam fase/sprint sesuai prioritas fitur.",
      },
    ],
    whatsappMessage:
      "Halo, saya tertarik dengan layanan Custom Web App. Boleh diskusi lebih lanjut mengenai kebutuhan saya?",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
