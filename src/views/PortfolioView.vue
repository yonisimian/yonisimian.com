<template>
  <div class="container w-6xl max-w-[83vw] mx-auto">
    <PortfolioHeader />
    <PortfolioAbout />
    <PortfolioGallery />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1200
})

useSeoMeta({
  title: 'Portfolio',
  description:
    'Quickkkkk throw as many keywords as possible Vue Vite TypeScript Python Cobra nooooooooo I think someone is reading this right nowwwwwwwww',
  ogDescription:
    "Mommy and daddy told me to stay modest and not brag about stuff... so here's a website specifically programmed to show off cool stuff I do in life.",
  ogTitle: 'Yehonatan Simian - Portfolio',
  ogImage: '/media/portfolio/pp.webp'
})
</script>

<style scoped></style>
