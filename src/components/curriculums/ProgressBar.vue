<script setup lang="ts">
import type { Chapter } from "../../utils/DataStore.ts"
const props = defineProps<{ chapters: Chapter[], totalChapters: number, currentChapter: number }>()
</script>

<template>
  <div class="progress-bar__container">
    <div v-for="chapter in props.chapters" :key="chapter.number">
      <div :class="['progress-bar__bar', chapter.number !== 1 ? 'progress-bar__bar-complete' : '']"></div>
      <div>[{{ chapter.number }}챕터] <strong>{{ chapter.topic }}</strong></div>
    </div>
  </div>
</template>

<style scoped>
.progress-bar__container {
  display: flex;
  gap: 0.5rem;

  &>div {
    width: 100%;
    flex: 1 0 1;
    text-align: center;
    position: relative;
  }
}

.progress-bar__bar {
  background: brown;
  border-radius: 50px;
  display: flex;
  height: 0.5rem;

}

.progress-bar__bar-complete {
  background: lightblue;
  height: 0.5rem;
}
</style>