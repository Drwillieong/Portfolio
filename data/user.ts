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
    company: "HTML, Semantics",
    startDate: "2025",
    endDate: "2025",
    titleJob: "Certification HTML",
    stack: "Codédex",
    missions: [
      {
        title: "Validated skills",
        bulletPoints: [
          "Mastery of semantic structure",
          "Creation of accessible web pages",
          "Complete forms and markup best practices",
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
        title: "Validated skills",
        bulletPoints: [
          "Skills in styling and responsive layout",
          "Advanced flexbox/grid management",
          "Application of design best practices",
        ],
      },
    ],
  },
  {
    company: "Certification Pix",
    startDate: "2024",
    endDate: "2024",
    titleJob: "Pix",
    stack: "Digital, Security",
    missions: [
      {
        title: "Validated skills",
        bulletPoints: [
          "Validation of key digital skills",
          "Computer security and information management",
          "Problem solving and mastery of digital tools",
        ],
      },
    ],
  },
  {
    company: "SecNum Académie",
    startDate: "2026",
    endDate: "2026",
    titleJob: "ANSSI",
    stack: "Cybersecurity, ANSSI",
    missions: [
      {
        title: "Validated skills",
        bulletPoints: [
          "Knowledge of computer security and risk management",
          "Data protection",
          "Best practices for securing information systems",
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
        title: "Validated skills",
        bulletPoints: [
          "Skills in adaptive design",
          "Use of media queries, flexbox and grid",
          "Optimization of web interfaces for all devices",
        ],
      },
    ],
  },
];
