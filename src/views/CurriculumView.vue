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
    <div v-for="curriculum in curriculums" class="card__content">
      <v-icon name="bi-pencil-square" class="card__icon" @click="handleClick" />
      <h3>{{ curriculum.name }}</h3>
      <p>{{ curriculum.goal }}</p>
      <ProgressBar :chapters="curriculum.chapters" :total-chapters="curriculum.totalChapters"
        :current-chapter="curriculum.currentChapter" />
    </div>
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

.card__icon {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
}
</style>