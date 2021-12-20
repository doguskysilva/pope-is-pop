<script setup lang="ts">
import { Book } from "@/domain/models";

defineProps<{
  books: Array<Book>;
  selectedBook: Book | null;
}>();

const emits = defineEmits<{
  (e: "change", book: Book): void;
}>();

function isActive(selectedBook: Book | null, currentBook: Book) {
  if (selectedBook) {
    return selectedBook.abbreviation == currentBook.abbreviation;
  }
  return false;
}

function changeBook(book: Book) {
  emits("change", book);
}
</script>

<template>
  <h2 class="w-full font-bold text-2xl text-emerald-600 mb-5">Books</h2>
  <ul v-for="book in books" :key="book.abbreviation" class="text-lg">
    <li
      class="py-2 px-4 flex-none h-14 rounded-lg flex items-center justify-center bg-emerald-300 mb-1 cursor-pointer"
      :class="{ active: isActive(selectedBook, book) }"
      @click="changeBook(book)"
    >
      {{ book.name }} - {{ Object.keys(book.chapters).length }} chapters
    </li>
  </ul>
</template>

<style scoped>
.active {
  @apply border-2 border-emerald-600;
}
</style>
