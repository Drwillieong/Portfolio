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
      className="h-full aspect-square bg-button-theme hover:bg-button-theme-hover text-button-theme-text hover:text-button-theme-hover-text rounded-full flex flex-row items-center justify-center transition-all duration-500 cursor-pointer"
      onClick={handleToggleTheme}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
