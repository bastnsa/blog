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

export function sortByDate(entryA, entryB) {
  const dateA = new Date(entryA.frontmatter.pubDate);
  const dateB = new Date(entryB.frontmatter.pubDate);
  return dateB.getTime() - dateA.getTime();
}
