<script setup lang="ts">
const props = defineProps<{
  title: String,
  date: String
}>()
</script>

<template>
  <div class="hover-card-content">
    <strong>{{ props.title }}</strong>{{ props.date }}
  </div>
</template>

<style scoped>
.hover-card-content {
  position: absolute;
  left: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-width: max-content;
  border-radius: 0.75rem;
  background: rgb(255, 255, 255);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}
</style>