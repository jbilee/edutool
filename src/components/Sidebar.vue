<script setup lang="ts">
</script>

<template>
  <div class="sidebar">
    <li>
      <RouterLink to="/main">메인페이지</RouterLink>
    </li>
    <li>
      <RouterLink to="/main/curriculum">내 커리큘럼</RouterLink>
    </li>
    <li>
      <RouterLink to="/main/assignments">과제</RouterLink>
    </li>
    <li>
      <RouterLink to="/main/quizzes">퀴즈</RouterLink>
    </li>
  </div>
</template>

<style scoped>
.sidebar {
  width: 100%;
  padding: 1.5rem;
  border-right: 1px solid rgb(225, 225, 225);
  flex: 1 0 1;
  display: none;

  & a {
    color: var(--primary-text-color);

    &.router-link-exact-active {
      color: var(--primary-link-color-base);
    }
  }

  & li {
    margin-bottom: 0.75rem;
  }

  @media (min-width: 768px) {
    display: block;
    max-width: 140px;
  }

  @media (min-width: 1600px) {
    max-width: 240px;
  }
}
</style>