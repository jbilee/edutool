<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useAccountStore } from "../stores/AccountStore"
import CurriculumStudentView from "./student/CurriculumStudentView.vue"
import CurriculumTutorView from "./tutor/CurriculumTutorView.vue"

const accountStore = useAccountStore()
const { accountType } = storeToRefs(accountStore)
</script>

<template>
  <div v-if="accountType === 'tutor'">
    <CurriculumTutorView />
  </div>
  <div v-if="accountType === 'student'">
    <CurriculumStudentView />
  </div>
</template>