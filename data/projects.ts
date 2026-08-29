export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  image: string;
  imageAlt: string;
  overview: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "aplikasi-pembukuan",
    index: "01",
    title: "Aplikasi Pembukuan",
    tagline: "Sistem pencatatan keuangan untuk perusahaan ISP tempat PKL.",
    year: "2026",
    role: "Backend Developer (PKL)",
    stack: ["PHP", "MySQL", "JavaScript"],
    image: "/projects/pembukuan.png",
    imageAlt:
      "Antarmuka dashboard aplikasi pembukuan dengan tabel transaksi, laporan keuangan, dan formulir input data. Desain bersih dengan skema warna gelap dan aksen biru, menampilkan ringkasan saldo, pemasukan, dan pengeluaran.",
    overview: [
      "Aplikasi web pembukuan yang dibangun selama masa PKL di perusahaan penyedia layanan internet (ISP). Sistem ini menggantikan pencatatan manual berbasis spreadsheet menjadi terstruktur dan terpusat.",
      "Fitur utama mencakup manajemen transaksi (pemasukan/pengeluaran), kategori akun, laporan bulanan/tahunan, serta ekspor PDF. Database dirancang dengan normalisasi untuk menghindari duplikasi data dan memastikan integritas referensial.",
    ],
    highlights: [
      "Mengurangi waktu pencatatan manual hingga 70% dibanding spreadsheet.",
      "Implementasi autentikasi multi-role (admin, finance, viewer) dengan session-based auth.",
      "Laporan keuangan otomatis dengan filter periode dan kategori.",
      "Belajar dasar jaringan (IP addressing, VLAN, monitoring bandwidth) di lingkungan ISP nyata.",
    ],
  },
  {
    slug: "gmq-bot",
    index: "02",
    title: "GMQ Bot",
    tagline: "Bot Telegram terintegrasi Google Sheets untuk pencatatan otomatis via chat.",
    year: "2026",
    role: "Backend Developer",
    stack: ["Node.js", "Google Sheets API", "Telegram Bot API"],
    image: "/projects/log-gmq.png",
    imageAlt:
      "Tampilan chat Telegram dengan bot GMQ yang menerima input teks, memparsing data, dan mengonfirmasi pencatatan ke Google Sheets. Di sampingnya cuplikan spreadsheet yang terisi otomatis dengan kolom tanggal, kategori, jumlah, dan keterangan.",
    overview: [
      "Bot Telegram yang memudahkan pencatatan keuangan/harian hanya dengan mengetik di chat. Bot memparsing pesan alami (contoh: \"makan siang 25rb\"), mengekstrak kategori, jumlah, dan keterangan, lalu menulis ke Google Sheets via Google Sheets API menggunakan service account Google Cloud.",
      "Arsitektur serverless sederhana: webhook Telegram → Cloud Function/VM → Google Sheets. Tidak perlu database terpisah karena spreadsheet berfungsi sebagai data store yang bisa diakses langsung untuk analisis.",
    ],
    highlights: [
      "Parsing bahasa natural sederhana untuk ekstrak nominal, kategori, dan catatan.",
      "Otomatis mapping kolom: tanggal, kategori, nominal, keterangan, sumber (chat/manual).",
      "Menggunakan Google Cloud service account untuk autentikasi server-to-server ke Sheets API.",
      "Menghemat waktu rekap manual — cukup paste/ketik di chat, sistem yang mapping & catat.",
    ],
  },
  {
    slug: "website-desa",
    index: "03",
    title: "Website Desa",
    tagline: "Website profil desa dengan informasi publik, berita, dan layanan warga (on-going).",
    year: "2026",
    role: "Fullstack Developer",
    stack: ["Next.js", "React", "TypeScript"],
    image: "/projects/fintech-analytics.jpg",
    imageAlt:
      "Halaman beranda website desa dengan hero section foto pemandangan desa, navigasi ke profil, berita, galeri, dan layanan warga. Desain responsif, bersih, dengan tipografi terbaca dan warna hijau-nature.",
    overview: [
      "Project on-going untuk membangun website resmi desa. Tujuannya menyediakan informasi transparan kepada warga dan publik: profil desa, struktur perangkat, berita/kegiatan, galeri kegiatan, serta layanan administratif (surat keterangan, dll).",
      "Dibangun dengan Next.js (App Router) untuk performa dan SEO optimal. Menggunakan TypeScript untuk type safety. Rencana fitur: CMS sederhana untuk perangkat desa mengelola konten tanpa coding, formulir pengajuan surat online, dan peta desa interaktif.",
    ],
    highlights: [
      "Arsitektur Next.js 15 App Router dengan Server Components & Static Generation.",
      "Desain mobile-first responsif, aksesibilitas (semantic HTML, kontras warna).",
      "Rencana integrasi CMS headless (file-based atau Notion) untuk kelola berita/galeri.",
      "Belajar deployment ke Vercel/VPS, konfigurasi domain, dan SSL.",
    ],
  },
  {
    slug: "umora-umkm",
    index: "04",
    title: "Umora UMKM",
    tagline: "Website yang dapat membantu UMKM dalam pencatatan keuangan dan penjualan.",
    year: "2026",
    role: "BackEnd Developer",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    image: "/projects/fintech-analytics.jpg",
    imageAlt:
      "Halaman beranda website desa dengan hero section foto pemandangan desa, navigasi ke profil, berita, galeri, dan layanan warga. Desain responsif, bersih, dengan tipografi terbaca dan warna hijau-nature.",
    overview: [
      "Project  Tujuannya membantu UMKM dalam pencatatan keuangan dan penjualan.",
      "Dibangun dengan Laravel untuk performa dan SEO optimal. Menggunakan Bootstrap untuk type safety. Rencana fitur: CMS sederhana untuk perangkat desa mengelola konten tanpa coding, formulir pengajuan surat online, dan peta desa interaktif.",
    ],
    highlights: [
      "Arsitektur Laravel 10 App Router dengan Server Components & Static Generation.",
      "Desain mobile-first responsif, aksesibilitas (semantic HTML, kontras warna).",
      "Rencana integrasi CMS headless (file-based atau Notion) untuk kelola berita/galeri.",
      "Belajar deployment ke Vercel/VPS, konfigurasi domain, dan SSL.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}