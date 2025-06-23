<template>
  <div class="container w-6xl max-w-[83vw] mx-auto">
    <Header />
    <About />
    <Gallery />
  </div>
</template>

<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1200
})
</script>

<style scoped></style>
