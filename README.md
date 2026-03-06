# INDOCOR ITS 2026

Proyek ini adalah situs web resmi untuk **INDOCOR 2026**, yang dikembangkan menggunakan **Next.js**.  
Platform ini berfungsi sebagai pusat informasi untuk kegiatan, artikel, tim, dan pendaftaran **ICCP**.

---

## 🚀 Teknologi yang Digunakan

- **Framework:** Next.js (App Router)  
- **Bahasa:** TypeScript  
- **Styling:** Tailwind CSS  
- **Komponen UI:** Framer Motion (untuk animasi FadeIn) dan Lucide React  
- **Linter:** ESLint  

---

## 📁 Struktur Folder Utama

```
/app
  ├── about
  ├── admin
  ├── blog
  ├── team
  └── register-iccp

/components
  ├── Navbar
  ├── Footer
  └── Button

/containers
  ├── Hero
  ├── ICCPSection
  └── LatestArticles

/public
  └── assets (gambar, logo, dll)
```

**Penjelasan:**

- **/app** – Berisi rute utama aplikasi seperti `about`, `admin`, `blog`, `team`, dan `register-iccp`.
- **/components** – Komponen UI yang dapat digunakan kembali seperti **Navbar**, **Footer**, dan **Button**.
- **/containers** – Berisi logika halaman atau section besar seperti **Hero**, **ICCP Section**, dan **Latest Articles**.
- **/public** – Aset statis seperti gambar, logo, dan file publik lainnya.

---

## 🛠 Memulai Pengembangan

Jalankan server development:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

Setelah itu buka browser dan akses:

```
http://localhost:3000
```

---

## 📝 Fitur Utama

### Landing Page
Menampilkan preview tentang **INDOCOR**, kegiatan terbaru, serta artikel terbaru.

### Panel Admin
Digunakan untuk **mengelola artikel dan aktivitas** yang ditampilkan pada website.  
Akses memerlukan **login admin**.

### Pendaftaran ICCP
Halaman khusus yang menyediakan **formulir pendaftaran peserta ICCP**.

### Blog & Berita
Halaman arsip artikel yang berisi **informasi terbaru mengenai korosi dan industri terkait**.

---

## 🚀 Deployment

Cara termudah untuk melakukan deployment aplikasi **Next.js** ini adalah menggunakan:

**Vercel Platform**

Vercel menyediakan integrasi langsung dengan Next.js sehingga deployment dapat dilakukan dengan cepat dan mudah.

---

## 👨‍💻 Tim Pengembang

Dibuat oleh **Tim Pengembang INDOCOR ITS 2026**.
