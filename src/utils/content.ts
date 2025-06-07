import type { Content } from "./types.ts";
import { sortByDate } from "./date.ts";

export function getContent(contentObj: any) {
  return Object.values(contentObj) as Content[];
}

export function getLatestContent(contentObj: any) {
  return getContent(contentObj).sort(sortByDate)[0];
}
