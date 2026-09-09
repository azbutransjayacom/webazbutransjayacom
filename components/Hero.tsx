"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CarFront, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { whatsappUrl } from "@/lib/data";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { opacity: 0, y: 18 };

  return (
    <section id="beranda" className="hero-section">
      {/* ===== MOBILE DEDICATED HERO (visible on <= 767px) ===== */}
      <div className="mobile-hero-container">
        {/* Layer 1: Background Image with soft Surabaya landmark & skyline */}
        <div className="mobile-hero-bg-layer" aria-hidden="true">
          <Image
            src="/images/hero-bg-surabaya-mobile.png"
            alt="Surabaya Landmark Background"
            fill
            priority
            sizes="100vw"
            className="mobile-hero-bg-img"
          />
          <div className="mobile-hero-gradient-scrim" />
        </div>

        {/* ZONE A: Content Area (Top to Middle) */}
        <div className="mobile-hero-content">
          <p className="mobile-hero-eyebrow">
            Rental Mobil Surabaya & Sidoarjo
          </p>

          <h1 className="mobile-hero-title">
            Rental Mobil<br />
            <span>
              Surabaya &amp;<br />
              Sidoarjo
            </span>
          </h1>

          <p className="mobile-hero-desc">
            Armada terawat untuk perjalanan harian, airport, wisata, dan kebutuhan keluarga.
          </p>

          <div className="mobile-hero-actions">
            <ButtonLink href="#armada" icon={CarFront} className="mobile-hero-btn-primary">
              Lihat Armada
            </ButtonLink>
            <ButtonLink href={whatsappUrl()} icon={MessageCircle} variant="secondary" className="mobile-hero-btn-secondary">
              Booking via WhatsApp
            </ButtonLink>
          </div>

          <div className="mobile-hero-trust-chips">
            <span className="mobile-trust-chip">
              <ShieldCheck size={13} className="mobile-trust-icon" />
              Armada Terawat
            </span>
            <span className="mobile-trust-chip">
              <CarFront size={13} className="mobile-trust-icon" />
              Pilihan Lengkap
            </span>
            <span className="mobile-trust-chip">
              <MapPin size={13} className="mobile-trust-icon" />
              Siap Surabaya & Sidoarjo
            </span>
          </div>
        </div>

        {/* ZONE B: Visual Stage (3 Large Cars + Red Platform / Road) */}
        <div className="mobile-hero-showcase">
          {/* Red geometric perspective road / platform under vehicles */}
          <div className="mobile-hero-red-road" aria-hidden="true">
            <div className="mobile-hero-road-glow" />
            <div className="mobile-hero-road-surface" />
          </div>

          {/* Cars Composition */}
          <div className="mobile-hero-fleet-wrap">
            <Image
              src="/images/hero-fleet-final.png"
              alt="Toyota Innova Reborn, Suzuki XL7, dan Toyota Hiace Azbu Trans Jaya"
              fill
              priority
              sizes="(max-width: 767px) 120vw, 50vw"
              className="mobile-hero-fleet-img"
            />
          </div>
        </div>
      </div>

      {/* ===== DESKTOP HERO (visible on >= 768px) ===== */}
      <div className="container-page hero-grid desktop-hero-grid">
        <div className="hero-copy">
          <motion.p
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hero-eyebrow"
          >
            Rental Mobil Surabaya & Sidoarjo
          </motion.p>
          <motion.h1
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            Rental Mobil
            <span>Surabaya & Sidoarjo</span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            Perjalanan nyaman, aman, dan menyenangkan dengan armada terawat dan pelayanan profesional.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <ButtonLink href="#armada" icon={CarFront}>Lihat Armada</ButtonLink>
            <ButtonLink href={whatsappUrl()} icon={MessageCircle} variant="secondary">
              Booking via WhatsApp
            </ButtonLink>
          </motion.div>
          <motion.div
            className="hero-trust"
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <span><ShieldCheck size={16} />Armada Terawat</span>
            <span><CarFront size={16} />Pilihan Mobil Lengkap</span>
            <span><MapPin size={16} />Siap Surabaya & Sidoarjo</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, x: 28, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.72, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/hero-fleet-final.png"
            alt="Toyota Innova Reborn, Suzuki XL7, dan Toyota Hiace"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 58vw"
            className="hero-fleet-image"
          />
        </motion.div>
      </div>
    </section>
  );
}
