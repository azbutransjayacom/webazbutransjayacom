import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./azbu-structure.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://azbutransjaya.com"),
  title: "Rental Mobil Surabaya & Sidoarjo | Azbu Trans Jaya",
  description:
    "Azbu Trans Jaya menyediakan layanan rental mobil untuk kebutuhan perjalanan di Surabaya dan Sidoarjo dengan berbagai pilihan armada.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rental Mobil Surabaya & Sidoarjo | Azbu Trans Jaya",
    description:
      "Rental mobil untuk kebutuhan perjalanan di Surabaya dan Sidoarjo dengan berbagai pilihan armada.",
    url: "/",
    siteName: "Azbu Trans Jaya",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/hero-fleet-final.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rental Mobil Surabaya & Sidoarjo | Azbu Trans Jaya",
    description:
      "Rental mobil untuk kebutuhan perjalanan di Surabaya dan Sidoarjo dengan berbagai pilihan armada.",
    images: ["/images/hero-fleet-final.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
