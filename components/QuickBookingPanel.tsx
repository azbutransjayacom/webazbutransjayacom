"use client";

import { useEffect, useRef, useState } from "react";
import { CarFront, Check, ChevronDown, MapPin, MessageCircle, UserCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { fleet, whatsappUrl, driverPricing } from "@/lib/data";

const driverOptions = [
  { id: "none", label: "Tanpa Driver (Lepas Kunci)", tag: "Tanpa Driver" },
  { id: "city", label: `Driver Dalam Kota (+Rp${driverPricing.city.toLocaleString("id-ID")})`, tag: "Driver Dalam Kota" },
  { id: "outOfCity", label: `Driver Luar Kota (+Rp${driverPricing.outOfCity.toLocaleString("id-ID")})`, tag: "Driver Luar Kota" },
  { id: "outOfRegion", label: "Driver Luar Daerah (+Rp50rb–100rb, menyesuaikan tujuan)", tag: "Driver Luar Daerah" },
];

const areaOptions = [
  { id: "surabaya-sidoarjo", label: "Surabaya & Sidoarjo (Dalam Kota)", tag: "Surabaya & Sidoarjo" },
  { id: "luar-daerah", label: "Luar Kota / Luar Daerah", tag: "Luar Daerah" },
];

export function QuickBookingPanel() {
  const [selectedVehicle, setSelectedVehicle] = useState(fleet[0].name);
  const [selectedDriver, setSelectedDriver] = useState("none");
  const [selectedArea, setSelectedArea] = useState("surabaya-sidoarjo");

  const [showVehicleDropdown, setShowVehicleDropdown] = useState(false);
  const [showDriverDropdown, setShowDriverDropdown] = useState(false);
  const [showAreaDropdown, setShowAreaDropdown] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setShowVehicleDropdown(false);
        setShowDriverDropdown(false);
        setShowAreaDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeDriverObj = driverOptions.find((d) => d.id === selectedDriver) || driverOptions[0];
  const activeAreaObj = areaOptions.find((a) => a.id === selectedArea) || areaOptions[0];

  let driverText = "";
  if (selectedDriver === "none") {
    driverText = "Tanpa Driver";
  } else if (selectedDriver === "city") {
    driverText = "Driver Dalam Kota";
  } else if (selectedDriver === "outOfCity") {
    driverText = "Driver Luar Kota";
  } else if (selectedDriver === "outOfRegion") {
    driverText = "Driver Luar Daerah";
  }

  const composedMessage = `Halo Kak, saya ingin rental ${selectedVehicle} dengan ${driverText} untuk area ${activeAreaObj.label}. Bisa dibantu cek ketersediaan dan total biayanya?`;

  return (
    <section className="quick-booking-wrap" aria-label="Mulai perjalanan Anda">
      <div className="container-page" ref={panelRef}>
        <Reveal className="quick-booking-panel">
          <div className="quick-booking-intro">
            <strong>Mulai Perjalanan Anda</strong>
            <span>Pilih layanan dan armada, tentukan opsi driver, lalu cek ketersediaan via WhatsApp.</span>
          </div>

          <div className="quick-booking-fields interactive-booking-fields">
            {/* Field 1: Custom Dropdown Kendaraan */}
            <div className="booking-field-select-wrap">
              <button
                type="button"
                className="booking-select-btn"
                onClick={() => {
                  setShowVehicleDropdown(!showVehicleDropdown);
                  setShowDriverDropdown(false);
                  setShowAreaDropdown(false);
                }}
                aria-label="Pilih unit armada"
                aria-expanded={showVehicleDropdown}
              >
                <CarFront size={18} />
                <span className="booking-select-text">
                  <small>Kendaraan</small>
                  <strong>{selectedVehicle}</strong>
                </span>
                <ChevronDown size={15} className={`booking-chevron ${showVehicleDropdown ? "rotated" : ""}`} />
              </button>

              {showVehicleDropdown && (
                <div className="booking-dropdown-menu">
                  {fleet.map((car) => (
                    <button
                      key={car.name}
                      type="button"
                      className={`booking-dropdown-item ${selectedVehicle === car.name ? "active" : ""}`}
                      onClick={() => {
                        setSelectedVehicle(car.name);
                        setShowVehicleDropdown(false);
                      }}
                    >
                      <span className="booking-item-name">{car.name}</span>
                      <span className="booking-item-price">Rp{car.price.toLocaleString("id-ID")}/hr</span>
                      {selectedVehicle === car.name && <Check size={14} className="booking-check-icon" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 2: Custom Dropdown Driver / Tanpa Driver */}
            <div className="booking-field-select-wrap">
              <button
                type="button"
                className="booking-select-btn"
                onClick={() => {
                  setShowDriverDropdown(!showDriverDropdown);
                  setShowVehicleDropdown(false);
                  setShowAreaDropdown(false);
                }}
                aria-label="Pilih layanan driver"
                aria-expanded={showDriverDropdown}
              >
                <UserCheck size={18} />
                <span className="booking-select-text">
                  <small>Layanan Driver</small>
                  <strong>{activeDriverObj.tag}</strong>
                </span>
                <ChevronDown size={15} className={`booking-chevron ${showDriverDropdown ? "rotated" : ""}`} />
              </button>

              {showDriverDropdown && (
                <div className="booking-dropdown-menu">
                  {driverOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`booking-dropdown-item ${selectedDriver === opt.id ? "active" : ""}`}
                      onClick={() => {
                        setSelectedDriver(opt.id);
                        setShowDriverDropdown(false);
                      }}
                    >
                      <span className="booking-item-name">{opt.label}</span>
                      {selectedDriver === opt.id && <Check size={14} className="booking-check-icon" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 3: Custom Dropdown Area Surabaya & Sidoarjo / Luar Daerah */}
            <div className="booking-field-select-wrap">
              <button
                type="button"
                className="booking-select-btn"
                onClick={() => {
                  setShowAreaDropdown(!showAreaDropdown);
                  setShowVehicleDropdown(false);
                  setShowDriverDropdown(false);
                }}
                aria-label="Pilih area perjalanan"
                aria-expanded={showAreaDropdown}
              >
                <MapPin size={18} />
                <span className="booking-select-text">
                  <small>Area / Tujuan</small>
                  <strong>{activeAreaObj.tag}</strong>
                </span>
                <ChevronDown size={15} className={`booking-chevron ${showAreaDropdown ? "rotated" : ""}`} />
              </button>

              {showAreaDropdown && (
                <div className="booking-dropdown-menu">
                  {areaOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`booking-dropdown-item ${selectedArea === opt.id ? "active" : ""}`}
                      onClick={() => {
                        setSelectedArea(opt.id);
                        setShowAreaDropdown(false);
                      }}
                    >
                      <span className="booking-item-name">{opt.label}</span>
                      {selectedArea === opt.id && <Check size={14} className="booking-check-icon" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field 4: Tombol Cek Ketersediaan via WhatsApp */}
            <a
              href={whatsappUrl(composedMessage)}
              target="_blank"
              rel="noreferrer"
              className="quick-booking-action"
              aria-label="Cek ketersediaan via WhatsApp"
            >
              <MessageCircle size={18} />
              <span>Cek Ketersediaan</span>
            </a>
          </div>

          {/* Driver pricing note */}
          <div className="quick-booking-driver-note">
            <span className="driver-note-pill">
              <strong>Tarif Driver:</strong> Dalam Kota Rp200.000 · Luar Kota Rp250.000 · Luar Daerah +Rp50.000–Rp100.000 (menyesuaikan tujuan)
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
