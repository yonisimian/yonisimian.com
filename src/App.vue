<template>
  <Background />
  <div class="container w-6xl max-w-[83vw] mx-auto">
    <Header />
    <About />
    <Gallery />
    <Footer />
  </div>

  <ScrollToEdge direction="up" class="fixed top-2 right-6 sm:right-4" />
  <ScrollToEdge direction="down" class="fixed bottom-2 right-6 sm:right-4" />
</template>

<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1200
})
</script>
