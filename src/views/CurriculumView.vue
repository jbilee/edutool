<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useCurriculumStore } from "../stores/CurriculumStore"
import ProgressBar from "../components/curriculums/ProgressBar.vue"

const store = useCurriculumStore()
const { curriculums } = storeToRefs(store)
const handleClick = () => alert("clicked on icon")
</script>

<template>
  <div>
    <h1>커리큘럼</h1>
    <div class="control-bar">
      <div class="card__title">진행 중인 커리큘럼</div>
      <RouterLink to="/main/curriculum/new" class="btn">+ 커리큘럼 추가</RouterLink>
    </div>
    <div v-for="curriculum in curriculums" class="card__content">
      <v-icon name="bi-pencil-square" scale="1.4" class="card__corner-button" @click="handleClick" />
      <h3>{{ curriculum.name }}</h3>
      <p>{{ curriculum.goal }}</p>
      <ProgressBar :chapters="curriculum.chapters" :total-chapters="curriculum.totalChapters" text-size="size-regular"
        :current-chapter="curriculum.currentChapter" />
    </div>
    <div class="card__title hidden">완료한 커리큘럼</div>
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

.hidden {
  display: none;
}
</style>