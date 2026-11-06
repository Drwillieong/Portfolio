import GridProject from "@/components/section/projets/GridProject";
import HeroCategoryProject from "@/components/section/projets/HeroProject";
import SwitchPages from "@/components/section/projets/SwitchPages";
import { projects_e6 } from "@/data/projects/e6";

export default function Projects() {
  return (
    <main className="max-w-220 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <SwitchPages />

      <HeroCategoryProject
        title="Web Applications"
        description="Discover the web applications I built using modern frameworks and tools."
      />
      <GridProject projects={projects_e6} />
    </main>
  );
}
