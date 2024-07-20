<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"
import NavBar from "../components/NavBar.vue"

const onScroll = () => {
  console.log("Testing scroll listener")
}

onMounted(() => {
  window.addEventListener("scroll", onScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll)
})
</script>

<template>
  <NavBar />
  <div class="main">메인화면</div>
</template>

<style scoped>
.main {
  position: relative;
  top: 73px;
  height: calc(100dvh - 73px);
  display: grid;
  place-content: center;
}
</style>