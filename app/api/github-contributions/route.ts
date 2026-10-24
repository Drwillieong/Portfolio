import {
  parseContributions,
  type GitHubContributions,
} from "@/lib/github-contributions";

export const dynamic = "force-dynamic";

const CACHE_DURATION_MS = 60_000;
const responseHeaders = { "Cache-Control": "no-store" };
let cached: GitHubContributions | undefined;
let pending: Promise<GitHubContributions> | undefined;

async function fetchContributions(): Promise<GitHubContributions> {
  const response = await fetch("https://github.com/users/Drwillieong/contributions", {
    cache: "no-store",
    headers: {
      Accept: "text/html",
      "Accept-Language": "en-US",
      "X-Requested-With": "XMLHttpRequest",
    },
    signal: AbortSignal.timeout(15_000),
  });

  if (!response.ok) {
    throw new Error("GitHub returned " + response.status + ".");
  }

  const contributions = parseContributions(await response.text());
  cached = { contributions, fetchedAt: new Date().toISOString() };
  return cached;
}

export async function GET() {
  try {
    // Share one fresh request across visitors on this server instance.
    if (cached && Date.now() - Date.parse(cached.fetchedAt) < CACHE_DURATION_MS) {
      return Response.json(cached, { headers: responseHeaders });
    }

    pending ??= fetchContributions().finally(() => {
      pending = undefined;
    });

    return Response.json(await pending, { headers: responseHeaders });
  } catch {
    return Response.json(
      { error: "GitHub activity is temporarily unavailable. Please try again shortly." },
      { status: 502, headers: responseHeaders },
    );
  }
}