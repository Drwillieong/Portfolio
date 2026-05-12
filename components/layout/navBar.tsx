"use client";

import Link from "next/link";
import { Logo } from "../Icons/icon";
import {
  Briefcase,
  HomeIcon,
  LucideIcon,
  Mail,
  Share,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function NavBar() {
  return (
    <nav className="p-3 bg-[#0A0A0A] border border-[#242424] rounded-full w-fit z-900 fixed flex flex-row items-center justify-center gap-3 left-1/2 -translate-x-1/2 bottom-2">
      {/* Logo */}
      <Link
        data-slot="NavLogo"
        href="/"
        className="aspect-square h-7 flex items-center justify-center hover:opacity-60 transition-opacity duration-300 cursor-pointer"
      >
        <Logo size={16} />
      </Link>

      {/* Separator */}
      <div className="w-px h-5 bg-[#2D2D2D] rounded-2xl" />

      <div
        data-slot="NavContainer"
        className="hidden sm:flex flex-row items-center justify-center gap-4"
      >
        <NavItem Icon={HomeIcon} link="/" label="Accueil" />
        <NavItem Icon={User} link="/about" label="À propos" />
        <NavItem Icon={Briefcase} link="/projects" label="Projets" />
        <NavItem Icon={Mail} link="/contact" label="Contact" />
      </div>

      {/* Separator */}
      <div className="w-px h-5 bg-[#2D2D2D] rounded-2xl" />

      {/* button share */}
      <NavShare />
    </nav>
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
              ? "text-[#eeeef0]"
              : "text-[#A1A1A1] hover:text-[#eeeef0]"
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

// au click ca copie le lien de la page dans le presse-papier
function NavShare() {
  const pathname = usePathname();

  const handleShare = () => {
    const url = `${window.location.origin}${pathname}`;
    navigator.clipboard.writeText(url).then(() => {});
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={handleShare}
          data-slot="NavShare"
          className="flex aspect-square h-7 items-center justify-center text-[#A1A1A1] hover:text-[#eeeef0] transition-all duration-300 cursor-pointer active:scale-90"
        >
          <Share size={16} />
        </button>
      </TooltipTrigger>
      <TooltipContent className="z-950 mb-4">
        <p>Copier le lien</p>
      </TooltipContent>
    </Tooltip>
  );
}
