<script setup lang="ts">
import { RouterView } from "vue-router"
import { SignedIn } from "vue-clerk"
import MemberNavBar from "./MemberNavBar.vue"
import Sidebar from "./Sidebar.vue"
</script>

<template>
  <SignedIn>
    <MemberNavBar />
    <div class="main">
      <div class="member-container">
        <Sidebar />
        <div class="page-container">
          <RouterView />
        </div>
      </div>
    </div>
  </SignedIn>
</template>

<style scoped>
.main {
  position: relative;
  top: 73px;
  height: calc(100vh - 73px);
  display: grid;
  place-content: center;
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