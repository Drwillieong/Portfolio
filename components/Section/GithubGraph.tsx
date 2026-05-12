"use client"; // Obligatoire car on va utiliser des hooks (useTheme, useState)

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function GithubGraph() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeSZ = {
    light: [
      "#ebedf0", // Niveau 0
      "#ffcccc", // Niveau 1
      "#ff8080", // Niveau 2
      "#ff4d4d", // Niveau 3
      "#ff2c2c", // Niveau 4
    ],
    dark: [
      "#161b22", // Niveau 0
      "#4a0d0d", // Niveau 1
      "#871313", // Niveau 2
      "#c21f1f", // Niveau 3
      "#ff2c2c", // Niveau 4
    ],
  };

  if (!mounted) {
    return (
      <div
        className="flex items-center justify-center min-h-37"
        id="github"
      ></div>
    );
  }

  return (
    <div className="flex items-center justify-center" id="github">
      <GitHubCalendar
        username="FlytziTv"
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        theme={themeSZ}
        blockSize={12}
        blockMargin={3}
        fontSize={14}
      />
    </div>
  );
}
