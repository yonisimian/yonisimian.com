<template>
  <div class="container w-6xl max-w-[83vw] mx-auto">
    <PortfolioHeader />
    <PortfolioAbout />
    <PortfolioGallery />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useSeoMeta } from '@unhead/vue'

// Below the fold and holds all project data; load it after the header renders
const PortfolioGallery = defineAsyncComponent(
  () => import('/@/components/portfolio/PortfolioGallery.vue')
)

useSeoMeta({
  title: 'Portfolio',
  description:
    'Quickkkkk throw as many keywords as possible Vue Vite TypeScript Python Cobra nooooooooo I think someone is reading this right nowwwwwwwww',
  ogDescription:
    "Mommy and daddy told me to stay modest and not brag about stuff... so here's a website specifically programmed to show off cool stuff I do in life.",
  ogTitle: 'Yehonatan Simian - Portfolio',
  ogImage: 'https://yonisimian.com/media/portfolio/pp/0.webp'
})
</script>

<style scoped></style>
