<script setup lang="ts">
import { useRoute } from "vue-router"
import { storeToRefs } from "pinia"
import { useDataStore } from "../utils/DataStore"

const store = useDataStore()
const { assignments } = storeToRefs(store)
const route = useRoute()
const assignmentId = Number(route.params.id)
const targetAssignment = assignments.value.filter((assignment) => assignment.id === assignmentId)[0]
</script>

<template>
  <h1>과제 상세 페이지</h1>
  {{ targetAssignment.curriculum }}
  <h3> {{ targetAssignment.title }}</h3>
  <div>{{ targetAssignment.details }}</div>
</template>

<style scoped></style>