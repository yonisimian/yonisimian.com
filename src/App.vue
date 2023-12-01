<template>
  <Background />
  <div class="container w-6xl max-w-[83vw] mx-auto">
    <Header />
    <About />
    <Gallery />
    <Footer />
  </div>
  <ScrollUp />
</template>

<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1200
})
</script>
