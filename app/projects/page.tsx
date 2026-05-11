"use client";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/Navbar";
import { Section } from "@/components/layout/Section";
import TitlePage from "@/components/layout/TitlePage";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center text-4xl font-semibold bg-background text-foreground">
      <NavBar />

      <TitlePage
        title="Projets"
        description="Découvrez mes projets et réalisations !"
      />

      <Section className="w-full grid grid-cols-3 gap-4">
        <CardLink
          title="Projets personnels"
          description="Découvrez mes projets personnels et mes réalisations !"
          link="/projects/perso"
          button="Voir les détails"
        />
        <CardLink
          title="Projets E5"
          description="Découvrez mes projets de la spécialité E5 !"
          link="/projects/e5"
          button="Voir les détails"
        />
        <CardLink
          title="Projets E6"
          description="Découvrez mes projets de la spécialité E6 !"
          link="/projects/e6"
          button="Voir les détails"
        />
      </Section>

      <Footer />
    </div>
  );
}

export function CardLink({
  title,
  description,
  link,
  button,
}: {
  title: string;
  description: string;
  link: string;
  button: string;
}) {
  return (
    <div className="rounded-xl p-4 border border-outline-border hover:border-badge-border bg-background w-full flex flex-col gap-5 transition-all duration-500">
      <div className="flex flex-col gap-0.5">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm font-normal text-foreground-muted">
          {description}
        </p>
      </div>

      <Link
        href={link}
        className="bg-foreground hover:bg-foreground/70 cursor-pointer text-background font-medium w-full py-2 flex flex-row items-center justify-center text-sm rounded-md transition-all duration-500"
      >
        {button}
      </Link>
    </div>
  );
}
