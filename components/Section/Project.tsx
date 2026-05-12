import { BriefcaseBusiness, FolderOpen, GraduationCap } from "lucide-react";
import LinkProject from "../ui/LinkProject";

const ProjectType = {
  E5: {
    title: "Projet E5",
    description: "Projet realisé en formation",
    link: "/projects/e5",
    icon: GraduationCap,
    color: "#FF00A1",
    className: "col-span-1",
  },
  E6: {
    title: "Projet E6",
    description: "Projet realisé en formation",
    link: "/projects/e6",
    icon: BriefcaseBusiness,
    color: "#0084FF",
    className: "col-span-1",
  },
  Perso: {
    title: "Projet Personnel",
    description: "Projet realisé en dehors de la formation",
    link: "/projects/perso",
    icon: FolderOpen,
    color: "#ff2c2c",
    className: "col-span-2",
  },
};

export default function Project() {
  return (
    <section
      className="max-w-7xl mx-auto relative flex flex-col gap-3"
      id="projects-list"
    >
      <h3 className="text-2xl font-bold">Mes Projets</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {Object.values(ProjectType).map((project) => (
          <LinkProject
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            icon={project.icon}
            color={project.color}
            className={project.className}
          />
        ))}
      </div>
    </section>
  );
}
