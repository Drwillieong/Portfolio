"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { RefreshCw } from "lucide-react";
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
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(false);
  const activeRequest = useRef<AbortController | null>(null);

  const refresh = useCallback(async () => {
    if (activeRequest.current) return;

    const controller = new AbortController();
    activeRequest.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 20_000);
    setRefreshing(true);

    try {
      const response = await fetch("/api/github-contributions", {
        cache: "no-store",
        signal: controller.signal,
      });

      if (!response.ok) throw new Error("Could not load GitHub activity.");

      const result: GitHubContributions = await response.json();
      if (activeRequest.current !== controller) return;

      setData(result);
      setError(false);
    } catch {
      if (activeRequest.current === controller) setError(true);
    } finally {
      window.clearTimeout(timeout);
      if (activeRequest.current === controller) {
        activeRequest.current = null;
        setRefreshing(false);
      }
    }
  }, []);

  useEffect(() => {
    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") void refresh();
    };

    refreshWhenVisible();
    const interval = window.setInterval(refreshWhenVisible, REFRESH_INTERVAL_MS);
    document.addEventListener("visibilitychange", refreshWhenVisible);
    window.addEventListener("focus", refreshWhenVisible);
    window.addEventListener("online", refreshWhenVisible);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
      window.removeEventListener("focus", refreshWhenVisible);
      window.removeEventListener("online", refreshWhenVisible);
      activeRequest.current?.abort();
      activeRequest.current = null;
    };
  }, [refresh]);

  return (
    <TitleCategory id="github" title="GitHub Activity">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
        <p role="status" aria-live="polite">
          {refreshing
            ? "Checking GitHub activity..."
            : data
              ? "Last checked " + new Date(data.fetchedAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "GitHub activity"}
        </p>
        <Button
          type="button"
          variant="ghost"
          size="xs"
          onClick={() => void refresh()}
          disabled={refreshing}
        >
          <RefreshCw
            aria-hidden="true"
            className={refreshing ? "animate-spin motion-reduce:animate-none" : ""}
          />
          Refresh
        </Button>
      </div>
      {error && (
        <p role="status" className="text-xs text-muted-foreground">
          {data
            ? "Could not refresh. Showing the last successfully loaded activity."
            : "GitHub activity is temporarily unavailable. Try refreshing shortly."}
        </p>
      )}
      {(data || !error) && (
        <div className="w-full [&_svg]:w-full [&_svg]:h-auto" aria-busy={refreshing}>
          <ActivityCalendar
            data={data?.contributions ?? []}
            loading={!data}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
            theme={themeSZ}
            blockSize={12}
            blockMargin={3}
            fontSize={12}
            labels={{ totalCount: "{{count}} contributions in the last year" }}
          />
        </div>
      )}
      <p className="text-xs text-muted-foreground">
        Updates every minute while this page is open. New contributions appear
        once GitHub processes them.{" "}
        <a
          className="underline underline-offset-4 hover:text-foreground"
          href="https://github.com/Drwillieong"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
      </p>
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