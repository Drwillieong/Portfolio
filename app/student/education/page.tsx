import HeroEducation from "@/components/section/education/HeroEducation";
import CompXp from "@/components/xp";
import { certificationData } from "@/data/user";

export default function Education() {
  return (
    <main className="max-w-220 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <HeroEducation />

      <CompXp
        data={certificationData}
        id="certifications"
        title="Mes Certifications"
      />
    </main>
  );
}
