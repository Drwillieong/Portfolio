export interface ProjectProps {
  id: number;
  title: string;
  desc: string;
  role: string;
  stack: string[];
  list: {
    githubLink: string;
    documentationLink: string;
    websiteLink: string;
  };
  image: string[];
  status: "En cours" | "Terminé" | "À venir";
  favorite?: boolean;
}
