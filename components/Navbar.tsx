"use client";

import Image from "next/image";
import { CalendarDays, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/data";

const navItems = [
  ["Beranda", "#beranda", "beranda"],
  ["Armada", "#armada", "armada"],
  ["Layanan", "#layanan", "layanan"],
  ["Tentang", "#tentang", "tentang"],
  ["Kontak", "#kontak", "kontak"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["beranda", "armada", "layanan", "tentang", "kontak"];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container-page nav-inner">
        <a
          href="#beranda"
          className="brand-link"
          aria-label="Azbu Trans Jaya - Beranda"
          onClick={() => handleNavClick("beranda")}
        >
          <Image
            src="/images/azbu-logo.png"
            alt="Azbu Trans Jaya"
            width={260}
            height={104}
            priority
            className="brand-logo"
          />
        </a>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navItems.map(([label, href, id]) => (
            <a
              key={label}
              href={href}
              className={activeSection === id ? "active" : ""}
              onClick={() => handleNavClick(id)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a href={whatsappUrl()} className="nav-cta">
          <CalendarDays size={17} strokeWidth={2} aria-hidden="true" />
          Booking Sekarang
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Navigasi mobile">
          <div className="container-page">
            {navItems.map(([label, href, id]) => (
              <a
                key={label}
                href={href}
                className={activeSection === id ? "active-mobile-link" : ""}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </a>
            ))}
            <a href={whatsappUrl()} className="mobile-menu-cta" onClick={() => setOpen(false)}>
              Booking Sekarang
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
