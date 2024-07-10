<script setup lang="ts">
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import AssignmentsTable from "../components/assignments/AssignmentsTable.vue"
import { useAssignmentStore } from "../stores/AssignmentStore.ts"
import { useCurriculumStore } from "../stores/CurriculumStore.ts"

const router = useRouter()
const assignmentStore = useAssignmentStore()
const curriculumStore = useCurriculumStore()
const { filteredAssignments } = storeToRefs(assignmentStore)
const { curriculums } = storeToRefs(curriculumStore)
console.log(filteredAssignments.value)
console.log(curriculums)

const onStatusFilterChange = (e: Event) => {
  const target = e.target as HTMLSelectElement
  const selectedOption = target.selectedOptions[0]
  if (selectedOption.dataset.filter) {
    assignmentStore.setStatusFilter(null)
  } else {
    assignmentStore.setStatusFilter(selectedOption.value)
  }
}

const onCurriculumFilterChange = (e: Event) => {
  const target = e.target as HTMLSelectElement
  const selectedOption = target.selectedOptions[0]
  if (selectedOption.dataset.filter) {
    assignmentStore.setCurriculumFilter(null)
  } else {
    assignmentStore.setCurriculumFilter(selectedOption.value)
  }
}
</script>

<template>
  <div>
    <h1>과제</h1>
    <div class="page__layout">
      <div class="card__title">전체 과제 목록</div>
      정렬 기능 -- 시작일, 제출일, 과제명
      <div class="control-bar">
        <div>
          진행: <select @change="onStatusFilterChange">
            <option data-filter="all">전체</option>
            <option value="시작 전">시작 전</option>
            <option value="진행 중">진행 중</option>
            <option value="마감">마감</option>
          </select>
        </div>
        <div>
          커리큘럼: <select @change="onCurriculumFilterChange">
            <option data-filter="all">전체</option>
            <option v-for="curriculum in curriculums" :value="curriculum.name">{{ curriculum.name }}</option>
          </select>
        </div>
        <button class="large" @click="router.push({ name: 'addAssignment' })">과제 추가</button>
      </div>
      <div class="card__content">
        <AssignmentsTable :assignments="filteredAssignments" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>