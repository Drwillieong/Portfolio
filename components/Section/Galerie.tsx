"use client";

import { imagesGalerie } from "@/data/galerie";
import Image from "next/image";

export default function Galerie() {
  return (
    <section
      className="max-w-7xl mx-auto relative flex flex-col gap-3"
      id="galerie"
    >
      <h3 className="text-2xl font-bold">Galerie de mes moments</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[100px] md:auto-rows-[120px] gap-3">
        {imagesGalerie.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl shadow-sm cursor-pointer 
              transition-all duration-500 hover:scale-[1.01] hover:shadow-xl group 
              ${item.size} 
              /* Sécurité : sur très petit écran, on peut forcer le span-1 si besoin */
              col-span-1 
              ${item.size.includes("col-span-2") ? "md:col-span-2" : ""}
            `}
          >
            <Image
              src={item.src}
              alt={`Galerie moment ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />

            {/* Overlay plus élégant */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
