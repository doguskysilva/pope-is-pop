import { Book } from "../models";

export function fromApiBookToModelBook(book: any): Book {
  return {
    name: book.name,
    nameLong: book.nameLong,
    order: 0,
    abbreviation: book.abbreviation,
    testament: "new",
    chapters: {},
  };
}
