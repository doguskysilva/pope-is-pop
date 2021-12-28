import { split } from "ramda";
import { Book, ChapterSearch } from "@/domain/models";

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

export function generateChapterSearchQuery(
  version: string,
  abbreviation: string,
  chapter: number
) {
  return `${version}.${abbreviation}.${chapter}`;
}

export function chapters(book: Book) {
  return Object.keys(book.chapters);
}

export function numbersOfChapter(book: Book): number {
  return chapters(book).length;
}
