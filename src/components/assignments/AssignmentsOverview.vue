<script setup lang="ts">
import { RouterLink } from "vue-router"
import type { Assignment } from "../../utils/DataStore.ts"

const props = defineProps<{ assignments: Assignment[] }>()
</script>

<template>
  <li v-for="assignment in props.assignments">
    <RouterLink :to="`/assignments/${assignment.id}`">{{ assignment.title }}</RouterLink>
    <span>{{ assignment.submissions }} / {{ assignment.classSize }} 제출</span>
  </li>
</template>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  &:last-child {
    margin: 0;
  }
}
</style>