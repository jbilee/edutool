<script setup lang="ts">
import { RouterView } from "vue-router";
import { SignedIn } from "vue-clerk";
import Sidebar from "./Sidebar.vue";
</script>

<template>
  <SignedIn>
    <div class="container">
      <Sidebar />
      <RouterView />
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
</style>