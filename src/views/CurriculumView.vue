<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useAccountStore } from "../stores/AccountStore"
import CurriculumStudent from "./student/CurriculumStudent.vue"
import CurriculumTutor from "./tutor/CurriculumTutor.vue"

const accountStore = useAccountStore()
const { accountType } = storeToRefs(accountStore)
</script>

<template>
  <div v-if="accountType === 'tutor'">
    <CurriculumTutor />
  </div>
  <div v-if="accountType === 'student'">
    <CurriculumStudent />
  </div>
</template>