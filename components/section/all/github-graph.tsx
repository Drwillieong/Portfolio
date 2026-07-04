"use client";

import dynamic from "next/dynamic";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

function GithubGraph() {
  const { resolvedTheme } = useTheme();

  const themeSZ = {
    light: ["#ebedf0", "#ffcccc", "#ff8080", "#ff4d4d", "#ff2c2c"],
    dark: ["#161b22", "#4a0d0d", "#871313", "#c21f1f", "#ff2c2c"],
  };

  return (
    <div className="w-full [&_svg]:w-full [&_svg]:h-auto" id="github">
      <GitHubCalendar
        username="FlytziTv"
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        theme={themeSZ}
        blockSize={12}
        blockMargin={3}
        fontSize={12}
      />
    </div>
  );
}

export default dynamic(() => Promise.resolve(GithubGraph), {
  ssr: false,
  loading: () => (
    <section
      className="flex items-center justify-center min-h-40"
      id="github"
    ></section>
  ),
});
