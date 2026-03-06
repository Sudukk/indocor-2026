INDOCOR ITS 2026
Proyek ini adalah situs web resmi untuk INDOCOR 2026, yang dikembangkan menggunakan Next.js. Platform ini berfungsi sebagai pusat informasi untuk kegiatan, artikel, tim, dan pendaftaran ICCP.

🚀 Teknologi yang Digunakan
Framework: Next.js (App Router)

Bahasa: TypeScript

Styling: Tailwind CSS

Komponen UI: Framer Motion (untuk animasi FadeIn) dan Lucid React

Linter: ESLint

📁 Struktur Folder Utama
/app: Berisi rute utama aplikasi seperti about, admin, blog, team, dan register-iccp.

/components: Komponen UI yang dapat digunakan kembali seperti Navbar, Footer, dan Button.

/containers: Logika spesifik halaman dan bagian-bagian besar (misalnya Hero, ICCPSection, LatestArticles).

/public: Aset statis seperti gambar dan logo.

🛠 Memulai Pengembangan
Pertama, jalankan server pengembangan:

Bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
Buka http://localhost:3000 di browser Anda untuk melihat hasilnya.

📝 Fitur Utama
Landing Page: Menampilkan preview tentang INDOCOR, kegiatan terbaru, dan artikel.

Panel Admin: Manajemen artikel dan aktivitas (memerlukan login).

Pendaftaran ICCP: Formulir khusus untuk pendaftaran peserta.

Blog & Berita: Halaman arsip artikel terbaru terkait korosi dan industri.

🚀 Deployment
Cara termudah untuk melakukan deployment aplikasi Next.js ini adalah dengan menggunakan Vercel Platform.

Dibuat oleh tim pengembang INDOCOR ITS 2026.
