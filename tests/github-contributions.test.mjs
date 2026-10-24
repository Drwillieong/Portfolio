import assert from "node:assert/strict";
import test from "node:test";
import { parseContributions } from "../lib/github-contributions.ts";

function day(date, { id = date, level = 0, label = "No contributions" } = {}) {
  return '<td class="ContributionCalendar-day" id="' + id +
    '" data-date="' + date + '" data-level="' + level + '"></td>' +
    '<tool-tip for="' + id + '">' + label + " on this date.</tool-tip>";
}

test("reads counts and levels and sorts GitHub's column-based calendar by date", () => {
  const html = day("2026-01-02", { level: 4, label: "1,234 contributions" }) +
    day("2026-01-01") +
    day("2026-01-03", { level: 1, label: "1 contribution" });

  assert.deepEqual(parseContributions(html), [
    { date: "2026-01-01", count: 0, level: 0 },
    { date: "2026-01-02", count: 1234, level: 4 },
    { date: "2026-01-03", count: 1, level: 1 },
  ]);
});

test("accepts a calendar with no contributions and ignores padding cells", () => {
  const html = day("2026-01-01") +
    '<td class="ContributionCalendar-day"></td><td data-date="invalid"></td>';
  assert.deepEqual(parseContributions(html), [
    { date: "2026-01-01", count: 0, level: 0 },
  ]);
});

test("accepts consecutive dates across leap days and year boundaries", () => {
  assert.equal(parseContributions(day("2024-02-28") + day("2024-02-29") + day("2024-03-01")).length, 3);
  assert.equal(parseContributions(day("2025-12-31") + day("2026-01-01")).length, 2);
});

test("rejects error pages and missing or changed tooltips instead of assuming zero", () => {
  assert.throws(() => parseContributions("<html>Service unavailable</html>"));
  assert.throws(() => parseContributions(day("2026-01-01").replace(/<tool-tip[\s\S]*/, "")));
  assert.throws(() => parseContributions(day("2026-01-01", { label: "Unknown activity" })));
});

test("rejects invalid dates, levels, and inconsistent contribution counts", () => {
  for (const html of [
    day("2026-02-30"),
    day("not-a-date"),
    day("2026-01-01", { level: 5 }),
    day("2026-01-01", { level: 1 }),
    day("2026-01-01", { label: "2 contributions" }),
    day("2026-01-01", { level: 4, label: "999999999999999999999 contributions" }),
  ]) {
    assert.throws(() => parseContributions(html));
  }
});

test("rejects duplicate dates and gaps instead of silently changing the total", () => {
  assert.throws(() => parseContributions(day("2026-01-01") + day("2026-01-01")));
  assert.throws(() => parseContributions(day("2026-01-01") + day("2026-01-03")));
});