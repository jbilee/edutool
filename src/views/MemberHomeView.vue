<script setup lang="ts">
import { useUser } from "vue-clerk"
import StudentView from "./StudentView.vue"
import TeacherView from "./TeacherView.vue"

const { user } = useUser()
const accountType = user.value?.publicMetadata.accountType
</script>

<template>
  <TeacherView v-if="accountType === 'tutor'" />
  <StudentView v-if="accountType === 'student'" />
</template>