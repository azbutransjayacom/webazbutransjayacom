import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { whatsappUrl } from "@/lib/data";

export function CTA() {
  return (
    <section id="kontak" className="cta-section">
      <div className="container-page">
        <Reveal className="cta-banner cta-banner-large">
          <div className="cta-copy">
            <p className="section-kicker">Mulai perjalanan Anda</p>
            <h2>Siap untuk perjalanan Anda?</h2>
            <p>Sampaikan tanggal, tujuan, dan kendaraan yang Anda butuhkan.</p>
            <ButtonLink href={whatsappUrl()} icon={MessageCircle} variant="light" className="cta-button">
              Booking via WhatsApp
            </ButtonLink>
          </div>
          <div className="cta-vehicle" aria-hidden="true">
            <Image src="/images/hero-fleet-final.png" alt="" fill sizes="(max-width: 767px) 100vw, 48vw" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
