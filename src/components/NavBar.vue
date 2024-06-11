<script setup lang="ts">
import { SignedIn, SignedOut, useClerk } from "vue-clerk";
const { signOut } = useClerk()
const onSignout = () => signOut()
</script>

<template>
  <div class="container">
    <div class="logo">
      <RouterLink to="/">로고</RouterLink>
    </div>
    <SignedIn>
      <button @click="onSignout">로그아웃</button>
    </SignedIn>
    <SignedOut>
      <RouterLink to="/signin">로그인</RouterLink>
    </SignedOut> 설정
  </div>
</template>

<style scoped>
.container {
  display: flex;
  padding: 1.5rem;
}

.logo {
  margin-right: auto;
}
</style>