"use client";

import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DropNav() {
  const pathname = usePathname();

  return (
    <div
      className={`text-[13px] font-normal px-3.5 h-full rounded-full flex flex-row items-center justify-center gap-1.5 transition-all duration-500 cursor-pointer ${
        pathname === "/contact"
          ? "text-nav-item-text-active bg-nav-item-bg-active"
          : "text-nav-item-text hover:text-nav-item-text-active hover:bg-nav-item-bg-active"
      }`}
    >
      Plus <ChevronDown size={13} />
    </div>
  );
}
