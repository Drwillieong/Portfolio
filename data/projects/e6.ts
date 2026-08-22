import { ProjectProps } from "@/types/types";

export const projects_e6: ProjectProps[] = [
  {
    title: "Galerie Auto",
    desc: "Car gallery web application built with Next.js + React + TypeScript + Tailwind CSS. It displays vehicles with their information (brand, model, year, fuel, price, etc.).",
    role: "Full Stack Developer",
    stack: ["React", "Next.js", "Tailwind", "TypeScript", "Lucide"],
    list: {
      githubLink:
        "https://github.com/FlytziTv/Projet-bts-sio/tree/main/galerie_auto",
      documentationLink: "",
      websiteLink: "",
    },
    image: [
      "/projets/e6/images/galerie_auto-1.png",
      "/projets/e6/images/galerie_auto-2.png",
    ],
    status: "Coming soon",
    favorite: true,
  },

  {
    title: "StadiumCompany",
    desc: "Stadium company management website. Allows managing reservations, clients and the services offered by the company.",
    role: "Full Stack Developer",
    stack: ["Vite.js", "Tailwind", "TypeScript", "Lucide"],
    list: {
      githubLink: "",
      documentationLink: "/files/projects/e6/StadiumCompany.pdf",
      websiteLink: "",
    },
    image: ["/projets/e6/images/StadiumCompany.png"],
    status: "Coming soon",
    favorite: false,
  },

  {
    title: "Absolute Stream",
    desc: "Web application for reviewing movies and series. Allows you to rate, comment and view reviews via the TMDB API.",
    role: "Full Stack Developer",
    stack: ["Next.js", "Tailwind", "TypeScript", "TMDB API"],
    list: {
      githubLink: "https://github.com/FlytziTv/Absolute_Stream",
      documentationLink: "/files/projects/e6/absolute-stream.pdf",
      websiteLink: "https://absolute-stream.vercel.app/",
    },
    image: ["/projets/perso/images/absolute-stream.png"],
    status: "In progress",
    favorite: true,
  },
];
