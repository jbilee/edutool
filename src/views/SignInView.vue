<script setup lang="ts">
import { SignIn } from "vue-clerk";
</script>

<template>
  <div class="container">
    <SignIn />
  </div>
</template>

<style scoped>
.container {
  position: relative;
  top: -80px;
}
</style>