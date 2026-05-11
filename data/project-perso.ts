import { ProjectProps } from "./project-e5";

export const projects_perso: ProjectProps[] = [
  {
    id: 1,
    title: "Interface garage FiveM",
    desc: "Interface utilisateur pour la gestion des garages dans les serveurs FiveM (GTA V). Permet aux joueurs de stocker, récupérer et gérer leurs véhicules en jeu.",
    color: "#FF7508",
    stack: ["Next.js", "Tailwind", "TypeScript", "Lucide", "Vercel"],
    list: [
      {
        title: "Documentation",
        link: "",
      },
      { title: "Site Web", link: "" },
      { title: "Github", link: "https://github.com/FlytziTv/sz-fivem" },
    ],
    image: [
      "/images/projects/perso/fivem-garage-1.png",
      "/images/projects/perso/fivem-garage-2.png",
      "/images/projects/perso/fivem-garage-3.png",
    ],
    status: "Terminé",
  },
  {
    id: 2,
    title: "Portfolio Alexis De Jesus",
    desc: "Hub digital full-stack conçu comme un dashboard de monitoring. Ce projet centralise mes expériences via une architecture modulaire en TypeScript, intégrant des API routes pour le contact.",
    color: "#",
    stack: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Framer Motion",
      "Lucide",
      "resend",
      "Vercel",
    ],
    list: [
      {
        title: "Documentation",
        link: "/files/projets/mission/portfolio.pdf",
      },
      { title: "Site Web", link: "" },
      { title: "Github", link: "https://github.com/FlytziTv/sz-slam" },
    ],
    image: ["/images/projects/perso/sz-folio.png"],
    status: "En cours",
  },
  {
    id: 3,
    title: "Absolute Stream",
    desc: "Application web de reviews de films et séries. Permet de noter, commenter et consulter les critiques via l'API TMDB.",
    color: "#006EFF",
    stack: ["Next.js", "Tailwind", "TypeScript", "TMDB API"],
    list: [
      {
        title: "Documentation",
        link: "",
      },
      { title: "Site Web", link: "" },
      { title: "Github", link: "https://github.com/FlytziTv/Absolute_Stream" },
    ],
    image: ["/images/projects/perso/absolute-stream.png"],
    status: "En cours",
  },
  {
    id: 4,
    title: "Nono's Cook",
    desc: "Site vitrine pour un particulier passionné de cuisine de gâteau. L'application présente ces créations, cela permet aussi de passer commande pour des gâteaux personnalisés.",
    color: "#91C2E8",
    stack: ["Next.js", "Tailwind", "TypeScript", "Lucide", "Vercel", "NeonDB"],
    list: [
      {
        title: "Documentation",
        link: "",
      },
      { title: "Site Web", link: "" },
      { title: "Github", link: "https://github.com/FlytziTv/cookbynolan" },
    ],
    image: [
      "/images/projects/perso/cookbynolan-1.png",
      "/images/projects/perso/cookbynolan-2.png",
      "/images/projects/perso/cookbynolan-3.png",
    ],
    status: "En cours",
  },
  {
    id: 5,
    title: "SZ Développement ",
    desc: "Site vitrine mon collectif de développeur informatique. L'application présente les différents projets réalisés par le collectif, ainsi que les membres qui le composent.",
    color: "##0070f3",
    stack: ["Next.js", "Tailwind", "TypeScript", "Lucide", "Vercel"],
    list: [
      {
        title: "Documentation",
        link: "",
      },
      { title: "Site Web", link: "https://www.sz-dev.fr/" },
      { title: "Github", link: "" },
    ],
    image: [
      "/images/projects/perso/sz-dev-1.png",
      "/images/projects/perso/sz-dev-2.png",
      "/images/projects/perso/sz-dev-3.png",
    ],
    status: "Terminé",
  },
];
