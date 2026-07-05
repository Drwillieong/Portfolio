import TitleCategory from "@/components/layout/TitleCategory";
import { ArticleXp, XpComp } from "@/components/xp";
import { educationData } from "@/data/school";

export default function SchoolExperience() {
  return (
    <TitleCategory id="school" title="Mes études">
      <XpComp>
        {educationData.slice(0, 3).map((school, index) => (
          <ArticleXp
            key={index}
            company={school.company}
            startDate={school.startDate}
            endDate={school.endDate}
            titleJob={school.titleJob}
            stack={school.stack}
            missions={school.missions}
          />
        ))}
      </XpComp>
    </TitleCategory>
  );
}
