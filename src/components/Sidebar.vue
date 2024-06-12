<script setup lang="ts">
</script>

<template>
  <div class="sidebar">
    <li>내 커리큘럼</li>
    <li>숙제/과제</li>
    <li>퀴즈</li>
    <li>일정관리</li>
  </div>
</template>

<style scoped>
.sidebar {
  width: 100%;
  padding: 1.5rem 0;
  border-right: 1px solid rgb(225, 225, 225);
  flex: 1 0 1;

  @media (min-width: 768px) {
    max-width: 210px;
  }

  @media (min-width: 1200px) {
    max-width: 260px;
  }
}
</style>