"use client";

import { Moon, Rss, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import Link from "next/link";
import { Logo } from "../icons/icon";
import {
  Briefcase,
  Check,
  GraduationCap,
  HomeIcon,
  LucideIcon,
  Share,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const InfosNav = {
  NoCategory: [],
  Professional: [
    { title: "Home", link: "/professional/", icon: HomeIcon },
    { title: "Projects", link: "/professional/projects", icon: Briefcase },
    { title: "Blogs", link: "/professional/blogs", icon: Rss },
  ],
  Student: [
    { title: "Home", link: "/student/", icon: HomeIcon },
    { title: "Education", link: "/student/education", icon: GraduationCap },
    { title: "Projects", link: "/student/projects", icon: Briefcase },
  ],
};

export default function NavBar() {
  const pathname = usePathname();

  // We determine the current category based on the URL
  const isProfessional = pathname.startsWith("/professional");
  const isStudent = pathname.startsWith("/student");

  return (
    <nav className="p-2 bg-card border border-border rounded-full flex flex-row items-center justify-center gap-2 w-fit z-900 fixed left-1/2 -translate-x-1/2 bottom-2">
      {/* Logo */}
      <IconLink link="/" Icon={Logo} label="Home" />

      {/* Separator (Displayed only if we are in one of the categories) */}
      {(isProfessional || isStudent) && (
        <div className="w-px h-5 bg-border rounded-2xl" />
      )}

      {/* If we are in the /professional category */}
      {isProfessional &&
        InfosNav.Professional.map((item, index) => (
          <NavItem
            key={index}
            Icon={item.icon}
            link={item.link}
            label={item.title}
          />
        ))}

      {/* If we are in the /student category */}
      {isStudent &&
        InfosNav.Student.map((item, index) => (
          <NavItem
            key={index}
            Icon={item.icon}
            link={item.link}
            label={item.title}
          />
        ))}

      {/* Separator */}
      <div className="w-px h-5 bg-border rounded-2xl" />

      {/* Utilitaires */}
      <IconTheme />
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
    <Link
      href={link}
      className="aspect-square h-7 flex items-center justify-center hover:opacity-60 transition-opacity duration-300 cursor-pointer"
      title={label}
    >
      <Icon size={16} />
    </Link>
  );
}

function IconTheme() {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={handleToggleTheme}
      aria-label="Toggle Theme"
      suppressHydrationWarning
      className="aspect-square h-7 flex items-center justify-center hover:opacity-60 transition-opacity duration-300 cursor-pointer"
    >
      <Sun size={16} className="dark:hidden" />
      <Moon size={16} className="hidden dark:block" />{" "}
    </button>
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
    <Link
      data-slot="NavItem"
      href={link}
      className={`aspect-square h-7 flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-90 ${
        pathname === link
          ? "text-sz"
          : "text-foreground hover:text-muted-foreground "
      }`}
      title={label}
    >
      <Icon size={16} />
    </Link>
  );
}

// on click it copies the page link to the clipboard and temporarily changes the icon to indicate the link has been copied, then returns to the share icon after 1.5s
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
      console.error("Error while copying the link: ", err);
    }
  };

  return (
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
  );
}
