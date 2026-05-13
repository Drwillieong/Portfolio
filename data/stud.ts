export const ynov_data = {
  name: "Ynov Campus Paris",
  location: "Nanterre",
  type: "École d'informatique",
  image: "/images/education/ynov.jpg",
  start: "Sept 2025",
  end: "Juin 2027",
  description:
    "École dédiée aux métiers du numérique avec une pédagogie basée sur des projets réels et l'interdisciplinarité. Insertion professionnelle via l'alternance.",
  specialisations: [
    "Informatique & Développement",
    "Cybersécurité & Réseaux",
    "IA & Data Science",
    "Création & Digital Design",
    "3D, Animation & Jeux Vidéo",
    "Marketing & Communication",
    "Audiovisuel & Son",
    "Architecture Numérique",
  ],
};

export const team6_data = {
  name: "6Team",
  location: "Paris",
  type: "Stage",
  image: "/images/work/6team.jpg",
  start: "Juillet 2026",
  end: "Août 2026",
  description:
    "Développement et conception d'une application web complète sous Angular, Node.js et PostgreSQL. Sécurisation des échanges via API REST et intégration de services externes. Manipulation d'objets 3D interactifs et intégration d'environnements de visite virtuelle.",
  stacks: ["Angular", "Node.js", "PostgreSQL", "API REST", "3D", "Matterport"],
};

export const bts_data = {
  name: "BTS SIO",
  designation: "Services Informatiques aux Organisations",
  time: "2 ans",

  description:
    "Ce cursus d'excellence en deux ans forme des techniciens supérieurs capables de gérer les enjeux de la transformation numérique. Il combine expertise technique, cybersécurité et gestion de projets au service des entreprises.",
  options: [
    "SLAM (Solutions Logicielles et Applications Métiers)",
    "SISR (Solutions d'Infrastructure, Systèmes et Réseaux)",
  ],
};

export const bts_option_data = [
  {
    id: 1,
    name: "SLAM ",
    designation: "Solutions Logicielles et Applications Métiers",
    description:
      "Spécialisation dans la conception et la maintenance de solutions applicatives. Focus sur l'architecture logicielle et le développement web & mobile.",
    jobs: [
      "Développeur Fullstack",
      "Analyste d'applications",
      "Développeur Mobile",
      "Webmaster technique",
    ],
    url: "https://www.ynov.com/formations/informatique/bts-sio-slam",
  },
  {
    id: 2,
    name: "SISR ",
    designation: "Solutions d'Infrastructure, Systèmes et Réseaux",
    description:
      "Spécialisation dans la gestion et la maintenance des infrastructures réseaux et systèmes. Accent sur la sécurité, la virtualisation et l'administration des serveurs.",
    jobs: [
      "Admin Systèmes & Réseaux",
      "Technicien Support",
      "Gestionnaire de parc",
      "Expert Cybersécurité",
    ],
    url: "https://www.ynov.com/formations/informatique/bts-sio-sisr",
  },
];
