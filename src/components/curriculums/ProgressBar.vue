<script setup lang="ts">
import type { Chapter } from "../../stores/CurriculumStore"
const props = defineProps<{ chapters: Chapter[], totalChapters: Number, currentChapter: Number, textSize: String }>()
</script>

<template>
  <div class="progress-bar__container">
    <div v-for="chapter in props.chapters" :key="chapter.number" :title="`${chapter.number}챕터: ${chapter.topic}`">
      <div :class="['progress-bar__bar', chapter.number !== 1 ? 'progress-bar__bar--complete' : '']"></div>
      <strong :class="textSize">{{ chapter.topic }}</strong>
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.progress-bar__bar {
  background: var(--primary-polygon-color-base);
  border-radius: 50px;
  display: flex;
  height: 0.5rem;
}

.progress-bar__bar--complete {
  background: var(--primary-polygon-color-light);
  height: 0.5rem;
}

.size-regular {
  font-size: 1rem;
}

.size-small {
  font-size: 0.75rem;
}
</style>