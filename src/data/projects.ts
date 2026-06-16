export type ProjectStatus = "Case Study" | "Prototype" | "Demo" | "Concept" | "Live";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  problem: string;
  solution: string;
  result: string;
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
      "Trader XAUUSD biasanya pusing karena harus buka banyak tab — berita, kalender ekonomi, chart — bikin ribet dan telat ngambil keputusan.",
    solution:
      "Saya bikin dashboard pakai Next.js & FastAPI buat nyatuin semua data makroekonomi, harga live emas, plus prediksi arah harga pakai Random Forest dalam satu layar.",
    result:
      "Menghasilkan sebuah konsep dashboard interaktif yang berpotensi memangkas waktu riset trader secara drastis dengan menyajikan data fundamental dan prediktif dalam satu layar ringkas.",
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
      "Banyak perusahaan masih pakai sistem absen dan hitung gaji manual pakai Excel. Rawan error dan bikin HRD pusing tiap akhir bulan.",
    solution:
      "Saya bangun sistem HRIS full-stack pakai Laravel buat otomasi semuanya — dari absen harian sampai slip gaji otomatis, beres dalam satu platform.",
    result:
      "Proses manajemen data karyawan menjadi terotomatisasi, mengurangi human-error dalam perhitungan absensi dan penggajian, serta memudahkan akses informasi secara transparan bagi seluruh karyawan.",
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
      "/screenshots/hris/Hris3.png",
      "/screenshots/hris/Hris4.png",
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
      "Orang tua atau lansia sering banget lupa minum obat. Sekalinya lupa, efek pengobatannya jadi berantakan.",
    solution:
      "Bikin web app super simpel yang bisa diakses langsung dari browser HP tanpa install apa-apa, khusus buat ngingetin jadwal obat otomatis.",
    result:
      "Menghasilkan aplikasi pengingat yang sangat ramah pengguna dengan notifikasi tepat waktu, membantu pengguna (khususnya lansia) untuk terus mematuhi jadwal minum obat mereka.",
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
      "Masih banyak UMKM lokal yang belum punya website gara-gara mikir bikin web itu mahal dan ribet, akhirnya kalah saing di Google.",
    solution:
      "Saya rakit template modern pakai Next.js biar performanya ngebut. UMKM tinggal pakai, ganti teks & foto, langsung kelihatan profesional.",
    result:
      "Terciptanya sebuah template dasar berkualitas tinggi yang mempercepat proses pembuatan website profesional untuk UMKM, dilengkapi dengan desain responsif dan skor performa yang optimal.",
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
      "Kasir manual atau aplikasi POS jadul sering lemot, susah sinkron sama sisa stok gudang, dan laporan penjualannya nggak real-time.",
    solution:
      "Saya garap aplikasi kasir (POS) pakai Laravel 12 + Tailwind yang ringan. Ada fitur kasir buat jaga toko, dan dashboard buat bos mantau untung rugi.",
    result:
      "Aplikasi berhasil mengintegrasikan modul kasir dan stok, memberikan kemudahan bagi pemilik bisnis untuk memantau penjualan harian serta sisa barang secara real-time dari mana saja.",
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
