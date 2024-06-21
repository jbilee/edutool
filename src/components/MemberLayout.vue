<script setup lang="ts">
import { RouterView } from "vue-router"
import { SignedIn } from "vue-clerk"
import Sidebar from "./Sidebar.vue"
</script>

<template>
  <SignedIn>
    <div class="member-container">
      <Sidebar />
      <div class="page-container">
        <RouterView />
      </div>
    </div>
  </SignedIn>
</template>

<style scoped>
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