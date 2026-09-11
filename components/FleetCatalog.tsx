"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FleetCard } from "@/components/FleetCard";
import { Reveal } from "@/components/Reveal";
import type { FleetVehicle } from "@/lib/data";

interface FleetCatalogProps {
  fleet: FleetVehicle[];
  categories: string[];
}

export function FleetCatalog({ fleet, categories }: FleetCatalogProps) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredFleet =
    activeCategory === "Semua"
      ? fleet
      : fleet.filter(
          (vehicle) =>
            vehicle.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section id="armada" className="fleet-section fleet-catalog-section">
      <div className="container-page fleet-catalog-container">
        <Reveal className="fleet-catalog-heading">
          <div>
            <p className="section-kicker">Armada rental mobil</p>
            <h2>
              Pilih Kendaraan
              <br />
              Sesuai Perjalanan Anda
            </h2>
          </div>
          <p>
            Pilihan unit untuk perjalanan keluarga, bisnis, airport, wisata, dan rombongan.
          </p>
          <a href="#kontak">
            Lihat semua armada <ArrowRight size={17} />
          </a>
        </Reveal>

        <div className="fleet-tabs" role="tablist" aria-label="Kategori kendaraan">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const count =
              category === "Semua"
                ? fleet.length
                : fleet.filter(
                    (v) => v.category.toLowerCase() === category.toLowerCase()
                  ).length;

            return (
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                className={isActive ? "active" : ""}
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                <span>{category}</span>
                <span className="fleet-tab-badge">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="fleet-track no-scrollbar" role="tabpanel">
          <AnimatePresence mode="popLayout">
            {filteredFleet.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, delay: (index % 4) * 0.03 }}
              >
                <FleetCard {...vehicle} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
