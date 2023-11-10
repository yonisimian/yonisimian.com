<template>
  <div class="background flex justify-center items-center">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  user-select: none;

  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
}
</style>
