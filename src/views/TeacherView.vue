<script setup lang="ts">
import WeeklyCalendar from "../components/calendar/WeeklyCalendar.vue";
import EdupalAd from "../components/EdupalAd.vue";
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
            <WeeklyCalendar />
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
          <li>전쟁터 디오라마 프로젝트 (3/4 제출)</li>
          <li>그랜드캐니언 5000자 에세이 (1/4 제출)</li>
          <li>양파 식물일기 (1/4 제출)</li>
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

.view-title {
  font-size: 2rem;
  text-align: left;
  padding-bottom: 1.75rem;
}

.cards {
  display: grid;
  grid-template-columns: 1fr;
  padding: 1.5rem 0;
  gap: 1.75rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.5fr 1fr;
  }
}
</style>