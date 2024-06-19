<script setup lang="ts">
import type { Assignment } from "../../utils/DataStore.ts"
const props = defineProps<{
  assignments: Assignment[]
}>()
const getDateString = (epoch: number) => {
  const date = new Date(epoch)
  return date.toLocaleDateString("ko-KR")
}
const getDueStatus = (start: number, end: number) => {
  const currentEpoch = Date.now()
  const timeTill = start - currentEpoch
  const timeLeft = end - currentEpoch
  if (timeLeft <= 0) return "마감"
  if (timeTill > 0) return "시작 전"
  return "진행 중"
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <td></td>
        <td>과제명</td>
        <td>커리큘럼</td>
        <td>과제 시작일</td>
        <td>과제 제출일</td>
        <td>제출 현황</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="assignment in props.assignments" :key="assignment.id.toString()">
        <td>
          <div class="label">{{ getDueStatus(assignment.startDate, assignment.dueDate) }}</div>
        </td>
        <td>{{ assignment.title }}</td>
        <td>{{ assignment.curriculum }}</td>
        <td>{{ getDateString(assignment.startDate) }}</td>
        <td>{{ getDateString(assignment.dueDate) }}</td>
        <td><v-icon name="bi-person-check-fill" /> {{ assignment.submissions.toString() }} / {{
          assignment.classSize.toString() }}</td>
        <td>체점하기</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;

  thead {
    font-weight: 700;
  }

  tbody {
    tr {
      &:hover {
        background: rgb(251, 240, 240);
      }
    }
  }
}
</style>