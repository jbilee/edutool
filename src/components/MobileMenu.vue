<script setup lang="ts">
import { useRouter } from "vue-router"

const emit = defineEmits(["navigate"])
const router = useRouter()
const onMenuClick = (path: string) => {
  emit("navigate")
  router.push(path)
}
</script>

<template>
  <div class="mobile-menu">
    <li @click="onMenuClick('/main')">
      <v-icon name="md-home-round" />{{ " " }}메인페이지
    </li>
    <li @click="onMenuClick('/main/curriculum')">
      <v-icon name="md-school-round" />{{ " " }}커리큘럼
    </li>
    <li @click="onMenuClick('/main/assignments')">
      <v-icon name="hi-solid-book-open" />{{ " " }}과제
    </li>
    <li @click="onMenuClick('/main/quizzes')">
      <v-icon name="hi-solid-pencil" />{{ " " }}퀴즈
    </li>
  </div>
</template>

<style scoped>
.mobile-menu {
  position: fixed;
  right: 0;
  top: 73px;
  bottom: 0;
  z-index: 10;
  border-left: 1px solid rgb(225, 225, 225);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  background-color: rgb(255, 255, 255);

  li {
    cursor: pointer;
    padding: 0.75rem 2rem;

    &:first-child {
      padding-top: 1.5rem;
    }

    &:last-child {
      padding-bottom: 1.5rem;
    }

    &.router-link-exact-active {
      color: var(--primary-link-color-base);
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
}
</style>