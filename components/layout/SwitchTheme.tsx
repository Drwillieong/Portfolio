"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="p-2 bg-card border border-border rounded-full flex flex-col-reverse items-center bottom-2 right-2 justify-center gap-2 w-fit z-50 fixed cursor-pointer"
      onClick={handleToggleTheme}
      aria-label="Toggle Theme"
      suppressHydrationWarning
    >
      <span className="aspect-square h-7 flex items-center justify-center hover:opacity-60 transition-opacity duration-300 cursor-pointer">
        <Sun size={16} className="dark:hidden" />
        <Moon size={16} className="hidden dark:block" />
      </span>
    </button>
  );
}
