<template>
  <div class="navbar-container">
    <div class="logo">
      <RouterLink to="/">Edutool</RouterLink>
    </div>
    <div class="navbar-link">
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
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.7);

  a {
    color: rgb(0, 0, 0);
  }
}

.logo {
  font-family: "Oswald", sans-serif;
  margin-right: auto;
}
</style>