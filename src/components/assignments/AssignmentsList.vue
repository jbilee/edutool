<script setup lang="ts">
import type { Assignment } from "../../stores/AssignmentStore.ts"

const props = defineProps<{ assignmentsByCurriculum: { curriculum: string, assignments: Assignment[] }[] | undefined }>()
</script>

<template>
  <div v-for="assignmentList in props.assignmentsByCurriculum" class="curriculum-container">
    <h3>[{{ assignmentList.curriculum }}] 과제</h3>
    <div v-for="assignment in assignmentList.assignments">
      {{ assignment.title }}
    </div>
  </div>
</template>

<style scoped>
h3 {
  margin: 0;
  margin-bottom: 0.5rem;
}

.curriculum-container {
  margin-bottom: 1.25rem;

  &:last-child {
    margin: 0;
  }
}
</style>