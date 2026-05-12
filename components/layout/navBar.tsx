"use client";

import Link from "next/link";
import { Logo } from "../Icons/icon";
import {
  Briefcase,
  Check,
  HomeIcon,
  LucideIcon,
  Share,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useState } from "react";
import { socials } from "@/data/user";
import { Linkedin } from "../Icons/linkedin";
import { Github } from "../Icons/github";
import { Gmail } from "../Icons/gmail";

export default function NavBar() {
  return (
    <nav className="p-2 bg-card border border-border rounded-full flex flex-row items-center justify-center gap-2 w-fit z-900 fixed left-1/2 -translate-x-1/2 bottom-2">
      {/* Logo */}
      <IconLink link="/" Icon={Logo} label="Accueil" />

      {/* Separator */}
      <div className="w-px h-5 bg-border rounded-2xl" />

      <NavItem Icon={HomeIcon} link="/" label="Accueil" />
      <NavItem Icon={User} link="/about" label="À propos" />
      <NavItem Icon={Briefcase} link="/projects" label="Projets" />

      {/* Separator */}
      <div className="w-px h-5 bg-border rounded-2xl" />

      <IconLink link={socials.mail} Icon={Gmail} label="Email" />
      <IconLink link={socials.linkedin} Icon={Linkedin} label="LinkedIn" />
      <IconLink link={socials.github} Icon={Github} label="GitHub" />

      {/* Separator */}
      <div className="w-px h-5 bg-border rounded-2xl" />

      <NavShare />
    </nav>
  );
}

function IconLink({
  link,
  Icon,
  label,
}: {
  link: string;
  Icon: React.ElementType;
  label: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={link}
          className="aspect-square h-7 flex items-center justify-center hover:opacity-60 transition-opacity duration-300 cursor-pointer"
        >
          <Icon size={16} color="hsl(var(--foreground))" />
        </Link>
      </TooltipTrigger>
      <TooltipContent className="z-950 mb-4">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}

function NavItem({
  Icon,
  link,
  label,
}: {
  Icon: LucideIcon;
  link: string;
  label: string;
}) {
  const pathname = usePathname();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          data-slot="NavItem"
          href={link}
          className={`aspect-square h-7 flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-90 ${
            pathname === link
              ? "text-sz"
              : "text-foreground hover:text-muted-foreground "
          }`}
        >
          <Icon size={16} />
        </Link>
      </TooltipTrigger>
      <TooltipContent className="z-950 mb-4">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}

// au click ca copie le lien de la page dans le presse-papier et on change dicon temporairement pour indiquer que le lien a été copié, puis on revient à l'icon de partage après 1.5s
export function NavShare() {
  const pathname = usePathname();
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    try {
      const url = `${window.location.origin}${pathname}`;
      await navigator.clipboard.writeText(url);

      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    } catch (err) {
      console.error("Erreur lors de la copie du lien : ", err);
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={handleShare}
          data-slot="NavShare"
          className="flex aspect-square h-7 items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer active:scale-90"
        >
          <Share
            size={16}
            className={`absolute text-foreground transition-all duration-300 ${
              isCopied ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          />

          <Check
            size={16}
            className={`absolute text-green-500 transition-all duration-300 ${
              isCopied ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          />
        </button>
      </TooltipTrigger>
      <TooltipContent className="z-950 mb-4">
        <p>{isCopied ? "Lien copié !" : "Copier le lien"}</p>
      </TooltipContent>
    </Tooltip>
  );
}
