<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <div class="main">
    <RouterView />
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
</style>