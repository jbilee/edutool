<script setup lang="ts">
import { ref } from "vue";
import HoverCard from "./HoverCard.vue";

const props = defineProps<{
  eventType: String
}>();
const isHovered = ref(false);
const toggleView = (event: string) => isHovered.value = event === "hovering";
</script>

<template>
  <div class="event-icon-container" @mouseenter="toggleView('hovering')" @mouseleave="toggleView('not hovering')">
    {{ props.eventType === "homework" ? "X" : "O" }}
    <HoverCard v-if="isHovered" title="History homework" date="2024.06.10" />
  </div>
</template>

<style scoped>
.event-icon-container {
  position: relative;
}
</style>