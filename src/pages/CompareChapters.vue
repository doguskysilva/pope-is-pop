<script setup lang="ts">
import { ref } from "vue";
import { createChapterSearchFromParams } from "@/domain/logic/utils";
import { useRoute, useRouter } from "vue-router";
import { ChapterSearch } from "@/domain/models/chapter";
import { clone } from "ramda";

const router = useRouter();
const route = useRoute();
let chapterSearch = ref(<ChapterSearch>{});
let chapterSearchToCompare = ref(<ChapterSearch>{});

if (
  typeof route.query.chapter == "string" &&
  typeof route.query.version == "string"
) {
  chapterSearch.value = createChapterSearchFromParams(route.query.chapter);
  chapterSearchToCompare.value = clone(chapterSearch.value);
  chapterSearchToCompare.value.version = route.query.version;

  console.log(chapterSearchToCompare.value);
  console.log(chapterSearch.value);
}
</script>

<template>
  <h1 class="text-center w-full font-bold text-4xl text-green-600 my-10">
    Here we are compare two chapters from diff versions.
  </h1>
</template>
