<script setup lang="ts">
import { reactive } from "vue"
import { getDateString, getDueStatus } from "../../utils/commons.ts"
import type { Assignment } from "../../utils/DataStore.ts"
const props = defineProps<{
  assignments: Assignment[]
}>()
const expandedState = reactive<Record<string, boolean>>({})

props.assignments.forEach((assignment) => expandedState[assignment.id] = false)

const toggleDetails = (id: string) => expandedState[id] = !expandedState[id]
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
    <tbody v-for="assignment in props.assignments" :key="assignment.id.toString()">
      <tr>
        <td>
          <div class="label">{{ getDueStatus(assignment.startDate, assignment.dueDate) }}</div>
        </td>
        <td>{{ assignment.title }}</td>
        <td>{{ assignment.curriculum }}</td>
        <td>{{ getDateString(assignment.startDate) }}</td>
        <td>{{ getDateString(assignment.dueDate) }}</td>
        <td class="assignments__submissions">
          <div><v-icon name="bi-person-check-fill" /> {{ assignment.submissions.toString() }} / {{
            assignment.classSize.toString() }}</div> 체점하기
        </td>
      </tr>
      <tr class="assignments__details" v-if="expandedState[assignment.id]">
        <td></td>
        <td colspan="5">
          <strong>과제 내용</strong>
          {{ assignment.details }}
          <strong>제출 학생</strong>
          {{ assignment.submitters.join(", ") }}
        </td>
      </tr>
      <tr @click="toggleDetails(assignment.id.toString())">
        <td colspan="6"><v-icon
            :name="expandedState[assignment.id] ? 'bi-chevron-compact-up' : 'bi-chevron-compact-down'" /></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-spacing: 0.5rem;

  thead {
    font-weight: 700;

    td {
      padding: 0 0.75rem;
    }
  }

  .assignments__submissions {
    display: flex;
    justify-content: space-between;
  }

  tbody {
    outline: 1px solid rgb(186, 202, 221);
    border-radius: 0.5rem;

    tr {
      &:first-child {
        td {
          padding: 0.75rem;
          padding-top: 1.25rem;
        }
      }

      &:last-child {
        text-align: center;
        cursor: pointer;
        transition: 100ms;

        td {
          padding: 0;
          padding-bottom: 0.5rem;
        }
      }

      &:last-child:active {
        transform: translateY(2px);
      }
    }

    td {
      height: 2rem;
    }
  }
}
</style>