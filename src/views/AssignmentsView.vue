<script setup lang="ts">
import { storeToRefs } from "pinia"
import AssignmentsTable from "../components/assignments/AssignmentsTable.vue"
import { useDataStore } from "../utils/DataStore.ts"

const store = useDataStore()
const { curriculums, filteredAssignments } = storeToRefs(store)

const onFilterChange = (e: Event) => {
  const target = e.target as HTMLSelectElement
  const selectedOption = target.selectedOptions[0]
  if (selectedOption.dataset.filter) {
    store.setCurriculumFilter(null)
  } else {
    store.setCurriculumFilter(selectedOption.value)
  }
}
</script>

<template>
  <div>
    <h1>과제</h1>
    <div class="page-layout">
      <button class="large">과제 추가</button>
      필터 기능 -- 커리큘럼별로 보기, 진행 여부별로 보기
      정렬 기능 -- 시작일, 제출일, 과제명
      <div class="card-title">전체 과제 목록</div>
      <select @change="onFilterChange">
        <option data-filter="all">전체</option>
        <option v-for="curriculum in curriculums" :value="curriculum">{{ curriculum }}</option>
      </select>
      <div class="card-content">
        <AssignmentsTable :assignments="filteredAssignments" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>