export type ProjectStatus = "Case Study" | "Prototype" | "Demo" | "Concept" | "Live";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  problem: string;
  solution: string;
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
    problem:
      "Banyak pengguna, terutama lansia, kesulitan mengingat jadwal dan dosis obat secara konsisten. Kelalaian ini berdampak langsung pada efektivitas pengobatan dan kesehatan jangka panjang.",
    solution:
      "Membangun aplikasi web berbasis browser yang ringan dan mudah diakses tanpa instalasi. Pengguna cukup membuka browser, mengatur jadwal obat, dan mendapatkan pengingat secara otomatis.",
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
    year: 2025,
    category: "Web App",
  },
  {
    slug: "hris",
    title: "HRIS",
    shortDescription: "Sistem Human Resource Information System untuk manajemen data karyawan, absensi, dan penggajian berbasis web.",
    longDescription:
      "HRIS adalah aplikasi web berbasis Laravel yang dirancang untuk membantu perusahaan dalam mengelola data karyawan, pencatatan absensi, dan proses penggajian secara terpusat dan efisien.",
    problem:
      "Pengelolaan data karyawan, absensi, dan penggajian yang masih dilakukan secara manual menyebabkan inefisiensi operasional, risiko kesalahan data, dan sulitnya akses informasi secara real-time.",
    solution:
      "Membangun sistem HRIS berbasis web dengan Laravel yang mengotomasi seluruh proses HR — dari pencatatan absensi harian hingga kalkulasi gaji — dalam satu platform terpusat yang bisa diakses oleh admin dan karyawan.",
    techStack: ["PHP", "Laravel", "Tailwind CSS", "JavaScript", "AJAX", "MySQL"],
    features: [
      "Manajemen data karyawan",
      "Pencatatan absensi harian",
      "Pengelolaan penggajian",
      "Dashboard laporan HR",
      "Role admin & karyawan",
    ],
    screenshots: [],
    liveUrl: undefined,
    githubUrl: undefined,
    status: "Case Study",
    year: 2026,
    category: "Web App",
  },
  {
    slug: "nextpos",
    title: "NextPos",
    shortDescription: "Aplikasi Point of Sale berbasis web dengan fitur scan barcode, manajemen produk, transaksi real-time, dan laporan penjualan. Dibangun dengan Next.js dan integrasi hardware scanner.",
    longDescription:
      "Aplikasi Point of Sale berbasis web dengan fitur scan barcode, manajemen produk, transaksi real-time, dan laporan penjualan. Dibangun dengan Next.js dan integrasi hardware scanner.",
    problem:
      "Banyak bisnis kecil dan menengah menggunakan sistem kasir manual atau software lama yang lambat, tidak mendukung barcode scanner, dan tidak menghasilkan laporan penjualan yang akurat.",
    solution:
      "Membangun aplikasi POS berbasis web dengan Next.js yang terintegrasi dengan hardware barcode scanner, memungkinkan proses transaksi yang cepat, pencatatan stok otomatis, dan laporan penjualan real-time.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
    features: [
      "Manajemen transaksi penjualan",
      "Manajemen produk dan stok",
      "Laporan penjualan harian & bulanan",
      "Dashboard ringkasan bisnis",
      "Antarmuka kasir yang responsif",
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
    problem:
      "Banyak UMKM dan bisnis lokal belum memiliki website yang representatif, sehingga kehilangan kepercayaan calon pelanggan yang pertama kali mencari informasi bisnis secara online.",
    solution:
      "Membuat demo company profile modern berbasis Next.js dengan desain responsif, performa tinggi, dan struktur yang mudah dikustomisasi sesuai identitas bisnis klien.",
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
    year: 2026,
    category: "Company Profile",
  },
  {
    slug: "dashboard-xauusd-concept",
    title: "Dashboard XAUUSD Concept",
    shortDescription:
      "Konsep dashboard analisis fundamental XAUUSD untuk mendukung pemahaman arah pergerakan harga.",
    longDescription:
      "Konsep dashboard analitik untuk membantu trader memahami faktor-faktor fundamental yang mempengaruhi pergerakan harga XAUUSD (Gold/USD). Dashboard ini menampilkan data makroekonomi, sentimen pasar, dan indikator teknikal dalam satu tampilan terintegrasi.",
    problem:
      "Trader XAUUSD seringkali harus membuka banyak sumber data terpisah — berita ekonomi, kalender ekonomi, indikator teknikal — yang membuang waktu dan menyulitkan proses pengambilan keputusan.",
    solution:
      "Merancang konsep dashboard analitik yang mengintegrasikan data makroekonomi (CPI, NFP, dll), sentimen pasar, dan indikator teknikal XAUUSD dalam satu tampilan terpadu untuk mempercepat analisis.",
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
    year: 2026,
    category: "Dashboard",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(count = 3): Project[] {
  return projects.slice(0, count);
}
