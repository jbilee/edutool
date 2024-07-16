<script setup lang="ts">
import { ref } from "vue"
import StudentView from "./StudentView.vue"
import TeacherView from "./TeacherView.vue"

const accountType = ref('tutor')
</script>

<template>
  <TeacherView v-if="accountType === 'tutor'" />
  <StudentView v-if="accountType === 'student'" />
</template>