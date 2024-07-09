<script setup lang="ts">
import { storeToRefs } from "pinia"
import ProgressBar from "../components/curriculums/ProgressBar.vue"
import { useDataStore } from "../utils/DataStore"

const store = useDataStore()
const { curriculums } = storeToRefs(store)
const handleClick = () => alert("clicked on icon")
</script>

<template>
  <div>
    <h1>커리큘럼</h1>
    <RouterLink to="/main/curriculum/new">커리큘럼 추가</RouterLink>
    <div class="card__title">진행 중인 커리큘럼</div>
    <div v-for="curriculum in curriculums" class="card__content">
      <v-icon name="bi-pencil-square" class="card__corner-button" @click="handleClick" />
      <h3>{{ curriculum.name }}</h3>
      <p>{{ curriculum.goal }}</p>
      <ProgressBar :chapters="curriculum.chapters" :total-chapters="curriculum.totalChapters"
        :current-chapter="curriculum.currentChapter" />
    </div>
    <div class="card__title">완료한 커리큘럼</div>
  </div>
</template>

<style scoped>
h3 {
  margin: 0;
}

.card__content {
  position: relative;
  margin-bottom: 1.5rem;
}
</style>