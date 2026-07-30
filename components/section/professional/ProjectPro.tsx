import ProjectCardPro from "@/components/card/ProjectCardPro";
import TitleCategory from "@/components/layout/TitleCategory";
import { projects_perso } from "@/data/projects/perso";

export default function ProjectPro() {
  return (
    <TitleCategory id="projectspro" title="Mes Projets">
      {projects_perso.slice(0, 4).map((project, index) => (
        <ProjectCardPro
          key={index}
          title={project.title}
          techStack={project.stack}
          description={project.desc}
          url={{
            github: project.list.githubLink,
            docs: project.list.documentationLink,
            site: project.list.websiteLink,
          }}
        />
      ))}
    </TitleCategory>
  );
}
