/* eslint-disable react/no-unescaped-entities */

"use client";

import Link from "next/link";

export default function AboutProfile() {
  return (
    <section
      className="flex justify-start items-start gap-1.5 flex-col"
      id="about"
    >
      <h3 className="text-2xl font-bold">À Propos</h3>
      <p className="text-foreground text-sm font-normal">
        Moi c'est <TextStrong text="Alexis DE JESUS" />, étudiant en{" "}
        <TextLink text="BTS SIO" href="/education" />{" "}
        <TextLink text="option SLAM" href="/education" /> chez{" "}
        <TextLink text="Ynov Campus Paris" href="/education" />. Je code
        principalement du web, mais ce qui m'intéresse vraiment c'est de
        <TextStrong text="comprendre comment les choses fonctionnent" /> — pas
        juste les utiliser. Du coup je passe beaucoup de temps à tester des
        trucs, casser des trucs, et recommencer. Ce que je préfère c'est{" "}
        <TextStrong text="partir d'une idée un peu floue" /> et la mener jusqu'à
        quelque chose qui tourne vraiment. Voir un projet évoluer de zéro à
        quelque chose d'utilisable, c'est ce qui me donne envie de continuer.
      </p>
    </section>
  );
}

function TextStrong({ text }: { text: string }) {
  return <span className="text-foreground font-medium">{text}</span>;
}

function TextLink({ text, href }: { text: string; href?: string }) {
  return (
    <Link
      href={href || "#"}
      className="text-foreground font-medium underline-offset-2 underline"
    >
      {text}
    </Link>
  );
}
