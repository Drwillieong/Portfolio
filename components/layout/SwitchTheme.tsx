"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function SwitchTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <div className="h-full aspect-square bg-button-theme rounded-full flex items-center justify-center">
        <div className="h-4 w-4" />
      </div>
    );
  }

  return (
    <button
      className="p-2 bg-card border border-border rounded-full flex flex-col-reverse items-center bottom-2 right-2 justify-center gap-2 w-fit z-50 fixed cursor-pointer"
      onClick={handleToggleTheme}
      aria-label="Toggle Theme"
    >
      <span className="aspect-square h-7 flex items-center justify-center hover:opacity-60 transition-opacity duration-300 cursor-pointer">
        {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
      </span>
    </button>
  );
}
