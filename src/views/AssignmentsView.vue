<script setup lang="ts">
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import { useAssignmentStore } from "../stores/AssignmentStore"
import { useCurriculumStore } from "../stores/CurriculumStore"
import AssignmentsTable from "../components/assignments/AssignmentsTable.vue"

const router = useRouter()
const assignmentStore = useAssignmentStore()
const curriculumStore = useCurriculumStore()
const { filteredAssignments } = storeToRefs(assignmentStore)
const { curriculums } = storeToRefs(curriculumStore)

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
      <div class="control-bar">
        <div class="card__title">전체 과제 목록</div>
        <div class="control-bar__controls">
          <select @change="onStatusFilterChange">
            <option data-filter="all">진행 전체</option>
            <option value="시작 전">시작 전</option>
            <option value="진행 중">진행 중</option>
            <option value="마감">마감</option>
          </select>
          <select @change="onCurriculumFilterChange">
            <option data-filter="all">커리큘럼 전체</option>
            <option v-for="curriculum in curriculums" :value="curriculum.name">{{ curriculum.name }}</option>
          </select>
          <div class="btn" @click="router.push({ name: 'addAssignment' })">+ 과제 추가</div>
        </div>
      </div>
      <div class="card__content">
        <AssignmentsTable :assignments="filteredAssignments" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>