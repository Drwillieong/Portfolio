"use client";

import Link from "next/link";

export default function HeroCategoryProject() {
  return (
    <section className="flex justify-center items-center gap-4">
      <div className="w-full flex flex-col gap-2 items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Mes projets favoris
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Découvrez une sélection de mes travaux les plus significatifs.
        </p>
      </div>
    </section>
  );
}
