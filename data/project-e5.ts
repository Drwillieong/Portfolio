export interface ProjectProps {
  id: number;
  title: string;
  desc: string;
  color: string;
  stack: string[];
  list: { title: string; link: string }[];
  image: string[];
  status: "En cours" | "Terminé" | "À venir";
}

export const projects_e5: ProjectProps[] = [
  {
    id: 1,
    title: "Apache",
    desc: "Installation et configuration de Apache2 sur une machine virtuelle Ubuntu pour l'hébergement web.",
    color: "#EC2C50",
    stack: ["Apache", "Ubuntu", "Linux", "Serveur Web"],
    list: [
      { title: "Documentation", link: "/files/projets/mission/apache.pdf" },
      {
        title: "Site Web",
        link: "",
      },
      {
        title: "Github",
        link: "",
      },
    ],
    image: ["/images/projects/e5/apache.png"],
    status: "Terminé",
  },
  {
    id: 2,
    title: "Ubuntu VirtualBox",
    desc: "Déploiement et configuration d'un environnement Linux Ubuntu via l'hyperviseur VirtualBox.",
    color: "#183861",
    stack: ["Ubuntu", "Linux", "VirtualBox", "Virtualisation"],
    list: [
      {
        title: "Documentation",
        link: "/files/projets/mission/ubuntu-vbox.pdf",
      },
      {
        title: "Site Web",
        link: "",
      },
      {
        title: "Github",
        link: "",
      },
    ],
    image: ["/images/projects/e5/ubuntu-vbox.png"],
    status: "Terminé",
  },
  {
    id: 3,
    title: "Ubuntu VMware",
    desc: "Installation et optimisation de Ubuntu sur VMware, incluant la gestion des outils de compatibilité.",
    color: "#717075",
    stack: ["Réseau", "Ubuntu", "Linux", "VMware"],
    list: [
      {
        title: "Documentation",
        link: "/files/projets/mission/ubuntu-vmware.pdf",
      },
      { title: "Site Web", link: "" },
      { title: "Github", link: "" },
    ],
    image: ["/images/projects/e5/ubuntu-vmware.png"],
    status: "Terminé",
  },
  {
    id: 4,
    title: "Windows Server 2025",
    desc: "Installation et configuration de Windows Server 2025. Mise en place des services de base et administration système.",
    color: "#3465FB",
    stack: ["Réseau", "Windows Server", "VMware", "Administration"],
    list: [
      {
        title: "Documentation",
        link: "/files/projets/mission/windows-server.pdf",
      },
      { title: "Site Web", link: "" },
      { title: "Github", link: "" },
    ],
    image: ["/images/projects/e5/windows-server-2025.png"],
    status: "Terminé",
  },
  {
    id: 5,
    title: "Symfony 7 - Installation",
    desc: "Mise en place de l'environnement de développement pour Symfony 7, gestion des dépendances et structure de base.",
    color: "#949494",
    stack: ["Symfony", "PHP", "Composer", "Framework"],
    list: [
      {
        title: "Documentation",
        link: "/files/projets/mission/symfony.pdf",
      },
      { title: "Site Web", link: "" },
      { title: "Github", link: "" },
    ],
    image: ["/images/projects/e5/symfony.png"],
    status: "Terminé",
  },
  {
    id: 6,
    title: "Symfony - ORM, Routing & Twig",
    desc: "Approfondissement de Symfony : gestion de la base de données avec Doctrine (ORM), système de routage et moteur de template Twig.",
    color: "#5C8525",
    stack: ["Symfony", "PHP", "Doctrine", "Twig", "Backend"],
    list: [
      {
        title: "Documentation",
        link: "/files/projets/mission/symfony-details.pdf",
      },
      { title: "Site Web", link: "" },
      { title: "Github", link: "" },
    ],
    image: ["/images/projects/e5/symfony-dev.png"],
    status: "Terminé",
  },
  {
    id: 7,
    title: "Connexion SSH - MobaXterm",
    desc: "Configuration de MobaXterm pour la gestion à distance sécurisée de serveurs Linux via le protocole SSH.",
    color: "#E05C5F",
    stack: ["MobaXterm", "SSH", "Réseau", "Linux", "Sécurité"],
    list: [
      {
        title: "Documentation",
        link: "/files/projets/mission/mobaxterm.pdf",
      },
      { title: "Site Web", link: "" },
      { title: "Github", link: "" },
    ],
    image: ["/images/projects/e5/mobaxterm.png"],
    status: "Terminé",
  },
  {
    id: 8,
    title: "OCS Inventory & GLPI",
    desc: "Mise en place d'une solution de gestion de parc informatique associant l'inventaire automatique (OCS) et le helpdesk (GLPI).",
    color: "#962C90",
    stack: ["OCS Inventory", "GLPI", "Asset Management", "Réseau", "Linux"],
    list: [
      {
        title: "Documentation",
        link: "/files/projets/mission/ocs-glpi.pdf",
      },
      { title: "Site Web", link: "" },
      { title: "Github", link: "" },
    ],
    image: ["/images/projects/e5/ocs-inv.png"],
    status: "Terminé",
  },
  {
    id: 9,
    title: "Kali Linux Installation",
    desc: "Installation de Kali Linux sur vmware",
    color: "#2686F1",
    stack: ["Kali Linux", "Cybersécurité", "VMware", "Pentest"],
    list: [
      {
        title: "Documentation",
        link: "/files/projets/mission/kali-linux.pdf",
      },
      { title: "Site Web", link: "" },
      { title: "Github", link: "" },
    ],
    image: ["/images/projects/e5/kali-linux.png"],
    status: "Terminé",
  },
  {
    id: 10,
    title: "DVWA Kali Linux ",
    desc: "Installation de DVWA sur une machine virtuelle Kali Linux pour des tests d'intrusion éthiques et l'apprentissage des vulnérabilités web.",
    color: "#B6D55D",
    stack: ["Kali Linux", "Cybersécurité", "VMware", "Pentest"],
    list: [
      {
        title: "Documentation",
        link: "/files/projets/mission/kali-dvwa.pdf ",
      },
      { title: "Site Web", link: "" },
      { title: "Github", link: "" },
    ],
    image: ["/images/projects/e5/kali-dvwa.png"],
    status: "Terminé",
  },
  {
    id: 11,
    title: "Attaque par Force Brute",
    desc: "Simulation d'attaque par force brute sur la plateforme DVWA pour comprendre et prévenir les vulnérabilités d'authentification.",
    color: "#EA5D2E",
    stack: ["Cybersécurité", "Force Brute", "Burp Suite", "Kali Linux"],
    list: [
      {
        title: "Documentation",
        link: "/files/projets/mission/force-brute.pdf",
      },
      { title: "Site Web", link: "" },
      { title: "Github", link: "" },
    ],
    image: ["/images/projects/e5/hacking.png"],
    status: "Terminé",
  },
];
