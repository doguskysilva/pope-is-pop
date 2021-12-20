import { Book, Verse } from "../models";
import { range, fromPairs, pipe, partial, map } from "ramda";

const mountChapters = pipe<any, any, any, { [key: number]: Array<Verse> }>(
  partial(range, [1]),
  map((n) => [n, []]),
  fromPairs
);

export function fromApiBookToModelBook(book: any): Book {
  return {
    name: book.name,
    nameLong: book.nameLong,
    order: 0,
    abbreviation: book.abbreviation,
    testament: "new",
    chapters: mountChapters(book.chapters.length),
  };
}
