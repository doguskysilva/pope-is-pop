import { Book } from "@/domain/models";
import { requestBooks } from "@/domain/requests";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import * as adapter from "@/domain/adapters";

export interface State {
  books: Array<Book>;
  book: Book | null;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    books: [],
    book: null,
  },
  mutations: {
    LOAD_BOOKS(state: State, books: Array<Book>) {
      state.books = books;
    },
    UPDATE_BOOK(state: State, book: Book) {
      state.book = book;
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
    changeBook({ commit }, book) {
      commit("UPDATE_BOOK", book);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
