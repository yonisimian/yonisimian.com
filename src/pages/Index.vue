<template>
  <StarsBackground :showStars="showStars" />
  <div class="container max-w-3xl mx-auto">
    <div class="h-24" />
    <HelloThere />

    <Gallery />

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'

const showStars = ref(true)

const toggleStars = () => {
  showStars.value = !showStars.value
}

provide('toggleStars', toggleStars)
</script>

<style scoped></style>
