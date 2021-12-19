import { Book } from "@/domain/models";
import { requestBooks } from "@/domain/requests";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import * as adapter from "@/domain/adapters";

export interface State {
  books: Array<Book>;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    books: [],
  },
  mutations: {
    LOAD_BOOKS(state: State, books: Array<Book>) {
      state.books = books;
    },
  },
  actions: {
    fetchBooks({ commit }) {
      requestBooks().then((booksFromAPI) => {
        const books = booksFromAPI.map(adapter.fromApiBookToModelBook);
        commit("LOAD_BOOKS", books);
      });
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
