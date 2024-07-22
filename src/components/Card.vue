<script setup lang="ts">
const props = defineProps<{ commentary: string }>()
</script>

<template>
  <div class="card-container">
    <div class="card-profile-pic">
      <img src="../assets/avatar.svg" />
    </div>
    <div class="card-text-area">
      <v-icon name="fa-quote-left" class="card-icon-left" />
      <div>
        {{ props.commentary }}
      </div>
      <v-icon name="fa-quote-right" class="card-icon-right" />
    </div>
  </div>
</template>

<style scoped>
.card-container {
  padding: 2rem;
  background-color: var(--primary-polygon-color-light);
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  text-align: center;
  overflow: hidden;
  height: 320px;
  align-items: center;
}

.card-text-area {
  display: flex;
  margin: auto;
  flex-direction: column;
}

.card-icon-right {
  align-self: flex-end;
}

.card-icon-left {
  align-self: flex-start;
}

.card-profile-pic {
  object-fit: cover;
  width: 85px;
  height: 85px;
  overflow: hidden;
  border-radius: 100%;
  background-color: rgb(255, 255, 255);
}
</style>