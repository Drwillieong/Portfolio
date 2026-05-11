"use client";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/Navbar";
import Project from "@/components/layout/Project";
import { Section } from "@/components/layout/Section";
import TitlePage from "@/components/layout/TitlePage";
import { projects_e5 } from "@/data/project-e5";

export default function ProjectsE5() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center text-4xl font-semibold bg-background text-foreground">
      <NavBar />

      <TitlePage
        title="Projets E5"
        description="Découvrez mes projets et réalisations E5 !"
      />

      <Section className="flex flex-col gap-18 w-full">
        {projects_e5.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.desc}
            color={project.color}
            list={project.list}
            stack={[...project.stack]}
            imageMinia1={project.image[1]}
            imageLarge={project.image[0]}
            imageMinia2={project.image[2]}
          />
        ))}
      </Section>

      <Footer />
    </div>
  );
}
