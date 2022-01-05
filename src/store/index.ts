import { Book, ChapterSearch, Verse } from "@/domain/models";
import { requestBooks, requestChapter } from "@/domain/services";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import * as adapter from "@/domain/adapters";
import * as logic from "@/domain/logic";

export interface State {
  books: Array<Book>;
  book: Book | null;
  chapterSelected: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    books: [],
    book: null,
    chapterSelected: 1,
  },
  getters: {
    chaptersFromSelectedBook(state: State) {
      if (state.book) {
        return logic.chapters(state.book);
      }
      return [];
    },
    nagivateToNext(state: State) {
      if (state.book) {
        return state.chapterSelected < logic.numbersOfChapter(state.book);
      }
      return false;
    },
    navigateToPrevious(state: State) {
      return state.chapterSelected > 1;
    },
  },
  mutations: {
    LOAD_BOOKS(state: State, books: Array<Book>) {
      state.books = books;
    },
    LOAD_CHAPTER(state: State, verses: Array<Verse>) {},
    UPDATE_BOOK(state: State, book: Book) {
      state.book = book;
    },
    UPDATE_CHAPTER_NUMBER(state: State, chapter: number) {
      state.chapterSelected = chapter;
    },
    LOAD_VERSES_TO_CHAPTER(state: State, verses: Array<Verse>) {
      if (state.book) {
        state.book.chapters[state.chapterSelected] = verses;
      }
    },
  },
  actions: {
    fetchBooks({ commit, state }) {
      if (state.books.length > 0) {
        return null;
      }

      console.log("Fetching books...");
      requestBooks().then((booksFromAPI) => {
        const books = booksFromAPI.map(adapter.fromApiBookToModelBook);
        commit("LOAD_BOOKS", books);
        commit("UPDATE_BOOK", books[0]);
      });
    },
    fetchChapter({ commit }, chapterSearch: ChapterSearch) {
      requestChapter(chapterSearch).then((versesFromAPI) => {
        const verses = versesFromAPI.map(adapter.fromApiVerseToModelVerse);
        commit("LOAD_VERSES_TO_CHAPTER", verses);
      });
    },
    changeBook({ commit }, book) {
      commit("UPDATE_BOOK", book);
      commit("UPDATE_CHAPTER_NUMBER", 1);
    },
    changeChapter({ commit }, chapter) {
      commit("UPDATE_CHAPTER_NUMBER", chapter);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
