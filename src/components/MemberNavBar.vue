<script setup lang="ts">
import { useRouter } from "vue-router"
import { useAccountStore } from "../stores/AccountStore"

const router = useRouter()
const store = useAccountStore()
const handleClick = () => {
  store.setLoggedInStatus(false)
  store.setAccountType(null)
  router.push("/")
}
</script>

<template>
  <div class="navbar-container">
    <div class="logo">
      <RouterLink to="/">Edutool</RouterLink>
    </div>
    <div class="signout-button" @click="handleClick">
      <v-icon name="io-log-out-sharp" />
      로그아웃
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

.signout-button {
  color: var(--primary-link-color-base);
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: var(--primary-link-color-light);
  }
}
</style>