<script setup lang="ts">
import {
  createChapterSearchFromParams,
  generateChapterSearchQuery,
} from "@/domain/logic";
import { useStore } from "@/store";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Verse from "@/components/Verse.vue";

console.log("Hey")

const route = useRoute();
const store = useStore();
const router = useRouter();
const chapterSearch = createChapterSearchFromParams(
  route.params.chapterSearch.toString()
);

const book = computed(() => store.state.book);
const chapterSelected = computed(() => store.state.chapterSelected);
const canNavigateNextChapter = computed(() => store.getters.nagivateToNext);
const canNavigatePreviousChapter = computed(
  () => store.getters.navigateToPrevious
);

store.dispatch("fetchChapter", chapterSearch);

function changeChapter(chapter: number) {
  if (book.value) {
    const searchString = generateChapterSearchQuery(
      chapterSearch.version,
      book.value?.abbreviation,
      chapter
    );

    store.dispatch("changeChapter", chapter);
    router.push({ name: "chapter", params: { chapterSearch: searchString } });
    store.dispatch("fetchChapter", createChapterSearchFromParams(searchString));
  }
}

function navigate(direction: string) {
  if (direction == "previous") {
    changeChapter(chapterSelected.value - 1);
  } else if (direction == "next") {
    changeChapter(chapterSelected.value + 1);
  }
}
</script>

<template>
  <div class="p-10">
    <h1 class="text-center w-full font-bold text-4xl text-green-600 my-5">
      {{ book?.name }} - Chapter {{ chapterSelected }}
    </h1>

    <div class="flex gap-4 flex-col text-center">
      <Verse
        v-for="verse in book?.chapters[chapterSelected]"
        :key="verse.number"
        :verse="verse"
      />
    </div>

    <div class="text-center mt-10">
      <button
        :disabled="!canNavigatePreviousChapter"
        class="mr-5 rounded bg-emerald-600 text-white p-2"
        @click="navigate('previous')"
      >
        Previous - {{ canNavigatePreviousChapter }}
      </button>
      <button
        :disabled="!canNavigateNextChapter"
        class="rounded bg-emerald-600 text-white p-2"
        @click="navigate('next')"
      >
        Next - {{ canNavigateNextChapter }}
      </button>
    </div>
  </div>
</template>
