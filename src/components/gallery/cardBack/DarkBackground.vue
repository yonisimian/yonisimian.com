<template>
  <Transition name="fade" appear>
    <div
      class="bg-black bg-opacity-30 fixed top-0 left-0 z-10 w-screen h-screen overflow-hidden select-none"
    />
  </Transition>
</template>

<script setup lang="ts"></script>

<style scoped>
.fade-enter-active,
.fade-leave-active,
.fade-appear-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to,
.fade-appear-from {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from,
.fade-appear-to {
  opacity: 1;
}
</style>
