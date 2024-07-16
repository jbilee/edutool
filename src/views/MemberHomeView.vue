<script setup lang="ts">
import { storeToRefs } from "pinia"
import StudentView from "./StudentView.vue"
import TeacherView from "./TeacherView.vue"
import { useAccountStore } from "../stores/AccountStore"

const store = useAccountStore()
const { accountType } = storeToRefs(store)
</script>

<template>
  <TeacherView v-if="accountType === 'tutor'" />
  <StudentView v-if="accountType === 'student'" />
</template>