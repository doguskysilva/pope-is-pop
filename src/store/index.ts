import { Book, Verse } from "@/domain/models";
import { requestBooks, requestChapter } from "@/domain/services";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import * as adapter from "@/domain/adapters";

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
        return Object.keys(state.book?.chapters);
      }
      return [];
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
    UPDATE_CHAPTER(state: State, chapter: number) {
      state.chapterSelected = chapter;
    },
  },
  actions: {
    fetchBooks({ commit }) {
      requestBooks().then((booksFromAPI) => {
        const books = booksFromAPI.map(adapter.fromApiBookToModelBook);
        commit("LOAD_BOOKS", books);
        commit("UPDATE_BOOK", books[0]);
      });
    },
    fetchChapter({ commit }) {},
    changeBook({ commit }, book) {
      commit("UPDATE_BOOK", book);
      commit("UPDATE_CHAPTER", 1);
    },
    changeChapter({ commit }, chapter) {
      commit("UPDATE_CHAPTER", chapter);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
