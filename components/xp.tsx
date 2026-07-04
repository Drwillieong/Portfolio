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
      <div className="mb-1 flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-baseline">
        <h3 className="text-base font-semibold text-foreground">{company}</h3>
        <span className="text-xs text-muted-foreground whitespace-nowrap">
          {startDate} - {endDate}
        </span>
      </div>
      <p className="mb-4 text-sm text-muted-foreground">
        {titleJob} - {stack}
      </p>
      <div className="flex flex-col gap-4">
        {missions.map((mission) => (
          <div key={mission.title} className="flex flex-col gap-2">
            <h4 className="text-sm font-medium text-foreground/90">
              {mission.title}
            </h4>
            <ul className="ml-1 flex list-inside flex-col gap-1.5">
              {mission.bulletPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start text-sm text-muted-foreground"
                >
                  <span className="mr-2 mt-1 block size-1 rounded-full bg-muted-foreground/65"></span>
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
