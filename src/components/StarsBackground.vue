<template>
  <Transition name="fade">
    <div v-if="showStars" class="stars" />
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  showStars: boolean
}>()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
