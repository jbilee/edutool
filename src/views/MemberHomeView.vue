<script setup lang="ts">
import { storeToRefs } from "pinia"
import StudentView from "./StudentView.vue"
import TutorView from "./TutorView.vue"
import { useAccountStore } from "../stores/AccountStore"

const store = useAccountStore()
const { accountType } = storeToRefs(store)
</script>

<template>
  <TutorView v-if="accountType === 'tutor'" />
  <StudentView v-if="accountType === 'student'" />
</template>