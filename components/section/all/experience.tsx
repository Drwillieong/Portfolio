import TitleCategory from "@/components/layout/TitleCategory";
import { ArticleXp, XpComp } from "@/components/xp";
import { workData } from "@/data/work";

export default function WorkExperience() {
  return (
    <TitleCategory
      id="last-xp-pro"
      title="Dernières expériences professionnelles"
    >
      <XpComp>
        {workData.slice(0, 3).map((experience, index) => (
          <ArticleXp
            key={index}
            company={experience.company}
            startDate={experience.startDate}
            endDate={experience.endDate}
            titleJob={experience.titleJob}
            stack={experience.stack}
            missions={experience.missions}
          />
        ))}
      </XpComp>
    </TitleCategory>
  );
}
