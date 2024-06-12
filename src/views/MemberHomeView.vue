<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import TeacherView from "./TeacherView.vue";

</script>

<template>
  <div class="container">
    <Sidebar />
    <TeacherView />
  </div>
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