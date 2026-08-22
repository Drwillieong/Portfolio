import GridProject from "@/components/section/projets/GridProject";
import HeroCategoryProject from "@/components/section/projets/HeroProject";
import SwitchPages from "@/components/section/projets/SwitchPages";
import { projects_e5 } from "@/data/projects/e5";

export default function Projects() {
  return (
    <main className="max-w-220 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <SwitchPages />

      <HeroCategoryProject
        title="Course Projects"
        description="Discover the projects I completed as part of my coursework at City College of Calamba."
      />
      <GridProject projects={projects_e5} />
    </main>
  );
}
