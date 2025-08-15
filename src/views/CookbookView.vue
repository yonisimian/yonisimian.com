<template>
  <div class="container w-6xl max-w-[83vw] mx-auto" dir="rtl">
    <CookbookGallery />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
  title: "Michal's Cookbook",
  description:
    "My sister's old cookbook which I love soooo muchhhhhh (oh yeah and I love my sister too)",
  ogDescription: "A collection of recipes from my lovely sister's old cookbook.",
  ogTitle: "Michal's Cookbook",
  ogImage: 'https://yonisimian.com/media/portfolio/pp/0.webp'
})
</script>

<style scoped></style>
