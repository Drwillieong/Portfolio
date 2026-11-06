"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";
import TitleCategory from "@/components/layout/TitleCategory";
import { Button } from "@/components/ui/button";
import type { GitHubContributions } from "@/lib/github-contributions";

const REFRESH_INTERVAL_MS = 60_000;
const themeSZ = {
  light: ["#ebedf0", "#ffcccc", "#ff8080", "#ff4d4d", "#ff2c2c"],
  dark: ["#161b22", "#4a0d0d", "#871313", "#c21f1f", "#ff2c2c"],
};

function GithubGraph() {
  const { resolvedTheme } = useTheme();
  const [data, setData] = useState<GitHubContributions | null>(null);
  const [error, setError] = useState(false);
  const lastRefresh = useRef(0);

  const refresh = useCallback(async () => {
    lastRefresh.current = Date.now();

    try {
      const response = await fetch("/api/github-contributions", { cache: "no-store" });
      if (!response.ok) throw new Error("Failed to fetch GitHub activity.");

      setData((await response.json()) as GitHubContributions);
      setError(false);
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => {
    void refresh();

    const refreshIfStale = () => {
      if (
        document.visibilityState !== "visible" ||
        Date.now() - lastRefresh.current < REFRESH_INTERVAL_MS
      ) {
        return;
      }

      void refresh();
    };

    const interval = window.setInterval(refreshIfStale, REFRESH_INTERVAL_MS);
    document.addEventListener("visibilitychange", refreshIfStale);
    window.addEventListener("focus", refreshIfStale);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", refreshIfStale);
      window.removeEventListener("focus", refreshIfStale);
    };
  }, [refresh]);

  return (
    <TitleCategory id="github" title="GitHub Activity">
      <div className="w-full [&_svg]:w-full [&_svg]:h-auto" id="github">
        {error && (
          <div role="alert" className="mb-2 flex items-center gap-2 text-sm">
            GitHub activity is temporarily unavailable.
            <Button variant="outline" size="sm" onClick={() => void refresh()}>
              Retry
            </Button>
          </div>
        )}
        {(data || !error) && (
          <ActivityCalendar
            data={data?.contributions ?? []}
            loading={!data}
            labels={{ totalCount: "{{count}} contributions in the last year" }}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
            theme={themeSZ}
            blockSize={12}
            blockMargin={3}
            fontSize={12}
          />
        )}
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
