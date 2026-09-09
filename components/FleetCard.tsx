import Image from "next/image";
import { ArrowRight, Gauge, UsersRound } from "lucide-react";
import type { FleetVehicle } from "@/lib/data";
import { whatsappUrl } from "@/lib/data";

export function FleetCard({ name, image, transmission, seats, price }: FleetVehicle) {
  const bookingMessage = `Halo Azbu Trans Jaya, saya melihat dari website dan ingin memesan unit armada ${name}. Apakah unit masih tersedia untuk jadwal sewa?`;

  return (
    <article className="fleet-card">
      <div className="fleet-image-wrap">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="fleet-image"
        />
      </div>

      <div className="fleet-card-body">
        <strong className="fleet-card-title">{name}</strong>

        <div className="fleet-card-specs">
          <div className="fleet-spec-badge">
            <span className="fleet-spec-icon-box">
              <Gauge size={14} />
            </span>
            <span className="fleet-spec-text">
              <span className="fleet-spec-label">Transmisi</span>
              <strong className="fleet-spec-val">{transmission}</strong>
            </span>
          </div>

          <div className="fleet-spec-badge">
            <span className="fleet-spec-icon-box">
              <UsersRound size={14} />
            </span>
            <span className="fleet-spec-text">
              <span className="fleet-spec-label">Kapasitas</span>
              <strong className="fleet-spec-val">{seats}</strong>
            </span>
          </div>
        </div>

        <div className="fleet-card-price-row">
          <div>
            <small>Harga Kendaraan</small>
            <b>Rp {price.toLocaleString("id-ID")} <span className="text-[11px] font-medium text-muted">/ Hari</span></b>
          </div>
          <span className="fleet-driver-addon-tag">+ Driver tersedia</span>
        </div>

        <a
          href={whatsappUrl(bookingMessage)}
          target="_blank"
          rel="noreferrer"
          className="fleet-card-cta-btn"
          aria-label={`Pesan ${name} melalui WhatsApp`}
        >
          Pesan Sekarang
          <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
}
