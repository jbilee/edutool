<script setup lang="ts">
import { ref } from "vue";
import AssignmentsTable from "../components/assignments/AssignmentsTable.vue";

const sample = ref([
  { id: 1, title: "양파랜드 디오라마", startDate: 1715147728848, dueDate: 1718157728848, curriculum: "식물 키우기", submissions: 3, classSize: 10, details: "" },
  { id: 2, title: "양파 식물일기", startDate: 1717157728848, dueDate: 1718157728848, curriculum: "식물 키우기", submissions: 9, classSize: 10, details: "" },
  { id: 3, title: "다문화가정 정책", startDate: 1708157728848, dueDate: 1718157728848, curriculum: "사회탐구", submissions: 5, classSize: 5, details: "" },
  { id: 4, title: "소디윰 클로라이드", startDate: 1718157728848, dueDate: 1728157728848, curriculum: "화학 II", submissions: 6, classSize: 8, details: "" },
  { id: 5, title: "파라다이클로로벤젠", startDate: 1728157728848, dueDate: 1731157728848, curriculum: "화학 II", submissions: 4, classSize: 8, details: "" },
])
</script>

<template>
  <div>
    <h1>과제</h1>
    <div class="page-layout">
      <button class="large">과제 추가</button>
      필터 기능 -- 커리큘럼별로 보기, 진행 여부별로 보기
      정렬 기능 -- 시작일, 제출일, 과제명
      <div class="card-title">전체 과제 목록</div>
      <div class="card-content">
        <AssignmentsTable :assignments="sample" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>