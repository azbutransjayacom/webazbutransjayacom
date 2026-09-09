import Image from "next/image";
import { ArrowRight, CalendarDays, CarFront, Check, Clock3, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { BookingStep } from "@/components/BookingStep";
import { CTA } from "@/components/CTA";
import { FAQItem } from "@/components/FAQ";
import { FeatureCard } from "@/components/FeatureCard";
import { FleetCard } from "@/components/FleetCard";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MobileWhatsapp } from "@/components/MobileWhatsapp";
import { Navbar } from "@/components/Navbar";
import { QuickBookingPanel } from "@/components/QuickBookingPanel";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import {
  benefits,
  bookingSteps,
  business,
  demoAreas,
  experienceBenefits,
  faqs,
  fleet,
  featuredSpecs,
  schemaFaq,
  services,
  whatsappUrl,
} from "@/lib/data";

const categories = ["Semua", "City Car", "MPV", "Premium", "Minibus"];

export default function Home() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "AutoRental",
      name: business.name,
      legalName: business.legalName,
      url: business.baseUrl,
      areaServed: ["Surabaya", "Sidoarjo"],
      description: "Azbu Trans Jaya menyediakan layanan rental mobil untuk kebutuhan perjalanan di Surabaya dan Sidoarjo dengan berbagai pilihan armada.",
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: schemaFaq },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickBookingPanel />
        <TrustStrip />
        <FleetSection />
        <ServicesSection />
        <FeaturedVehicle />
        <CoverageSection />
        <ExperienceSection />
        <BookingSection />
        <FAQSection />
        <CTA />
      </main>
      <Footer />
      <MobileWhatsapp />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }} />
    </>
  );
}

function ServicesSection() {
  return (
    <section id="layanan" className="services-section">
      <div className="container-page">
        <Reveal className="center-heading services-heading">
          <p className="section-kicker">Pilihan Layanan</p>
          <h2>Layanan Rental & Driver<br />Sesuai Kebutuhan Perjalanan</h2>
          <p className="services-desc">
            Tersedia pilihan sewa lepas kunci maupun rental lengkap dengan pengemudi profesional untuk kenyamanan maksimal.
          </p>
        </Reveal>
        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="trust-strip-wrap" aria-label="Keunggulan Azbu Trans Jaya">
      <div className="container-page">
        <Reveal className="trust-strip">
          {benefits.map(({ title, description, icon: Icon }) => (
            <div key={title}><Icon size={23} /><span><strong>{title}</strong><small>{description}</small></span></div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function FleetSection() {
  return (
    <section id="armada" className="fleet-section fleet-catalog-section">
      <div className="container-page fleet-catalog-container">
        <Reveal className="fleet-catalog-heading">
          <div><p className="section-kicker">Armada rental mobil</p><h2>Pilih Kendaraan<br />Sesuai Perjalanan Anda</h2></div>
          <p>Pilihan unit untuk perjalanan keluarga, bisnis, airport, wisata, dan rombongan.</p>
          <a href="#kontak">Lihat semua armada <ArrowRight size={17} /></a>
        </Reveal>
        <div className="fleet-tabs" aria-label="Kategori kendaraan">
          {categories.map((category, index) => <button type="button" className={index === 0 ? "active" : ""} key={category}>{category}</button>)}
        </div>
        <div className="fleet-track no-scrollbar">
          {fleet.map((vehicle, index) => <Reveal key={vehicle.name} delay={(index % 4) * 0.035}><FleetCard {...vehicle} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function FeaturedVehicle() {
  return (
    <section className="featured-section">
      <div className="container-page featured-grid">
        <Reveal className="featured-media">
          <Image src="/images/innova-dark.png" alt="Toyota Innova Reborn CVT warna hitam" fill sizes="(max-width: 767px) 100vw, 50vw" className="featured-image" />
        </Reveal>
        <Reveal className="featured-copy" delay={0.08}>
          <p className="featured-eyebrow">Premium Armada</p>
          <h2>Innova Reborn CVT</h2>
          <p className="featured-description">Kabin lega dan nyaman untuk kebutuhan keluarga, perjalanan bisnis, maupun perjalanan luar kota.</p>
          <div className="featured-specs">
            {featuredSpecs.map(({ label, icon: Icon }) => <div key={label}><Icon size={31} strokeWidth={1.55} /><span>{label}</span></div>)}
          </div>
          <a className="featured-cta" href={whatsappUrl("Halo Azbu Trans Jaya, saya melihat dari website dan ingin menanyakan ketersediaan armada Innova Reborn CVT.")}><MessageCircle size={18} />Tanyakan Ketersediaan<ArrowRight size={18} /></a>
        </Reveal>
      </div>
    </section>
  );
}

function CoverageSection() {
  return (
    <section id="tentang" className="coverage-section">
      <div className="container-page coverage-grid">
        <Reveal className="coverage-map">
          <Image src="/images/service-map-v2.png" alt="Peta area layanan Azbu Trans Jaya" fill sizes="(max-width: 767px) 100vw, 45vw" />
          <div className="coverage-pins" aria-hidden="true">
            {demoAreas.map((area) => <span key={area.label} style={{ left: area.left, top: area.top }}><MapPin size={16} fill="currentColor" />{area.label}</span>)}
          </div>
        </Reveal>
        <Reveal className="coverage-copy" delay={0.08}>
          <p className="section-kicker">Area layanan Azbu</p>
          <h2>Rental Mobil Surabaya untuk Perjalanan yang Fleksibel</h2>
          <p>Detail titik jemput dan tujuan dibahas terlebih dahulu agar kendaraan yang dipilih sesuai kebutuhan perjalanan Anda.</p>
          <div className="coverage-list">
            {demoAreas.map((area) => <span key={area.label}><Check size={15} />{area.label}</span>)}
          </div>
          <a href={whatsappUrl()} className="coverage-cta">Hubungi Azbu Trans Jaya <ArrowRight size={17} /></a>
        </Reveal>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="keunggulan" className="experience-section">
      <div className="container-page">
        <Reveal className="center-heading experience-heading">
          <p className="section-kicker">Kenapa memilih kami</p>
          <h2>Pengalaman Rental<br />Mudah, Aman & Nyaman</h2>
        </Reveal>
        <div className="benefit-grid experience-grid">
          {experienceBenefits.map((benefit, index) => <Reveal key={benefit.title} delay={index * 0.04}><FeatureCard {...benefit} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section className="booking-section booking-flow-section">
      <div className="container-page">
        <Reveal className="center-heading booking-heading"><p className="section-kicker">Cara sewa</p><h2>Mudah dalam 4 Langkah</h2></Reveal>
        <div className="booking-grid">
          {bookingSteps.map((step, index) => <Reveal key={step.title} delay={index * 0.04}><BookingStep {...step} index={index} isLast={index === bookingSteps.length - 1} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="faq-section faq-polish-section">
      <div className="container-page">
        <Reveal className="center-heading faq-heading">
          <p className="section-kicker">Pertanyaan umum</p>
          <h2>Pertanyaan yang Sering Diajukan</h2>
          <p>Jawaban umum sebelum Anda menghubungi tim Azbu Trans Jaya.</p>
        </Reveal>
        <div className="faq-grid">
          <div>{faqs.slice(0, 3).map((faq) => <FAQItem key={faq.question} {...faq} />)}</div>
          <div>{faqs.slice(3).map((faq) => <FAQItem key={faq.question} {...faq} />)}</div>
        </div>
      </div>
    </section>
  );
}
