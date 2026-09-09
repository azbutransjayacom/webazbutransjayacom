import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  BusFront,
  CalendarDays,
  CarFront,
  CircleCheck,
  ClipboardCheck,
  Gauge,
  Luggage,
  MapPin,
  MessageCircle,
  Plane,
  ShieldCheck,
  Snowflake,
  UserCheck,
} from "lucide-react";

export const business = {
  name: "Azbu Trans Jaya",
  legalName: "PT Azbu Trans Jaya",
  whatsapp: "085655221633",
  phone: "085655221633",
  email: "",
  address: "Surabaya & Sidoarjo, Jawa Timur",
  instagram: "",
  baseUrl: "https://azbutransjaya.com",
};

export const generalWhatsappMessage =
  "Halo Azbu Trans Jaya, saya melihat dari website dan ingin menanyakan ketersediaan rental mobil.";

export function whatsappUrl(message = generalWhatsappMessage) {
  const digits = business.whatsapp.replace(/\D/g, "");
  const number = digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
  return number
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : "#kontak";
}

export const driverPricing = {
  city: 200000,
  outOfCity: 250000,
  outOfRegionMin: 50000,
  outOfRegionMax: 100000,
  outOfRegionNote: "Tambahan Rp50.000–Rp100.000, menyesuaikan tujuan.",
};

export type FleetVehicle = {
  name: string;
  category: string;
  image: string;
  transmission: string;
  seats: string;
  price: number;
};

export const fleet: FleetVehicle[] = [
  { name: "Daihatsu Sigra R AT", category: "City Car", image: "/images/sigra.png", transmission: "Automatic", seats: "5–7 Seat", price: 325000 },
  { name: "Suzuki XL7 AT", category: "MPV", image: "/images/xl7.png", transmission: "Automatic", seats: "7 Seat", price: 400000 },
  { name: "Daihatsu Xenia 2018 Manual", category: "MPV", image: "/images/xenia.png", transmission: "Manual", seats: "7 Seat", price: 275000 },
  { name: "Daihatsu Ayla AT", category: "City Car", image: "/images/ayla.png", transmission: "Automatic", seats: "5 Seat", price: 275000 },
  { name: "Avanza Manual", category: "MPV", image: "/images/avanza.png", transmission: "Manual", seats: "7 Seat", price: 300000 },
  { name: "Daihatsu Sirion 2016 AT", category: "City Car", image: "/images/sirion.png", transmission: "Automatic", seats: "5 Seat", price: 300000 },
  { name: "Innova Reborn Automatic", category: "Premium", image: "/images/innova.png", transmission: "Automatic", seats: "7 Seat", price: 600000 },
  { name: "Hiace", category: "Minibus", image: "/images/hiace.png", transmission: "Manual", seats: "Rombongan", price: 1000000 },
];

export const featuredFleet = [fleet[0], fleet[1], fleet[6], fleet[7]];

export const gallery = [
  { image: "/images/gallery-fleet.png", alt: "Visual representatif jajaran armada rental", label: "Armada siap perjalanan" },
  { image: "/images/gallery-interior.png", alt: "Visual representatif kabin kendaraan yang bersih", label: "Kabin bersih dan nyaman" },
  { image: "/images/gallery-airport.png", alt: "Visual representatif serah terima kendaraan di bandara", label: "Antar jemput terkoordinasi" },
  { image: "/images/gallery-journey.png", alt: "Visual representatif perjalanan kendaraan di luar kota", label: "Siap untuk perjalanan Anda" },
];

export type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const benefits: IconItem[] = [
  {
    title: "Unit Disiapkan Sebelum Jalan",
    description: "Kondisi dan kebersihan kendaraan dipersiapkan sebelum jadwal keberangkatan.",
    icon: ShieldCheck,
  },
  {
    title: "Konsultasi via WhatsApp",
    description: "Kebutuhan perjalanan dibahas langsung agar pilihan kendaraan lebih sesuai.",
    icon: MessageCircle,
  },
  {
    title: "Pilihan Armada Fleksibel",
    description: "Pilihan kendaraan untuk kebutuhan pribadi, keluarga, bisnis, atau rombongan.",
    icon: CarFront,
  },
  {
    title: "Berbasis Surabaya & Sidoarjo",
    description: "Detail titik jemput dan tujuan dikonfirmasi sesuai ketersediaan layanan.",
    icon: MapPin,
  },
];

export const experienceBenefits: IconItem[] = [
  {
    title: "Armada Bersih & Terawat",
    description: "Kondisi dan kebersihan kendaraan dipersiapkan sebelum jadwal keberangkatan.",
    icon: ShieldCheck,
  },
  {
    title: "Proses Booking Praktis",
    description: "Sampaikan unit, tanggal, dan tujuan agar ketersediaan dapat segera dikonfirmasi.",
    icon: ClipboardCheck,
  },
  {
    title: "Harga Transparan",
    description: "Harga mulai ditampilkan di katalog dan detail akhir dikonfirmasi sesuai kebutuhan perjalanan.",
    icon: CircleCheck,
  },
  {
    title: "Konsultasi via WhatsApp",
    description: "Diskusikan kebutuhan perjalanan langsung bersama tim Azbu Trans Jaya.",
    icon: MessageCircle,
  },
];

export const featuredSpecs = [
  { label: "Kabin Nyaman & Luas", icon: Armchair },
  { label: "AC Dingin", icon: Snowflake },
  { label: "Bagasi Luas", icon: Luggage },
  { label: "Performa Tangguh", icon: Gauge },
];

export type ServiceItem = IconItem & {
  image: string;
  imageAlt: string;
  points: string[];
};

export const services: ServiceItem[] = [
  {
    title: "Rental Harian",
    description: "Kendaraan praktis untuk agenda personal, keluarga, atau aktivitas bisnis harian.",
    icon: CalendarDays,
    image: "/images/gallery-fleet.png",
    imageAlt: "Visual representatif armada rental harian",
    points: ["Pilihan unit sesuai kebutuhan", "Jadwal dikonfirmasi via WhatsApp"],
  },
  {
    title: "Rental + Driver",
    description: "Layanan sewa mobil dengan pengemudi profesional untuk perjalanan santai dan bebas lelah.",
    icon: UserCheck,
    image: "/images/gallery-interior.png",
    imageAlt: "Visual representatif layanan rental mobil dengan driver",
    points: [
      "Dalam Kota: Rp200.000 / hari",
      "Luar Kota: Rp250.000 / hari",
      "Luar Daerah: +Rp50.000–Rp100.000 (sesuai tujuan)",
    ],
  },
  {
    title: "Antar Jemput & Airport",
    description: "Perjalanan terjadwal untuk kebutuhan antar jemput dan transfer bandara.",
    icon: Plane,
    image: "/images/gallery-airport.png",
    imageAlt: "Visual representatif layanan antar jemput bandara",
    points: ["Detail titik jemput terkoordinasi", "Pilihan kendaraan menyesuaikan penumpang"],
  },
  {
    title: "Wisata & Rombongan",
    description: "Pilihan perjalanan untuk keluarga, agenda luar kota, dan rombongan.",
    icon: BusFront,
    image: "/images/gallery-journey.png",
    imageAlt: "Visual representatif perjalanan wisata dan luar kota",
    points: ["Tujuan dikonsultasikan terlebih dahulu", "Armada dipilih sesuai kebutuhan"],
  },
];

export const bookingSteps = [
  {
    title: "Pilih Unit",
    description: "Pilih armada sesuai kebutuhan Anda.",
    icon: CarFront,
  },
  {
    title: "Kirim Tanggal & Tujuan",
    description: "Kirim rencana perjalanan melalui WhatsApp.",
    icon: CalendarDays,
  },
  {
    title: "Konfirmasi Ketersediaan",
    description: "Kami cek unit dan detail perjalanan.",
    icon: ClipboardCheck,
  },
  {
    title: "Mobil Siap",
    description: "Detail selesai, perjalanan siap dilakukan.",
    icon: CircleCheck,
  },
];

export const demoAreas = [
  { label: "Surabaya", left: "68%", top: "32%" },
  { label: "Sidoarjo", left: "73%", top: "63%" },
  { label: "Juanda", left: "83%", top: "48%" },
  { label: "Gresik", left: "53%", top: "18%" },
  { label: "Mojokerto", left: "46%", top: "65%" },
  { label: "Pasuruan", left: "58%", top: "79%" },
];

export const faqs = [
  {
    question: "Apakah tersedia rental dengan driver?",
    answer: "Ketersediaan layanan dengan driver perlu dikonfirmasi melalui WhatsApp sesuai jadwal dan kebutuhan perjalanan.",
  },
  {
    question: "Apakah tersedia rental lepas kunci?",
    answer: "Kebijakan rental lepas kunci belum ditetapkan pada situs. Silakan hubungi Azbu Trans Jaya untuk informasi terbaru.",
  },
  {
    question: "Apakah melayani perjalanan luar kota?",
    answer: "Tujuan perjalanan dan ketersediaan kendaraan perlu dikonsultasikan terlebih dahulu melalui WhatsApp.",
  },
  {
    question: "Bagaimana proses booking kendaraan?",
    answer: "Pilih armada, hubungi kami, konfirmasi jadwal serta detail perjalanan, lalu tunggu konfirmasi pemesanan.",
  },
  {
    question: "Apa saja syarat pemesanan?",
    answer: "Persyaratan menyesuaikan jenis layanan dan kendaraan. Detail lengkap akan disampaikan saat konsultasi.",
  },
  {
    question: "Bagaimana metode pembayarannya?",
    answer: "Metode dan tahapan pembayaran perlu dikonfirmasi langsung karena informasi kebijakan belum tersedia pada situs.",
  },
];

export const footerLinks = {
  Menu: [
    ["Beranda", "#beranda"],
    ["Armada", "#armada"],
    ["Layanan", "#layanan"],
    ["Tentang", "#tentang"],
    ["FAQ", "#faq"],
    ["Kontak", "#kontak"],
  ],
  Layanan: services.map((service) => [service.title, "#layanan"]),
} satisfies Record<string, string[][]>;

export const schemaFaq = faqs.map((faq) => ({
  "@type": "Question",
  name: faq.question,
  acceptedAnswer: { "@type": "Answer", text: faq.answer },
}));
