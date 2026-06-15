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
    slug: "dashboard-xauusd-concept",
    title: "Dashboard XAUUSD",
    shortDescription:
      "Dashboard analisis fundamental XAUUSD untuk mendukung pemahaman arah pergerakan harga emas secara real-time.",
    longDescription:
      "Dashboard analitik yang membantu trader memahami faktor-faktor fundamental yang mempengaruhi pergerakan harga XAUUSD (Gold/USD). Dashboard ini menampilkan data makroekonomi dari FRED, harga live dari Yahoo Finance, dan prediksi arah harga menggunakan machine learning dalam satu tampilan terintegrasi.",
    problem:
      "Trader XAUUSD seringkali harus membuka banyak sumber data terpisah — berita ekonomi, kalender ekonomi, indikator teknikal — yang membuang waktu dan menyulitkan proses pengambilan keputusan.",
    solution:
      "Membangun dashboard analitik dengan Next.js dan FastAPI yang mengintegrasikan data makroekonomi (CPI, Fed Rate, Real Rate, dll), harga live emas & DXY, dan model Random Forest untuk prediksi arah pergerakan harga dalam satu tampilan terpadu.",
    techStack: ["Next.js 16", "TypeScript", "FastAPI", "Python", "scikit-learn", "Recharts", "pandas", "yfinance"],
    features: [
      "Visualisasi data fundamental XAUUSD",
      "Indikator makroekonomi (CPI, NFP, dll)",
      "Sentimen pasar real-time (konsep)",
      "Dashboard interaktif",
      "Desain UI/UX modern",
    ],
    screenshots: [
      "/screenshots/dashboard-xauusd-concept/preview-1.png",
      "/screenshots/dashboard-xauusd-concept/preview-2.png",
      "/screenshots/dashboard-xauusd-concept/preview-3.png",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    status: "Case Study",
    year: 2026,
    category: "Dashboard",
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
    screenshots: [
      "/screenshots/hris/Hris1.png",
      "/screenshots/hris/HRIS2.png",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    status: "Case Study",
    year: 2026,
    category: "Web App",
  },
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
    slug: "nextpos",
    title: "NextPos",
    shortDescription: "Aplikasi Point of Sale berbasis web dengan manajemen barang, kasir, laporan penjualan, dan autentikasi pengguna. Dibangun dengan Laravel 12 dan Tailwind CSS.",
    longDescription:
      "NextPos adalah aplikasi POS (Point of Sale) dan manajemen stok berbasis web yang dibangun dengan Laravel 12. Terdapat dua role pengguna — admin untuk mengelola barang, stok, dan laporan, serta kasir untuk memproses transaksi penjualan. Dilengkapi autentikasi via Laravel Breeze dan antarmuka responsif dengan Tailwind CSS.",
    problem:
      "Banyak bisnis kecil dan menengah menggunakan sistem kasir manual atau software lama yang lambat, tidak terintegrasi dengan stok, dan tidak menghasilkan laporan penjualan yang akurat.",
    solution:
      "Membangun aplikasi POS berbasis web dengan Laravel 12 yang mengintegrasikan kasir, manajemen stok, dan laporan penjualan dalam satu platform — dengan antarmuka responsif menggunakan Tailwind CSS dan Alpine.js.",
    techStack: ["Laravel 12", "PHP 8.2", "Tailwind CSS", "Alpine.js", "MySQL", "Blade", "Vite"],
    features: [
      "Role admin & kasir dengan akses berbeda",
      "Manajemen barang dan stok",
      "Proses transaksi kasir real-time",
      "Riwayat transaksi lengkap",
      "Laporan penjualan harian & bulanan",
      "Dashboard ringkasan bisnis",
      "Autentikasi pengguna (Laravel Breeze)",
    ],
    screenshots: [
      "/screenshots/nextpos/preview-1.png",
      "/screenshots/nextpos/preview-2.png",
      "/screenshots/nextpos/preview-3.png",
      "/screenshots/nextpos/preview-4.png",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    status: "Case Study",
    year: 2024,
    category: "Web App",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(count = 3): Project[] {
  return projects.slice(0, count);
}
