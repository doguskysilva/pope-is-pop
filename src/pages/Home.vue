<script setup lang="ts">
import ListBooks from "@/components/ListBooks.vue";
import { useStore } from "@/store";
import { computed } from "vue";
import { Book } from "@/domain/models";

const store = useStore();

const book = computed(() => store.state.book);
const books = computed(() => store.state.books);

store.dispatch("fetchBooks");

function changeBook(book: Book) {
  store.dispatch("changeBook", book);
}
</script>

<template>
  <div class="p-10">
    <h1 class="text-center w-full font-bold text-4xl text-green-600 my-10">
      Hello, I'm Scripturas
    </h1>
    <div class="w-1/4">
      <h2 class="w-full font-bold text-2xl text-emerald-600 mb-5">
        Books {{ book?.name }}
      </h2>
      <ListBooks
        :books="books"
        :selected-book="book"
        @change="changeBook"
      ></ListBooks>
    </div>
    <div class="text-center"></div>
  </div>
</template>
