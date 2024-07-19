<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useAccountStore } from "../stores/AccountStore"
import AssignmentStudent from "./student/AssignmentStudent.vue"
import AssignmentTutor from "./tutor/AssignmentTutor.vue"

const accountStore = useAccountStore()
const { accountType } = storeToRefs(accountStore)
</script>

<template>
  <div v-if="accountType === 'tutor'">
    <AssignmentTutor />
  </div>
  <div v-if="accountType === 'student'">
    <AssignmentStudent />
  </div>
</template>