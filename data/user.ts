import { UserSocial } from "@/types/types";
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
