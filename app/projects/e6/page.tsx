import GridProject from "@/components/SectionProject/GridProject";
import HeroCategoryProject from "@/components/SectionProject/HeroProject";
import SwitchPages from "@/components/SectionProject/SwitchPages";
import { projects_e6 } from "@/data/project-e6";

export default function ProjectsE6() {
  return (
    <main className="max-w-212 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <SwitchPages />

      <HeroCategoryProject
        title="Projets E6"
        description="Découvrez mes projets réalisés dans le cadre de ma formation E6, mettant en avant mes compétences."
      />

      <GridProject projects={projects_e6} />
    </main>
  );
}
