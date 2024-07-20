<script setup lang="ts">
import { useAccountStore } from "../../stores/AccountStore"
import { useCurriculumStore } from "../../stores/CurriculumStore"
import ProgressBar from "../../components/curriculums/ProgressBar.vue"

const accountStore = useAccountStore()
const curriculumStore = useCurriculumStore()
const curriculums = curriculumStore.getCurriculumsById(accountStore.enrolledClasses)
</script>

<template>
  <h1>커리큘럼</h1>
  <div class="card__title">학습 중인 커리큘럼</div>
  <div v-for="curriculum in curriculums" class="card__content">
    <h3>{{ curriculum.name }}</h3>
    <p>{{ curriculum.goal }}</p>
    <ProgressBar :chapters="curriculum.chapters" :total-chapters="curriculum.totalChapters" text-size="size-regular"
      :current-chapter="curriculum.currentChapter" />
  </div>
</template>

<style scoped>
h3 {
  margin: 0;
  color: var(--primary-polygon-color-base)
}

.card__content {
  position: relative;
  margin-bottom: 1.5rem;
}
</style>