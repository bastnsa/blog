import type { Content } from "./types.ts";

export function formatDate(dateString: string) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [year, month, day] = dateString.slice(0, 10).split("-");
  const monthName = monthNames[parseInt(month, 10) - 1];
  const dayNum = parseInt(day, 10);

  return `${monthName} ${dayNum}, ${year}`;
}

export function sortByDate(contentA: Content, contentB: Content) {
  const dateA = new Date(contentA.frontmatter.pubDate);
  const dateB = new Date(contentB.frontmatter.pubDate);
  return dateB.getTime() - dateA.getTime();
}
