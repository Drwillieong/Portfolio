import { ProjectProps } from "@/types/types";

export const projects_e6: ProjectProps[] = [
  {
    title: "HanapSarap",
    desc: "An online website where City College of Calamba students can find places to hang out or spend their vacant hours.",
    role: "Frontend Developer",
    stack: ["HTML", "CSS", "JavaScript"],
    list: {
      githubLink: "https://github.com/Drwillieong/GroupProject-HanapSarap",
      documentationLink: "",
      websiteLink: "https://hanap-sarap.netlify.app/",
    },
    image: ["/projets/school/images/hanapsarap.jpg"],
    status: "Completed",
    favorite: true,
  },
  {
    title: "Personal Portfolio Website",
    desc: "Personal interactive portfolio website built to display technical projects, experience, and credentials.",
    role: "Full-Stack Developer",
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    list: {
      githubLink: "https://github.com/Drwillieong",
      documentationLink: "",
      websiteLink: "https://kevinbolado.netlify.app/",
    },
    image: ["/projets/perso/images/kevinbolado.jpg"],
    status: "In progress",
    favorite: true,
  },
];
