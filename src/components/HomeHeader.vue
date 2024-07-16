<script setup lang="ts">
</script>

<template>
  <div class="navbar-container">
    <div class="logo">
      <RouterLink to="/">Edutool</RouterLink>
    </div>
    <SignedIn>
      <button @click="() => console.log('logging out')">로그아웃</button>
    </SignedIn>
    <SignedOut>
      <RouterLink to="/signin">로그인</RouterLink>
    </SignedOut> 설정
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