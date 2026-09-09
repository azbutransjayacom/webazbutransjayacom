import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { business, footerLinks, whatsappUrl } from "@/lib/data";

function ConfigValue({ value, fallback }: { value: string; fallback: string }) {
  return <span>{value || fallback}</span>;
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-page footer-grid">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <Image
              src="/images/azbu-logo.png"
              alt="Azbu Trans Jaya"
              width={250}
              height={100}
              className="footer-logo"
            />
          </div>
          <p>
            Azbu Trans Jaya menyediakan layanan rental mobil untuk berbagai kebutuhan perjalanan di Surabaya dan Sidoarjo.
          </p>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="footer-links">
            <h2>{heading}</h2>
            {links.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </div>
        ))}

        <div className="footer-contact">
          <h2>Kontak</h2>
          <p><MapPin size={17} /><ConfigValue value={business.address} fallback="Alamat belum dikonfigurasi" /></p>
          <p><Phone size={17} /><ConfigValue value={business.phone} fallback="Telepon belum dikonfigurasi" /></p>
          <a href={whatsappUrl()}><MessageCircle size={17} /><ConfigValue value={business.whatsapp} fallback="WhatsApp belum dikonfigurasi" /></a>
          <p><Mail size={17} /><ConfigValue value={business.email} fallback="Email belum dikonfigurasi" /></p>
        </div>
      </div>
      <div className="container-page footer-bottom">
        <p>© {new Date().getFullYear()} Azbu Trans Jaya. All rights reserved.</p>
      </div>
    </footer>
  );
}
