<script setup lang="ts">
import { Calendar } from "v-calendar"
import { getWeekOfMonth } from "date-fns"
import type { Assignment } from "../../stores/AssignmentStore"

const props = defineProps<{ assignments: Assignment[] }>()
const assignmentAttributes = props.assignments.map((assignment) => ({
  order: 0,
  dates: [assignment.dueDate],
  dot: true,
  popover: {
    label: `${assignment.title} 마감`
  }
}))
const attributes = [...assignmentAttributes]
const startPage = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  week: getWeekOfMonth(new Date()),
}
</script>

<template>
  <Calendar view="weekly" :attributes="attributes" :initial-page="startPage" locale="ko-KR" expanded borderless />
</template>