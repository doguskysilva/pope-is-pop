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
  <ul v-for="book in books" :key="book.abbreviation">
    <li
      class="p-1 bg-emerald-200 rounded-sm mb-1"
      :class="{ active: isActive(selectedBook, book) }"
      @click="changeBook(book)"
    >
      {{ book.name }}
    </li>
  </ul>
</template>

<style scoped>
.active {
  @apply border-2 border-emerald-900;
}
</style>
