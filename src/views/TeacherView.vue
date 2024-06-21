<script setup lang="ts">
import WeeklyCalendar from "../components/calendar/WeeklyCalendar.vue";
import EdupalAd from "../components/EdupalAd.vue";
</script>

<template>
  <h1>튜터 메인페이지</h1>
  <div class="page-layout">
    <div class="page-main">
      <EdupalAd />
      <div class="cards">
        <div class="card">
          <div class="card-title">주간 일정</div>
          <div class="card-content">
            <WeeklyCalendar />
          </div>
        </div>
        <div class="card">
          <div class="card-title">퀴즈</div>
          <div class="card-content">

          </div>
        </div>
      </div>
    </div>
    <div class="page-aside">
      <div class="card">
        <div class="card-title">과제 제출 현황</div>
        <div class="card-content">
          <li>전쟁터 디오라마 프로젝트 (3/4 제출)</li>
          <li>그랜드캐니언 5000자 에세이 (1/4 제출)</li>
          <li>양파 식물일기 (1/4 제출)</li>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-layout {
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
    grid-template-columns: auto 1fr;
  }
}
</style>