<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useAccountStore } from "../stores/AccountStore"
import { useAssignmentStore } from "../stores/AssignmentStore"
import { useCurriculumStore } from "../stores/CurriculumStore"
import AssignmentsOverview from "../components/assignments/AssignmentsOverview.vue"
import EdupalAd from "../components/EdupalAd.vue"
import ProgressBar from "../components/curriculums/ProgressBar.vue"
import WeeklyCalendar from "../components/calendar/WeeklyCalendar.vue"

const assignmentsStore = useAssignmentStore()
const curriculumStore = useCurriculumStore()
const accountStore = useAccountStore()
const { displayName } = storeToRefs(accountStore)
const { assignments } = storeToRefs(assignmentsStore)
const { curriculums } = storeToRefs(curriculumStore)
</script>

<template>
  <h1>{{ displayName }}님, 어서오세요!</h1>
  <div class="page__layout">
    <div class="page__main">
      <EdupalAd />
      <div class="cards">
        <div class="card">
          <div class="card__title">주간 일정</div>
          <div class="card__content">
            <WeeklyCalendar :assignments="assignments" />
          </div>
        </div>
        <div class="card">
          <div class="card__title">학습 진도</div>
          <div class="card__content progress-container">
            <div v-for="curriculum in curriculums">
              <h3>{{ curriculum.name }}</h3>
              <ProgressBar :chapters="curriculum.chapters" :total-chapters="curriculum.totalChapters"
                text-size="size-small" :current-chapter="curriculum.currentChapter" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page__aside">
      <div class="card">
        <div class="card__title">과제 제출 현황</div>
        <div class="card__content">
          <AssignmentsOverview :assignments="assignments" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page__layout {
  display: grid;
  gap: 0;

  @media (min-width: 1400px) {
    grid-template-columns: 2.5fr 1fr;
    gap: 1.75rem;
  }
}

.cards {
  display: grid;
  grid-template-columns: 1fr;
  padding: 1.5rem 0;
  gap: 1.75rem;

  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1.75fr;
  }
}

.progress-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h3 {
  margin: 0;
  margin-bottom: 1rem;
}
</style>