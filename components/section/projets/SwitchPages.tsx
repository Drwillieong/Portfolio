"use client";

import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SwitchPages() {
  const pathname = usePathname();

  // Navigation configuration
  const navigation = {
    "/student/projects/perso": {
      prev: { title: "Exam E6", href: "/student/projects/e6" },
      next: { title: "Exam E5", href: "/student/projects/e5" },
    },
    "/student/projects/e5": {
      prev: { title: "Personal Projects", href: "/student/projects/perso" },
      next: { title: "Exam E6", href: "/student/projects/e6" },
    },
    "/student/projects/e6": {
      prev: { title: "Exam E5", href: "/student/projects/e5" },
      next: { title: "Personal Projects", href: "/student/projects/perso" },
    },
  };

  // We retrieve the links corresponding to the current path
  // We add a fallback in case the pathname does not match perfectly
  const currentPage =
    navigation[pathname as keyof typeof navigation] ||
    navigation["/student/projects/e5"];

  return (
    <div className="top-2 absolute right-0 left-0 max-w-212 mx-auto px-6 flex flex-row items-center justify-between">
      <GoToPage
        title={currentPage.prev.title}
        href={currentPage.prev.href}
        isLeft={true}
      />
      <GoToPage
        title={currentPage.next.title}
        href={currentPage.next.href}
        isLeft={false}
      />
    </div>
  );
}

function GoToPage({
  title,
  href,
  isLeft,
}: {
  title: string;
  href: string;
  isLeft: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex flex-row items-center ${isLeft ? "justify-start" : "justify-end"} gap-2 text-sm font-medium text-foreground/50 hover:text-foreground/90 transition-all duration-500 active:scale-95 active:opacity-70`}
    >
      {isLeft && (
        <MoveLeft className="transition-transform group-hover:-translate-x-1" />
      )}
      {title}
      {!isLeft && (
        <MoveRight className="transition-transform group-hover:translate-x-1" />
      )}
    </Link>
  );
}
