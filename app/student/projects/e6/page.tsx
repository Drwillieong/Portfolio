import GridProject from "@/components/section/projets/GridProject";
import HeroCategoryProject from "@/components/section/projets/HeroProject";
import SwitchPages from "@/components/section/projets/SwitchPages";
import { projects_e6 } from "@/data/projects/e6";

export default function Projects() {
  return (
    <main className="max-w-220 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <SwitchPages />

      <HeroCategoryProject
        title="Projets E6"
        description="Découvrez mes projets réalisés dans le cadre de ma formation E6, mettant en avant mes compétences."
      />
      <GridProject projects={projects_e6} />
    </main>
  );
}
