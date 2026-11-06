import TitleCategory from "@/components/layout/TitleCategory";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectStud() {
  return (
    <TitleCategory id="projectstud" title="My Projects">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <CardProjectStud
          url="/student/projects/e5"
          title="Course Projects"
          description="Projects completed during my coursework"
        />

        <CardProjectStud
          url="/student/projects/perso"
          title="Personal Projects"
          description="Projects built outside of my coursework"
        />
      </div>
    </TitleCategory>
  );
}

function CardProjectStud({
  url,
  title,
  description,
}: {
  url: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={url}
      className="group relative rounded-xl border border-border/80 bg-background hover:border-foreground/10 px-4 py-3 cursor-pointer transition-all duration-300"
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
