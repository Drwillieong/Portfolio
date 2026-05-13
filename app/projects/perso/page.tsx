import GridProject from "@/components/SectionProject/GridProject";
import HeroCategoryProject from "@/components/SectionProject/HeroProject";
import SwitchPages from "@/components/SectionProject/SwitchPages";
import { projects_perso } from "@/data/project-perso";

export default function ProjectsPerso() {
  return (
    <main className="max-w-212 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <SwitchPages />

      <HeroCategoryProject
        title="Projets personnels"
        description="Découvrez mes projets personnels, réalisés en dehors de mes formations."
      />

      <GridProject projects={projects_perso} />
    </main>
  );
}
