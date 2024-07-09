<script setup lang="ts">
import { Calendar } from "v-calendar"
import { useDataStore } from "../../utils/DataStore"

const store = useDataStore()
const assignmentAttributes = store.assignments.map((assignment) => ({
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
  day: new Date().getDate() + 1,
}
</script>

<template>
  <Calendar view="weekly" :attributes="attributes" :initial-page="startPage" locale="ko-KR" expanded borderless />
</template>