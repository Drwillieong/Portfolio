"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface PropsItemsNav {
  title: string;
  link: string;
}

export default function ItemsNav({ title, link }: PropsItemsNav) {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      title={title}
      className={`text-[13px] font-normal px-3.5 h-full rounded-full flex flex-row items-center justify-center transition-all duration-500 ${
        pathname === link
          ? "text-nav-item-text-active bg-nav-item-bg-active"
          : "text-nav-item-text hover:text-nav-item-text-active hover:bg-nav-item-bg-active"
      }`}
    >
      {title}
    </Link>
  );
}
