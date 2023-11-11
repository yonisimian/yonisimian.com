<template>
  <Transition name="darkBackground" appear>
    <div
      class="bg-black bg-opacity-30 fixed top-0 left-0 z-10 w-screen h-screen overflow-hidden select-none"
    />
  </Transition>
</template>

<script setup lang="ts"></script>

<style scoped>
.darkBackground-enter-active,
.darkBackground-leave-active,
.darkBackground-appear-active {
  transition: opacity 0.5s;
}
.darkBackground-enter-from,
.darkBackground-leave-to,
.darkBackground-appear-from {
  opacity: 0;
}
.darkBackground-enter-to,
.darkBackground-leave-from,
.darkBackground-appear-to {
  opacity: 1;
}
</style>
