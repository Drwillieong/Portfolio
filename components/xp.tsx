import { ArticleXpProps } from "@/types/types";

export function XpComp({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col gap-10">
      {/* Barre latéral */}
      <div className="absolute bottom-0 left-0.75 top-2 w-0.5 bg-border/60" />
      {children}
    </div>
  );
}

export function ArticleXp({
  company,
  startDate,
  endDate,
  titleJob,
  stack,
  missions,
}: ArticleXpProps) {
  return (
    <article className="relative pl-7">
      <span className="absolute -left-px top-1.5 size-2.5 rounded-full border-2 border-foreground bg-background"></span>
      <div className="flex flex-row items-start justify-between gap-4 mb-4">
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-base font-semibold text-foreground">{company}</h3>
          <p className="text-sm text-muted-foreground">
            {titleJob} - {stack}
          </p>
        </div>
        <span className="text-xs text-muted-foreground whitespace-nowrap">
          {startDate} - {endDate}
        </span>
      </div>

      {/* Liste des missions */}
      <div className="flex flex-col gap-4">
        {missions.map((mission) => (
          <div key={mission.title} className="flex flex-col gap-2">
            {/* Titre de la mission */}
            <h4 className="text-sm font-medium text-foreground/90">
              {mission.title}
            </h4>
            {/* Points de la mission */}
            <ul className="ml-1 flex list-inside flex-col gap-1.5">
              {mission.bulletPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  {/* Point */}
                  <span className="flex h-5 w-2 items-center justify-center shrink-0">
                    <div className="size-1 rounded-full bg-muted-foreground/65" />
                  </span>
                  <span className="flex-1 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
