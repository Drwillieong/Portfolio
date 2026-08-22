import { ProjectProps } from "@/types/types";

export const projects_e5: ProjectProps[] = [
  {
    title: "Apache",
    desc: "Installation and configuration of Apache2 on an Ubuntu virtual machine for web hosting.",
    role: "Developer and System Administrator",
    stack: ["Apache", "Ubuntu", "Linux", "Serveur Web"],
    list: {
      githubLink: "",
      documentationLink: "/files/projects/e5/apache.pdf",
      websiteLink: "",
    },
    image: ["/projets/e5/images/apache.png"],
    status: "Completed",
  },

  {
    title: "Ubuntu VirtualBox",
    desc: "Deployment and configuration of a Linux Ubuntu environment via the VirtualBox hypervisor.",
    role: "System Administrator",
    stack: ["Ubuntu", "Linux", "VirtualBox", "Virtualisation"],
    list: {
      githubLink: "",
      documentationLink: "/files/projects/e5/ubuntu-vbox.pdf",
      websiteLink: "",
    },
    image: ["/projets/e5/images/ubuntu-vbox.png"],
    status: "Completed",
  },

  {
    title: "Ubuntu VMware",
    desc: "Installation and optimization of Ubuntu on VMware, including compatibility tools management.",
    role: "System Administrator",
    stack: ["Network", "Ubuntu", "Linux", "VMware"],
    list: {
      githubLink: "",
      documentationLink: "/files/projects/e5/ubuntu-vmware.pdf",
      websiteLink: "",
    },
    image: ["/projets/e5/images/ubuntu-vmware.png"],
    status: "Completed",
    favorite: true,
  },

  {
    title: "Windows Server 2025",
    desc: "Installation and configuration of Windows Server 2025. Setup of basic services and system administration.",
    role: "System Administrator",
    stack: ["Network", "Windows Server", "VMware", "Administration"],
    list: {
      githubLink: "",
      documentationLink: "/files/projects/e5/windows-server.pdf",
      websiteLink: "",
    },

    image: ["/projets/e5/images/windows-server-2025.png"],
    status: "Completed",
  },

  {
    title: "Symfony 7 - Installation",
    desc: "Setup of the development environment for Symfony 7, dependency management and base structure.",
    role: "Backend Developer",
    stack: ["Symfony", "PHP", "Composer", "Framework"],
    list: {
      githubLink: "",
      documentationLink: "/files/projects/e5/symfony.pdf",
      websiteLink: "",
    },
    image: ["/projets/e5/images/symfony.png"],
    status: "Completed",
  },

  {
    title: "Symfony - ORM, Routing & Twig",
    desc: "Deepening of Symfony: database management with Doctrine (ORM), routing system and Twig template engine.",
    role: "Backend Developer",
    stack: ["Symfony", "PHP", "Doctrine", "Twig", "Backend"],
    list: {
      githubLink: "",
      documentationLink: "/files/projects/e5/symfony-details.pdf",
      websiteLink: "",
    },
    image: ["/projets/e5/images/symfony-dev.png"],
    status: "Completed",
  },

  {
    title: "Connexion SSH - MobaXterm",
    desc: "Configuration of MobaXterm for secure remote management of Linux servers via the SSH protocol.",
    role: "System Administrator",
    stack: ["MobaXterm", "SSH", "Network", "Linux", "Security"],
    list: {
      githubLink: "",
      documentationLink: "/files/projects/e5/mobaxterm.pdf",
      websiteLink: "",
    },
    image: ["/projets/e5/images/mobaxterm.png"],
    status: "Completed",
    favorite: true,
  },

  {
    title: "OCS Inventory & GLPI",
    desc: "Implementation of an IT asset management solution combining automatic inventory (OCS) and helpdesk (GLPI).",
    role: "System Administrator",
    stack: ["OCS Inventory", "GLPI", "Asset Management", "Network", "Linux"],
    list: {
      githubLink: "",
      documentationLink: "/files/projects/e5/ocs-glpi.pdf",
      websiteLink: "",
    },
    image: ["/projets/e5/images/ocs-inv.png"],
    status: "Completed",
    favorite: true,
  },

  {
    title: "Kali Linux Installation",
    desc: "Installation of Kali Linux on VMware",
    role: "System Administrator",
    stack: ["Kali Linux", "Cybersecurity", "VMware", "Pentest"],
    list: {
      githubLink: "",
      documentationLink: "/files/projects/e5/kali-linux.pdf",
      websiteLink: "",
    },
    image: ["/projets/e5/images/kali-linux.png"],
    status: "Completed",
    favorite: true,
  },

  {
    title: "DVWA Kali Linux ",
    desc: "Installation of DVWA on a Kali Linux virtual machine for ethical penetration testing and learning web vulnerabilities.",
    role: "System Administrator",
    stack: ["Kali Linux", "Cybersecurity", "VMware", "Pentest"],
    list: {
      githubLink: "",
      documentationLink: "/files/projects/e5/kali-dvwa.pdf ",
      websiteLink: "",
    },
    image: ["/projets/e5/images/kali-dvwa.png"],
    status: "Completed",
  },

  {
    title: "Attaque par Force Brute",
    desc: "Brute force attack simulation on the DVWA platform to understand and prevent authentication vulnerabilities.",
    role: "System Administrator",
    stack: ["Cybersecurity", "Force Brute", "Burp Suite", "Kali Linux"],
    list: {
      githubLink: "",
      documentationLink: "/files/projects/e5/force-brute.pdf",
      websiteLink: "",
    },
    image: ["/projets/e5/images/hacking.png"],
    status: "Completed",
  },

  {
    title: "Synchronisation GLPI/OCS",
    desc: "Implementation of a synchronization solution between GLPI and OCS Inventory for centralized IT asset management.",
    role: "System Administrator",
    stack: ["GLPI", "OCS Inventory", "Synchronization", "Asset Management"],
    list: {
      githubLink: "",
      documentationLink: "/files/projects/e5/sync-glpi-ocs.pdf",
      websiteLink: "",
    },
    image: ["/projets/e5/images/sync-glpi-ocs.png"],
    status: "Completed",
  },
];
