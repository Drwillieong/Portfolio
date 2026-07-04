import TitleCategory from "@/components/layout/TitleCategory";
import { ArticleXp, XpComp } from "@/components/xp";
import { workData } from "@/data/work";

export default function WorkExperience() {
  return (
    <TitleCategory id="experience" title="Experience">
      <XpComp>
        {workData.map((experience) => (
          <ArticleXp
            key={experience.company}
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
