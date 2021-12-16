import { split } from "ramda";
import { ChapterSearch } from "../models/chapter";

export function createChapterSearchFromParams(
  chapterQuery: string
): ChapterSearch {
  let parts = split(".", chapterQuery);
  return {
    book: parts[1] || "",
    chapter: parseInt(parts[2]) || 0,
    version: parts[0] || "",
  };
}
