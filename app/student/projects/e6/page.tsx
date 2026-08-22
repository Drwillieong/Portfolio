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
        description="Discover my projects completed as part of my E6 training, showcasing my skills."
      />
      <GridProject projects={projects_e6} />
    </main>
  );
}
