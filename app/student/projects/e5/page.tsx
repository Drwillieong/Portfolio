import GridProject from "@/components/section/projets/GridProject";
import HeroCategoryProject from "@/components/section/projets/HeroProject";
import SwitchPages from "@/components/section/projets/SwitchPages";
import { projects_e5 } from "@/data/projects/e5";

export default function Projects() {
  return (
    <main className="max-w-220 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <SwitchPages />

      <HeroCategoryProject
        title="Projets E5"
        description="Découvrez mes projets réalisés dans le cadre de ma formation E5, mettant en avant mes compétences."
      />
      <GridProject projects={projects_e5} />
    </main>
  );
}
