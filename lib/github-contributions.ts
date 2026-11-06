export type Contribution = {
  date: string;
  count: number;
  level: number;
};

export type GitHubContributions = {
  contributions: Contribution[];
  fetchedAt: string;
};

function attribute(tag: string, name: string): string | undefined {
  return tag.match(new RegExp("\\s" + name + "=[\"']([^\"']*)[\"']"))?.[1];
}

// Read GitHub's public calendar fragment without sending its HTML to the client.
// Fail explicitly if its markup changes rather than displaying invented counts.
export function parseContributions(html: string): Contribution[] {
  const counts = new Map<string, number>();

  for (const match of html.matchAll(/<tool-tip\b([^>]*)>([\s\S]*?)<\/tool-tip>/g)) {
    const id = attribute(match[1], "for");
    const label = match[2].replace(/<[^>]*>/g, "").trim();
    const count = label.match(/^(No|[\d,]+) contributions?\b/);

    if (id && count) {
      counts.set(id, count[1] === "No" ? 0 : Number(count[1].replaceAll(",", "")));
    }
  }

  const contributions: Contribution[] = [];

  for (const [tag] of html.matchAll(/<td\b[^>]*>/g)) {
    if (!attribute(tag, "class")?.split(/\s+/).includes("ContributionCalendar-day")) {
      continue;
    }

    const date = attribute(tag, "data-date");
    if (!date) continue; // Empty cells pad out the final calendar week.

    const id = attribute(tag, "id");
    const level = attribute(tag, "data-level");
    const count = id ? counts.get(id) : undefined;

    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      !Number.isFinite(Date.parse(date)) ||
      new Date(date).toISOString().slice(0, 10) !== date ||
      !level ||
      !/^[0-4]$/.test(level) ||
      count === undefined ||
      !Number.isSafeInteger(count) ||
      count < 0 ||
      (count === 0) !== (level === "0")
    ) {
      throw new Error("Invalid GitHub contribution day.");
    }

    contributions.push({ date, count, level: Number(level) });
  }

  if (!contributions.length) {
    throw new Error("GitHub did not return a contribution calendar.");
  }

  contributions.sort((a, b) => a.date.localeCompare(b.date));

  for (let index = 1; index < contributions.length; index++) {
    const elapsed = Date.parse(contributions[index].date) -
      Date.parse(contributions[index - 1].date);
    if (elapsed !== 86_400_000) {
      throw new Error("GitHub returned an incomplete contribution calendar.");
    }
  }

  return contributions;
}