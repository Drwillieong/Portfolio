import { ArticleXpProps, UserSocial } from "@/types/types";
import { Github } from "@/components/icons/github";
import { Linkedin } from "@/components/icons/linkedin";
import { Gmail } from "@/components/icons/gmail";

export const socials: UserSocial[] = [
  {
    name: "GitHub",
    url: "https://github.com/FlytziTv",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alexis-dejesus/",
    icon: Linkedin,
  },
  {
    name: "Mail",
    url: "mailto:alexis.dejesus019@gmail.com",
    icon: Gmail,
  },
];

export const certificationData: ArticleXpProps[] = [
  {
    company: "HTML, Sémantique",
    startDate: "2025",
    endDate: "2025",
    titleJob: "Certification HTML",
    stack: "Codédex",
    missions: [
      {
        title: "Compétences validées",
        bulletPoints: [
          "Maîtrise de la structure sémantique",
          "Création de pages web accessibles",
          "Formulaires complets et bonnes pratiques de balisage",
        ],
      },
    ],
  },
  {
    company: "CSS Flexbox & Grid",
    startDate: "2025",
    endDate: "2025",
    titleJob: "Codédex",
    stack: "CSS, Flexbox, Grid",
    missions: [
      {
        title: "Compétences validées",
        bulletPoints: [
          "Compétences en mise en forme et layout responsif",
          "Gestion avancée des flexbox/grid",
          "Application des bonnes pratiques de design",
        ],
      },
    ],
  },
  {
    company: "Certification Pix",
    startDate: "2024",
    endDate: "2024",
    titleJob: "Pix",
    stack: "Numérique, Sécurité",
    missions: [
      {
        title: "Compétences validées",
        bulletPoints: [
          "Validation des compétences numériques clés",
          "Sécurité informatique et gestion de l’information",
          "Résolution de problèmes et maîtrise des outils digitaux",
        ],
      },
    ],
  },
  {
    company: "SecNum Académie",
    startDate: "2026",
    endDate: "2026",
    titleJob: "ANSSI",
    stack: "Cybersécurité, ANSSI",
    missions: [
      {
        title: "Compétences validées",
        bulletPoints: [
          "Connaissances en sécurité informatique et gestion des risques",
          "Protection des données",
          "Bonnes pratiques pour sécuriser les systèmes d'information",
        ],
      },
    ],
  },
  {
    company: "Responsive Web Design",
    startDate: "2025",
    endDate: "2025",
    titleJob: "freeCodeCamp",
    stack: "HTML5, CSS3, Flexbox, Grid",
    missions: [
      {
        title: "Compétences validées",
        bulletPoints: [
          "Compétences en design adaptatif",
          "Utilisation de media queries, flexbox et grid",
          "Optimisation des interfaces web pour tous les appareils",
        ],
      },
    ],
  },
];
