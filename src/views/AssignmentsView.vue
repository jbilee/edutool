<script setup lang="ts">
import { storeToRefs } from "pinia"
import AssignmentsTable from "../components/assignments/AssignmentsTable.vue";
import { useDataStore } from "../utils/DataStore.ts"

const store = useDataStore()
const { assignments, curriculums } = storeToRefs(store)
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
        <AssignmentsTable :assignments="assignments" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>