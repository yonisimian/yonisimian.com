<template>
  <div class="container w-6xl max-w-[83vw] mx-auto" dir="rtl">
    <CookbookGallery />
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
  title: "Michal's Cookbook",
  meta: [
    {
      name: 'description',
      content:
        "My sister's old cookbook which I love soooo muchhhhhh (oh yes, and I love my sister too)"
    }
  ]
})
</script>

<style scoped></style>
