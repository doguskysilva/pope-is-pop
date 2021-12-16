<script setup lang="ts">
import { useStore } from "@/store";

const store = useStore();
</script>

<template>
  <h1 class="text-center w-full font-bold text-6xl text-green-600 my-10">
    It's, and the counter is {{ store.state.count }}
  </h1>
</template>
