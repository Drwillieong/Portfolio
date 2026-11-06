import { ProjectProps } from "@/types/types";

export const projects_perso: ProjectProps[] = [
  
  {
    title: "Motorshop POS & Inventory System",
    desc: "Developed a Point-of-Sale and inventory management application designed for motor shops.",
    role: "Frontend Developer",
    stack: ["React.js", "CSS", "Tailwind CSS"],
    list: {
      githubLink: "https://github.com/Drwillieong/Inventory-and-Appointment-System-of-a-MotorShop",
      documentationLink: "",
      websiteLink: "https://se-motor.netlify.app",
    },
  image: ["/projets/perso/images/se-motor.jpg"],
    status: "Completed",
    favorite: true,
  },
  
 {
    title: "Personal Portfolio Website",
    desc: "Personal interactive portfolio website built to display technical projects, experience, and credentials.",
    role: "Full-Stack Developer",
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    list: {
      githubLink: "https://github.com/Drwillieong",
      documentationLink: "",
      websiteLink: "https://kevinpogi.netlify.app/",
    },
    image: ["/projets/perso/images/pogi.jpg"],
    status: "In progress",
    favorite: true,
  },
];
