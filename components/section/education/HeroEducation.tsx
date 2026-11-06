/* eslint-disable react/no-unescaped-entities */

"use client";

import Image from "next/image";

export default function HeroEducation() {
  return (
    <section
      className="flex md:flex-row flex-col-reverse justify-between items-start md:items-center gap-4"
      id="home"
    >
      <div className="flex flex-col gap-3 justify-start items-start">
        <h1 className="md:text-5xl text-3xl font-bold">Kevin Corpuz Bolado</h1>
        <p className="text-muted-foreground text-base italic tracking-wide">
          "Hire niyo nako plzzzz ^^ 
         </p>
      </div>
      <div className="flex items-center justify-center shrink-0">
        <Image
          src="https://github.com/Drwillieong.png"
          alt="Image de profil Kevin Corpuz Bolado"
          width={140}
          height={140}
          className="rounded-full"
          loading="eager"
        />
      </div>
    </section>
  );
}
