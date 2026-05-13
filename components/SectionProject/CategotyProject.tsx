import { MoveRight } from "lucide-react";

import Link from "next/link";
import ProjectCard from "../ui/CardProject";

import { projects_e5 } from "@/data/project-e5";
import { projects_e6 } from "@/data/project-e6";
import { projects_perso } from "@/data/project-perso";

export default function CategoryProject() {
  const categories = [
    {
      title: "Projets E5",
      link: "/projects/e5",
      data: projects_e5.filter((project) => project.favorite),
    },
    {
      title: "Projets E6",
      link: "/projects/e6",
      data: projects_e6.filter((project) => project.favorite),
    },
    {
      title: "Projets personnels",
      link: "/projects/perso",
      data: projects_perso.filter((project) => project.favorite),
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto relative flex flex-col gap-10"
      id="projects-category"
    >
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Link
            href={category.link}
            className="flex flex-row items-center justify-start gap-4 group"
          >
            <h3 className="text-2xl font-bold">{category.title}</h3>

            <p className="flex flex-row items-center gap-1 text-sm text-muted-foreground -translate-x-1.5 transition-all duration-500 ease-in-out group-hover:translate-x-0">
              En voir plus
              <MoveRight size={20} />
            </p>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {category.data.map((project) => (
              <ProjectCard
                key={project.id}
                imageSrc={project.image?.[0] || ""}
                title={project.title}
                description={project.desc}
                role={project.role}
                stacks={project.stack}
                list={project.list}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
