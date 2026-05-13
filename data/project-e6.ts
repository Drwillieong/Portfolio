import { ProjectProps } from "@/lib/type";

export const projects_e6: ProjectProps[] = [
  {
    id: 1,
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
      "/images/projects/e6/galerie_auto-1.png",
      "/images/projects/e6/galerie_auto-2.png",
    ],
    status: "À venir",
    favorite: true,
  },
  {
    id: 2,
    title: "StadiumCompany",
    desc: "Site web de gestion d'entreprise de stade. Permet de gérer les réservations, les clients et les services proposés par l'entreprise.",
    role: "Développeur Full Stack",
    stack: ["Vite.js", "Tailwind", "TypeScript", "Lucide"],
    list: {
      githubLink: "",
      documentationLink: "/files/projects/e6/StadiumCompany.pdf",
      websiteLink: "",
    },
    image: ["/images/projects/e6/StadiumCompany.png"],
    status: "À venir",
    favorite: true,
  },
];
