import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-250 mx-auto py-12 sm:py-24 px-6 h-screen flex flex-col items-center justify-center">
      <section
        className="flex flex-col items-center gap-4 text-center"
        id="menustart"
      >
        <h1 className="text-5xl font-bold tracking-tight">
          Bienvenue sur mon portfolio
        </h1>
        <p className="max-w-xl text-balance text-muted-foreground sm:text-md">
          Il existe deux versions de ce portfolio : une version{" "}
          <span className="font-medium text-foreground">professionnelle</span>,
          axée sur mes compétences et mes projets, et une version{" "}
          <span className="font-medium text-foreground">étudiante</span>, qui
          détaille mes études, mon école, mon entreprise et mes projets de
          cours.
        </p>

        <div className="flex flex-row gap-3">
          <Link href="/student">
            <Button size="lg" className="gap-2 rounded-md">
              <GraduationCap className="size-4" />
              Étudiants
            </Button>
          </Link>
          <Link href="/professional">
            <Button variant="outline" size="lg" className="gap-2 rounded-md">
              <Briefcase className="size-4" />
              Professionnels
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
