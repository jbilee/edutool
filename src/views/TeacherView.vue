<script setup lang="ts">
import AssignmentsOverview from "../components/assignments/AssignmentsOverview.vue"
import EdupalAd from "../components/EdupalAd.vue"
import WeeklyCalendar from "../components/calendar/WeeklyCalendar.vue"
import { useDataStore } from "../utils/DataStore"

const store = useDataStore()
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
          <div class="card__title">학생 문의</div>
          <div class="card__content">

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
    grid-template-columns: 2fr 1fr;
  }
}

.cards {
  display: grid;
  grid-template-columns: 1fr;
  padding: 1.5rem 0;
  gap: 1.75rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.5fr;
  }
}
</style>