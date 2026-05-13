import GridProject from "@/components/SectionProject/GridProject";
import HeroCategoryProject from "@/components/SectionProject/HeroProject";
import SwitchPages from "@/components/SectionProject/SwitchPages";
import { projects_e5 } from "@/data/project-e5";

export default function ProjectsE5() {
  return (
    <main className="max-w-212 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <SwitchPages />

      <HeroCategoryProject
        title="Projets E5"
        description="Découvrez mes projets réalisés dans le cadre de ma formation E5, mettant en avant mes compétences."
      />

      <GridProject projects={projects_e5} />
    </main>
  );
}
