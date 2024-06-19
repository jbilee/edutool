<script setup lang="ts">
import { RouterView } from "vue-router"
import { SignedIn } from "vue-clerk"
import Sidebar from "./Sidebar.vue"
</script>

<template>
  <SignedIn>
    <div class="container">
      <Sidebar />
      <div class="page-container">
        <RouterView />
      </div>
    </div>
  </SignedIn>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: inherit;
  scrollbar-gutter: stable both-edges;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.page-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
}
</style>