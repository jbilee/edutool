<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useAccountStore } from "../stores/AccountStore"
import { Assignment, useAssignmentStore } from "../stores/AssignmentStore"
import { useCurriculumStore } from "../stores/CurriculumStore"
import AssignmentsList from "../components/assignments/AssignmentsList.vue"
import ProgressBar from "../components/curriculums/ProgressBar.vue"
import WeeklyCalendar from "../components/calendar/WeeklyCalendar.vue"

const curriculumStore = useCurriculumStore()
const assignmentsStore = useAssignmentStore()
const accountStore = useAccountStore()
const { displayName } = storeToRefs(accountStore)
const curriculums = curriculumStore.getCurriculumsById(accountStore.enrolledClasses)
const assignmentsByCurriculum = curriculums?.map((curriculum) => assignmentsStore.getAssignmentsByCurriculum(curriculum.name))
const allAssignments = assignmentsByCurriculum ? assignmentsByCurriculum.reduce<Assignment[]>((arr, cur) => {
  arr.push(...cur.assignments)
  return arr
}, []) : []
</script>

<template>
  <h1>{{ displayName }}님, 어서오세요!</h1>
  <div class="page__layout">
    <div class="cards">
      <div class="card" v-if="curriculums && curriculums.length > 0">
        <div class="card__title">학습 진도</div>
        <div class="card__content progress-container">
          <div v-for="curriculum in curriculums">
            <h3>{{ curriculum.name }}</h3>
            <ProgressBar :chapters="curriculum.chapters" :total-chapters="curriculum.totalChapters"
              text-size="size-small" :current-chapter="curriculum.currentChapter" />
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card__title">내 과제 현황</div>
        <div class="card__content">
          <AssignmentsList :assignmentsByCurriculum="assignmentsByCurriculum" />
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card__title">주간 일정</div>
      <div class="card__content">
        <WeeklyCalendar :assignments="allAssignments" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page__layout {
  display: grid;
  gap: 1.75rem;

  @media (min-width: 1280px) {
    grid-template-columns: 3fr 1fr;
  }
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.card {
  max-width: calc(100vw - 27px);
}

.card__content {
  overflow-x: hidden;
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