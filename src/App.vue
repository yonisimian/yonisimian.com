<template>
  <Background />
  <div class="container w-6xl max-w-[83vw] mx-auto">
    <Header />
    <About />
    <Gallery />
    <Footer />
  </div>

  <ScrollToEdge direction="up" class="fixed top-2 right-1 sm:right-2 safe" />
  <ScrollToEdge direction="down" class="fixed bottom-2 right-1 sm:right-2 safe" />
</template>

<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1200
})
</script>

<style scoped>
.safe {
  margin-top: env(safe-area-inset-top);
  margin-right: env(safe-area-inset-right);
  margin-left: env(safe-area-inset-left);
  margin-bottom: env(safe-area-inset-bottom);
}
</style>
