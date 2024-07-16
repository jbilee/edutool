<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAssignmentStore } from "../stores/AssignmentStore"
import { useCurriculumStore } from "../stores/CurriculumStore"
import ProgressBar from "../components/curriculums/ProgressBar.vue"
import WeeklyCalendar from "../components/calendar/WeeklyCalendar.vue"

const curriculumStore = useCurriculumStore()
const assignmentsStore = useAssignmentStore()
const { curriculums } = storeToRefs(curriculumStore)
console.log(curriculums.value)
</script>

<template>
  <h1>학생 메인페이지</h1>
  <div class="page__layout">
    <div class="cards">
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
      <div class="card">
        <div class="card__title">내 숙제 현황(제출 여부)</div>
        <div class="card__content">학습 진도 (튜터의 커리큘럼에 따라 timeline 형식으로 제일크게 표시)</div>
      </div>
      <div class="card">
        <div class="card__title">내 퀴즈 현황(결과)</div>
        <div class="card__content">학습 진도 (튜터의 커리큘럼에 따라 timeline 형식으로 제일크게 표시)</div>
      </div>
    </div>
    <div class="card">
      <div class="card__title">주간 일정</div>
      <div class="card__content">
        <WeeklyCalendar :assignments="assignmentsStore.assignments" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page__layout {
  display: grid;
  gap: 1.75rem;

  @media (min-width: 768px) {
    grid-template-columns: 3fr 1fr;
  }
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}
</style>