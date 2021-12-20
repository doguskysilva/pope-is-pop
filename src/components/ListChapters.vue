<script setup lang="ts">
defineProps<{
  chapters: string[];
  chapterSelected: number;
}>();

const emits = defineEmits<{
  (e: "change", chapter: number): void;
}>();

function changeChapter(chapter: string) {
  emits("change", parseInt(chapter));
}

function isActive(chapterSelected: number, chapter: string) {
  return chapterSelected == parseInt(chapter);
}
</script>

<template>
  <h2 class="w-full font-bold text-2xl text-emerald-600 mb-5">Chapters</h2>
  <div class="flex gap-1">
    <div
      v-for="chapter in chapters"
      :key="chapter"
      :class="{ active: isActive(chapterSelected, chapter) }"
      @click="changeChapter(chapter)"
      class="px-6 flex-none h-14 rounded-lg flex items-center justify-center bg-emerald-900 text-white text-lg cursor-pointer"
    >
      {{ chapter }}
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply border-2 border-emerald-600;
}
</style>
