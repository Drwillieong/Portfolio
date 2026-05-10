"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "../Icons/icon";
import SwitchTheme from "./SwitchTheme";
import { pages } from "@/data/navbar";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden fixed z-50 top-4 right-4 left-4 flex flex-col items-end gap-2">
      {/* Barre de navigation mobile réduite */}
      <div className="h-10.5 w-full border border-nav-border bg-nav-bg rounded-full flex flex-row items-center justify-between p-1.5 shadow-sm">
        <Link href="/" className="pl-2">
          <Logo color="var(--foreground)" size={22} />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex-1 text-[13px] text-nav-item-text font-normal h-full"
        >
          {isOpen ? "Fermer" : "Menu"}
        </button>

        <SwitchTheme />
      </div>

      {/* Menu qui se déroule */}
      {isOpen && (
        <div className="w-full border border-nav-border bg-nav-bg rounded-2xl p-2 flex flex-col items-center gap-2 shadow-lg">
          {pages.map((page) => (
            <Link
              key={page.id}
              href={page.url}
              onClick={() => setIsOpen(false)}
              className="text-[13px] w-full px-4 py-3 font-medium rounded-xl text-nav-item-text hover:bg-nav-item-bg-active"
            >
              {page.name}
            </Link>
          ))}

          <hr className="w-[70%] h-px border-t border-nav-border" />

          <Link
            href="/contact"
            className="text-[13px] w-full text-center py-3 rounded-xl bg-nav-item-bg-active text-nav-item-text-active"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
