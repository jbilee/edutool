<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import { useAccountStore } from "../stores/AccountStore"
import MemberNavBar from "./MemberNavBar.vue"
import Sidebar from "./Sidebar.vue"

const router = useRouter()
const store = useAccountStore()
const { isLoggedIn } = storeToRefs(store)
if (!isLoggedIn.value) router.push("/signin")
</script>

<template>
  <div v-if="isLoggedIn">
    <MemberNavBar />
    <div class="main">
      <div class="member-container">
        <Sidebar />
        <div class="page-container">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="main-guest">로그인한 유저만 접근할 수 있는 페이지입니다.
    <p>
      <RouterLink to="/signin">로그인 페이지로 이동 →</RouterLink>
    </p>
  </div>
</template>

<style scoped>
.main {
  position: relative;
  top: 73px;
  height: calc(100vh - 73px);
  display: grid;
  place-content: center;
}

.main-guest {
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
}

.member-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: inherit;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.page-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  scrollbar-gutter: stable;
  overflow: auto;
}
</style>