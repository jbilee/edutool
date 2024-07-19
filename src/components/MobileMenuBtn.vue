<script setup lang="ts">
import { ref } from "vue"
import MobileMenu from "./MobileMenu.vue"

const isOpen = ref(false)
const openMenu = () => isOpen.value = true
const closeMenu = () => isOpen.value = false
</script>

<template>
  <div class="mobile-menu-btn" v-if="isOpen" @click="closeMenu">
    <v-icon name="io-close-outline" scale="1.2" />
  </div>
  <div class="mobile-menu-btn" v-else @click="openMenu">
    <v-icon name="co-hamburger-menu" scale="1.2" />
  </div>
  <div :class="['mobile-bg', isOpen ? 'mobile-menu__open' : 'mobile-menu__closed']" @click="closeMenu" />
  <MobileMenu :class="isOpen ? 'mobile-menu__open' : 'mobile-menu__closed'" @navigate="closeMenu" />
</template>

<style scoped>
.mobile-menu-btn {
  position: relative;
  z-index: 60;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
}

@media (max-width: 767px) {
  .mobile-bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .mobile-menu__open {
    display: block;
  }

  .mobile-menu__closed {
    display: none;
  }

}
</style>