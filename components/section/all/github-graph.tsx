"use client";

import dynamic from "next/dynamic";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import TitleCategory from "@/components/layout/TitleCategory";

function GithubGraph() {
  const { resolvedTheme } = useTheme();
  const [refreshKey, setRefreshKey] = useState(0);
  const lastRefresh = useRef(0);

  useEffect(() => {
    lastRefresh.current = Date.now();

    const refreshIfStale = () => {
      if (
        document.visibilityState !== "visible" ||
        Date.now() - lastRefresh.current < 60 * 60 * 1000
      ) {
        return;
      }

      lastRefresh.current = Date.now();
      setRefreshKey((key) => key + 1);
    };

    const interval = window.setInterval(refreshIfStale, 60 * 1000);
    document.addEventListener("visibilitychange", refreshIfStale);
    window.addEventListener("focus", refreshIfStale);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", refreshIfStale);
      window.removeEventListener("focus", refreshIfStale);
    };
  }, []);

  const themeSZ = {
    light: ["#ebedf0", "#ffcccc", "#ff8080", "#ff4d4d", "#ff2c2c"],
    dark: ["#161b22", "#4a0d0d", "#871313", "#c21f1f", "#ff2c2c"],
  };

  return (
    <TitleCategory id="github" title="GitHub Activity">
      <div className="w-full [&_svg]:w-full [&_svg]:h-auto" id="github">
        <GitHubCalendar
          key={refreshKey}
          username="Drwillieong"
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          theme={themeSZ}
          blockSize={12}
          blockMargin={3}
          fontSize={12}
        />
      </div>
    </TitleCategory>
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
