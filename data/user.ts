import { ArticleXpProps, UserSocial } from "@/types/types";
import { Github } from "@/components/icons/github";
import { Linkedin } from "@/components/icons/linkedin";
import { Gmail } from "@/components/icons/gmail";

export const socials: UserSocial[] = [
  {
    name: "GitHub",
    url: "https://github.com/Drwillieong",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kevinbolado",
    icon: Linkedin,
  },
  {
    name: "Mail",
    url: "mailto:kevincorpuz321@gmail.com",
    icon: Gmail,
  },
];

export const certificationData: ArticleXpProps[] = [
  {
    company: "TESDA",
    startDate: "2023",
    endDate: "2023",
    titleJob: "Computer System Servicing (CSS) NC II",
    stack: "TESDA",
    missions: [
      {
        title: "Certification",
        bulletPoints: [
          "Completed the Computer System Servicing (CSS) NC II certification.",
          "Hands-on training in computer hardware assembly, installation, and configuration.",
          "Practical skills in basic troubleshooting and system maintenance.",
        ],
      },
    ],
  },
];
