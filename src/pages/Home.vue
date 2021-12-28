<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import { useRouter } from "vue-router";
import { Book } from "@/domain/models";
import ListBooks from "@/components/ListBooks.vue";
import ListChapters from "@/components/ListChapters.vue";
import { generateChapterSearchQuery } from "@/domain/logic";

const store = useStore();
const router = useRouter();

const book = computed(() => store.state.book);
const books = computed(() => store.state.books);

const chapters = computed(() => store.getters.chaptersFromSelectedBook);
const chapterSelected = computed(() => store.state.chapterSelected);

store.dispatch("fetchBooks");

function changeBook(book: Book) {
  store.dispatch("changeBook", book);
}

function changeChapter(chapter: number) {
  if (book.value) {
    const searchString = generateChapterSearchQuery(
      "nth",
      book.value?.abbreviation,
      chapterSelected.value
    );

    store.dispatch("changeChapter", chapter);
    router.push({ name: "chapter", params: { chapterSearch: searchString } });
  }
}
</script>

<template>
  <div class="p-10">
    <h1 class="text-center w-full font-bold text-4xl text-green-600 my-5">
      Hello, I'm Scripturas
    </h1>
    <div class="flex gap-4">
      <div class="flex-none">
        <ListBooks
          :books="books"
          :selected-book="book"
          @change="changeBook"
        ></ListBooks>
      </div>
      <div class="flex-none">
        <ListChapters
          :chapters="chapters"
          :chapterSelected="chapterSelected"
          @change="changeChapter"
        ></ListChapters>
      </div>
    </div>
  </div>
</template>
