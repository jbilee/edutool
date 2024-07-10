<script setup lang="ts">
import { storeToRefs } from "pinia"
import AssignmentsOverview from "../components/assignments/AssignmentsOverview.vue"
import EdupalAd from "../components/EdupalAd.vue"
import ProgressBar from "../components/curriculums/ProgressBar.vue"
import WeeklyCalendar from "../components/calendar/WeeklyCalendar.vue"
import { useDataStore } from "../utils/DataStore"

const store = useDataStore()
const { curriculums } = storeToRefs(store)
</script>

<template>
  <h1>튜터 메인페이지</h1>
  <div class="page__layout">
    <div class="page__main">
      <EdupalAd />
      <div class="cards">
        <div class="card">
          <div class="card__title">주간 일정</div>
          <div class="card__content">
            <WeeklyCalendar :assignments="store.assignments" />
          </div>
        </div>
        <div class="card">
          <div class="card__title">학습 진도</div>
          <div class="card__content">
            <div v-for="curriculum in curriculums">
              <h3>{{ curriculum.name }}</h3>
              <ProgressBar :chapters="curriculum.chapters" :total-chapters="curriculum.totalChapters"
                :current-chapter="curriculum.currentChapter" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page__aside">
      <div class="card">
        <div class="card__title">과제 제출 현황</div>
        <div class="card__content">
          <AssignmentsOverview :assignments="store.assignments" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page__layout {
  display: grid;
  gap: 1.75rem;

  @media (min-width: 768px) {
    grid-template-columns: 2.5fr 1fr;
  }
}

.cards {
  display: grid;
  grid-template-columns: 1fr;
  padding: 1.5rem 0;
  gap: 1.75rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.75fr;
  }
}
</style>