<script setup lang="ts">
</script>

<template>
  <div class="navbar-container">
    <div class="logo">
      <RouterLink to="/">Edutool</RouterLink>
    </div>
    <div>
      <RouterLink to="/main"><v-icon name="md-spacedashboard" /> 대시보드로</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  padding: 1.5rem;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(225, 225, 225);
}

.logo {
  font-family: "Oswald", sans-serif;
  margin-right: auto;

  a {
    color: black;
  }
}
</style>