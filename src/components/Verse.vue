<script setup lang="ts">
import Verse from '@/domain/models/verse';

defineProps<{ verse: Verse }>();
</script>

<template>
  <p><span>{{verse.number}}</span> {{verse.text}}</p>
</template>
