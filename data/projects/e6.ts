import { ProjectProps } from "@/types/types";

export const projects_e6: ProjectProps[] = [
  {
    title: "Galerie Auto",
    desc: "Application web de galerie automobile développée avec Next.js + React + TypeScript + Tailwind CSS. Elle permet d’afficher des véhicules avec leurs informations (marque, modèle, année, carburant, prix, etc.).",
    role: "Développeur Full Stack",
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
    status: "À venir",
    favorite: true,
  },

  {
    title: "StadiumCompany",
    desc: "Site web de gestion d'entreprise de stade. Permet de gérer les réservations, les clients et les services proposés par l'entreprise.",
    role: "Développeur Full Stack",
    stack: ["Vite.js", "Tailwind", "TypeScript", "Lucide"],
    list: {
      githubLink: "",
      documentationLink: "/files/projects/e6/StadiumCompany.pdf",
      websiteLink: "",
    },
    image: ["/projets/e6/images/StadiumCompany.png"],
    status: "À venir",
    favorite: false,
  },

  {
    title: "Absolute Stream",
    desc: "Application web de reviews de films et séries. Permet de noter, commenter et consulter les critiques via l'API TMDB.",
    role: "Développeur Full Stack",
    stack: ["Next.js", "Tailwind", "TypeScript", "TMDB API"],
    list: {
      githubLink: "https://github.com/FlytziTv/Absolute_Stream",
      documentationLink: "/files/projects/e6/absolute-stream.pdf",
      websiteLink: "https://absolute-stream.vercel.app/",
    },
    image: ["/projets/perso/images/absolute-stream.png"],
    status: "En cours",
    favorite: true,
  },
];
