import GridProject from "@/components/section/projets/GridProject";
import HeroCategoryProject from "@/components/section/projets/HeroProject";
import SwitchPages from "@/components/section/projets/SwitchPages";
import { projects_perso } from "@/data/projects/perso";

export default function Projects() {
  return (
    <main className="max-w-220 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <SwitchPages />

      <HeroCategoryProject
        title="Projets personnels"
        description="Découvrez mes projets personnels, réalisés en dehors de mes formations."
      />
      <GridProject projects={projects_perso} />
    </main>
  );
}
