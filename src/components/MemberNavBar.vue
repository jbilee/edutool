<script setup lang="ts">
import { useRouter } from "vue-router"
import { useAccountStore } from "../stores/AccountStore"
import MobileMenuBtn from "../components/MobileMenuBtn.vue"

const router = useRouter()
const store = useAccountStore()
const handleSignout = () => {
  store.setLoggedInStatus(false)
  store.setAccountType(null)
  store.saveToStorage()
  router.push("/")
}
</script>

<template>
  <div class="navbar-container">
    <div class="logo">
      <RouterLink to="/">Edutool</RouterLink>
    </div>
    <div class="signout-button" @click="handleSignout">
      <v-icon name="io-log-out-sharp" />
      로그아웃
    </div>
    <MobileMenuBtn />
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
  background-color: rgb(255, 255, 255);
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
  display: none;
  color: var(--primary-link-color-base);
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: var(--primary-link-color-light);
  }

  @media (min-width: 768px) {
    display: block;
  }
}
</style>