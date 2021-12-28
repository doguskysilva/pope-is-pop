<script setup lang="ts">
import { Verse } from "@/domain/models";

defineProps<{ verse: Verse }>();
</script>

<template>
  <p class="w-full text-lg">
    <span class="text-sm">{{ verse.number }} - </span> {{ verse.text }}
  </p>
</template>
