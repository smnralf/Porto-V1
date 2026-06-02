export type ProjectStatus = "Case Study" | "Prototype" | "Demo" | "Concept" | "Live";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: ProjectStatus;
  year: number;
  category: string;
}

export const projects: Project[] = [
  {
    slug: "sehatin",
    title: "Sehatin",
    shortDescription: "Website pengingat jadwal minum obat berbasis web.",
    longDescription:
      "Sehatin adalah aplikasi web yang membantu pengguna mengingat jadwal minum obat secara teratur. Dirancang dengan antarmuka yang sederhana dan mudah digunakan oleh semua kalangan, termasuk lansia.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Pengingat jadwal minum obat",
      "Manajemen daftar obat",
      "Riwayat konsumsi obat",
      "Antarmuka sederhana dan intuitif",
      "Notifikasi pengingat",
    ],
    screenshots: [],
    liveUrl: undefined,
    githubUrl: undefined,
    status: "Case Study",
    year: 2024,
    category: "Web App",
  },
  {
    slug: "listify",
    title: "Listify",
    shortDescription: "Aplikasi to-do list sederhana untuk manajemen tugas harian.",
    longDescription:
      "Listify adalah aplikasi to-do list berbasis web yang membantu pengguna mengorganisasi tugas harian dengan mudah. Dibangun menggunakan teknologi web dasar tanpa framework tambahan.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Tambah dan hapus tugas",
      "Tandai tugas selesai",
      "Filter tugas aktif / selesai",
      "Penyimpanan data lokal (localStorage)",
      "UI responsif dan clean",
    ],
    screenshots: [],
    liveUrl: undefined,
    githubUrl: undefined,
    status: "Prototype",
    year: 2024,
    category: "Web App",
  },
  {
    slug: "crud-barang-pengguna",
    title: "CRUD Barang & Pengguna",
    shortDescription: "Aplikasi CRUD berbasis Java JSP, Servlet, dan MySQL.",
    longDescription:
      "Aplikasi manajemen data barang dan pengguna yang dibangun menggunakan teknologi Java EE. Mendukung operasi Create, Read, Update, dan Delete dengan antarmuka web berbasis JSP.",
    techStack: ["Java", "JSP", "Servlet", "MySQL"],
    features: [
      "Manajemen data barang (CRUD)",
      "Manajemen data pengguna (CRUD)",
      "Autentikasi pengguna",
      "Koneksi database MySQL",
      "Antarmuka web berbasis JSP",
    ],
    screenshots: [],
    liveUrl: undefined,
    githubUrl: undefined,
    status: "Case Study",
    year: 2024,
    category: "Web App",
  },
  {
    slug: "company-profile-demo",
    title: "Company Profile Demo",
    shortDescription: "Website company profile modern untuk bisnis atau UMKM.",
    longDescription:
      "Demo website company profile modern yang dibangun dengan Next.js dan Tailwind CSS. Cocok sebagai referensi desain untuk bisnis atau UMKM yang ingin tampil profesional di dunia digital.",
    techStack: ["Next.js", "Tailwind CSS"],
    features: [
      "Desain modern dan responsif",
      "Halaman beranda, tentang, layanan, dan kontak",
      "Performa tinggi dengan Next.js",
      "SEO-friendly",
      "Mobile-first design",
    ],
    screenshots: [],
    liveUrl: undefined,
    githubUrl: undefined,
    status: "Demo",
    year: 2025,
    category: "Company Profile",
  },
  {
    slug: "dashboard-xauusd-concept",
    title: "Dashboard XAUUSD Concept",
    shortDescription:
      "Konsep dashboard analisis fundamental XAUUSD untuk mendukung pemahaman arah pergerakan harga.",
    longDescription:
      "Konsep dashboard analitik untuk membantu trader memahami faktor-faktor fundamental yang mempengaruhi pergerakan harga XAUUSD (Gold/USD). Dashboard ini menampilkan data makroekonomi, sentimen pasar, dan indikator teknikal dalam satu tampilan terintegrasi.",
    techStack: ["Next.js", "Machine Learning Concept", "Dashboard UI"],
    features: [
      "Visualisasi data fundamental XAUUSD",
      "Indikator makroekonomi (CPI, NFP, dll)",
      "Sentimen pasar real-time (konsep)",
      "Dashboard interaktif",
      "Desain UI/UX modern",
    ],
    screenshots: [],
    liveUrl: undefined,
    githubUrl: undefined,
    status: "Concept",
    year: 2025,
    category: "Dashboard",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(count = 3): Project[] {
  return projects.slice(0, count);
}
