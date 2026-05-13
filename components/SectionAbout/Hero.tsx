/* eslint-disable react/no-unescaped-entities */

"use client";

import Image from "next/image";

export default function HeroAbout() {
  return (
    <section className="flex justify-between items-center gap-4" id="home">
      <div className="flex flex-col gap-3 justify-start items-start">
        <h1 className="md:text-5xl text-3xl font-bold">Alexis DE JESUS</h1>
        <p className="text-muted-foreground text-base italic tracking-wide">
          "Je comprends mieux en cassant qu'en lisant."
        </p>
      </div>
      <div className="flex items-center justify-center shrink-0">
        <Image
          src="https://avatars.githubusercontent.com/u/150966588?v=4"
          alt="Image de profil Flytzi"
          width={150}
          height={150}
          className="rounded-full"
          loading="eager"
        />
      </div>
    </section>
  );
}
