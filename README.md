# Azbu Trans Jaya — Rental Mobil

Website company profile dan landing page pemesanan untuk **Azbu Trans Jaya**, penyedia rental mobil yang melayani Surabaya, Sidoarjo, dan area sekitarnya.

Homepage menggunakan alur landing page rental modern: hero armada, panel booking mengambang, trust strip, katalog kendaraan, featured vehicle, cakupan area, benefit, alur booking, FAQ, serta CTA WhatsApp. Identitas visual Azbu Trans Jaya—warna, tipografi, logo, dan aset kendaraan—tetap menjadi fondasi desain.

## Fitur utama

- Hero responsif dengan fokus pada armada dan CTA utama
- Panel booking responsif yang membentuk pesan WhatsApp sesuai kebutuhan perjalanan
- Katalog tujuh kendaraan dengan grid empat kolom di desktop dan kartu khusus mobile
- Trust strip dan benefit cards yang ringkas serta mudah dipindai
- Featured Innova Reborn dengan presentasi sinematik
- Alur booking empat langkah yang konsisten di desktop, tablet, dan mobile
- Section editorial area layanan Surabaya, Sidoarjo, dan sekitarnya
- FAQ accordion yang accessible
- Harga mulai setiap armada yang dikelola terpusat bersama data kendaraan
- CTA WhatsApp dengan pesan yang dapat dikonfigurasi
- Sticky navigation, mobile menu, dan floating CTA pada mobile
- Animasi dengan dukungan `prefers-reduced-motion`
- Metadata SEO, Open Graph, Twitter Card, sitemap, robots, dan JSON-LD
- Optimasi aset melalui `next/image` dengan output AVIF/WebP

## Teknologi

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4 toolchain
- Framer Motion
- Lucide React
- Playwright untuk visual dan interaction checks

## Menjalankan secara lokal

Pastikan Node.js dan npm sudah tersedia, kemudian jalankan:

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Untuk memeriksa tipe dan membuat production build:

```bash
npm run lint
npm run build
npm run start
```

## Konfigurasi bisnis

Data bisnis dan konten utama dikelola dari [`lib/data.ts`](./lib/data.ts):

```ts
export const business = {
  name: "Azbu Trans Jaya",
  legalName: "PT Azbu Trans Jaya",
  whatsapp: "",
  phone: "",
  email: "",
  address: "",
  instagram: "",
  baseUrl: "https://azbutransjaya.com",
};
```

Gunakan format internasional tanpa tanda `+` untuk nomor WhatsApp, misalnya `6281234567890`. Jika nomor belum diisi, CTA WhatsApp akan diarahkan ke section kontak sehingga website tidak menampilkan nomor palsu.

File yang sama juga menyimpan daftar armada beserta harga, benefit, layanan, langkah booking, area layanan, FAQ, dan navigasi footer.

## Struktur proyek

```text
app/
  layout.tsx         Root layout, font, dan metadata
  page.tsx           Komposisi homepage dan structured data
  globals.css        Design system dan styling dasar Azbu
  azbu-structure.css Layout, composition, dan responsive behavior homepage
  robots.ts          Konfigurasi crawler
  sitemap.ts         Sitemap
components/
  Navbar.tsx         Navigasi desktop dan mobile
  Hero.tsx           Hero dan komposisi armada
  FleetCard.tsx      Item katalog kendaraan
  FeatureCard.tsx    Benefit layanan
  ServiceCard.tsx    Ringkasan layanan
  BookingStep.tsx    Alur booking
  FAQ.tsx            Accordion accessible
  CTA.tsx            Banner konversi WhatsApp
  Footer.tsx         Informasi dan navigasi footer
lib/
  data.ts            Konfigurasi bisnis dan sumber konten
public/images/       Logo, kendaraan, background, galeri, dan peta
scripts/
  visual_check.py    Pemeriksaan visual dan interaksi lintas viewport
```

## Quality checks

Dengan development server aktif, jalankan:

```bash
python scripts/visual_check.py
```

Pemeriksaan otomatis mencakup viewport desktop `1440×900`, tablet `1024×768`, dan mobile `390×844`, termasuk:

- horizontal overflow
- gambar rusak
- error console dan runtime
- menu mobile
- jumlah card armada dan harga katalog utama
- floating WhatsApp CTA

## Status konten

- Telepon, WhatsApp, email, dan alamat masih menunggu data resmi.
- Lokasi pada visual peta perlu diverifikasi sebelum publikasi.
- Kebijakan rental yang belum tersedia ditulis sebagai arahan untuk berkonsultasi.
- Aset galeri bersifat representatif dan dapat diganti dengan dokumentasi operasional asli.

Sebelum deployment produksi, verifikasi data kontak, kebijakan pemesanan, area layanan, ketersediaan unit, dan hak penggunaan seluruh foto.
