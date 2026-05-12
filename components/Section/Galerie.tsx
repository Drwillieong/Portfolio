"use client";

import { imagesGalerie } from "@/data/galerie";
import Image from "next/image";

export default function Galerie() {
  return (
    <section className="max-w-7xl mx-auto relative flex flex-col gap-3" id="galerie">
      <h3 className="text-2xl font-bold">Galerie de mes moments</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[50px] md:auto-rows-[100px] gap-2">
        {imagesGalerie.map((item, index) => (
          <div
            key={index}
            // On injecte les classes de taille (size) ici
            className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-[1.02] duration-300 group ${item.size}`}
          >
            <Image
              src={item.src}
              alt={`Galerie moment ${index + 1}`}
              fill
              className="object-cover"
              loading="eager"
              sizes="(max-width: 768px) 50vw, 33vw"
            />

            {/* Petit bonus optionnel : un voile noir au survol */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
