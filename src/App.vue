<template>
  <StarsBackground :showStars="showStars" />
  <div class="container w-3xl max-w-[83vw] mx-auto">
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
