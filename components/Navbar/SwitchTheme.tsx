"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function SwitchTheme() {
  const { setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="h-full aspect-square bg-button-theme hover:bg-button-theme-hover text-button-theme-text hover:text-button-theme-hover-text rounded-full flex flex-row items-center justify-center transition-all duration-500 cursor-pointer"
      onClick={handleToggleTheme}
    >
      {useTheme().theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
