<template>
  <div class="container w-6xl max-w-[83vw] mx-auto">
    <PortfolioHeader />
    <PortfolioAbout />
    <PortfolioGallery />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1200
})

useHead({
  title: 'Portfolio',
  meta: [
    {
      name: 'description',
      content:
        'Quickkkkk throw as many keywords as possible Vue Vite TypeScript Python Cobra nooooooooo I think someone is reading this right nowwwwwwwww'
    }
  ]
})
</script>

<style scoped></style>
