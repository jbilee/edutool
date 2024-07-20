<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useAccountStore } from "../stores/AccountStore"
import AssignmentStudentView from "./student/AssignmentStudentView.vue"
import AssignmentTutorView from "./tutor/AssignmentTutorView.vue"

const accountStore = useAccountStore()
const { accountType } = storeToRefs(accountStore)
</script>

<template>
  <div v-if="accountType === 'tutor'">
    <AssignmentTutorView />
  </div>
  <div v-if="accountType === 'student'">
    <AssignmentStudentView />
  </div>
</template>