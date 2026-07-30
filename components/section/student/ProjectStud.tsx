import TitleCategory from "@/components/layout/TitleCategory";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectStud() {
  return (
    <TitleCategory id="projectstud" title="Mes Projets">
      <div className="grid grid-cols-2 gap-3">
        <CardProjectStud
          url="/student/project/e5"
          title="Projet E5"
          description="Projet réalisé en formation"
        />
        <CardProjectStud
          url="/student/project/e6"
          title="Projet E6"
          description="Projet réalisé en formation"
        />
        <CardProjectStud
          url="/student/project/e5"
          colspan={2}
          title="Projet Personnel"
          description="Projet réalisé en dehors de la formation"
        />
      </div>
    </TitleCategory>
  );
}

function CardProjectStud({
  url,
  colspan = 1,
  title,
  description,
}: {
  url: string;
  colspan?: number;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={url}
      className="group relative rounded-xl border border-border/80 bg-background hover:border-foreground/10 px-4 py-3 cursor-pointer transition-all duration-300"
      style={{ gridColumn: `span ${colspan}` }}
    >
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      <span className="text-xs text-muted-foreground">{description}</span>

      <ArrowUpRight
        size={14}
        className="absolute top-3 right-3 text-foreground/40 group-hover:text-foreground/70 transition-colors duration-300"
      />
    </Link>
  );
}
