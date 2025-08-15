<template>
  <div class="container w-6xl max-w-[83vw] mx-auto mb-auto pt-4 pb-8">
    <div class="flex justify-end">
      <ChooseLanguage />
    </div>
    <div class="w-full h-full mt-2" :dir="currDir">
      <VegetaHeader />
      <VegetaQuery />
      <VegetaMain />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'
import { useLang } from '/@/composables/useLang'

const { currDir } = useLang()

useSeoMeta({
  title: "Mom's Vegetables",
  description: "Find out what's in season or search for your favorite products ♥",
  ogDescription:
    "Mom, if I said I'll make you a vegetable thingy, I'll make it. No need to remind me every 6 months.",
  ogTitle: 'Vegetable Thingy For My Mom',
  ogImage: 'https://yonisimian.com/media/portfolio/pp/0.webp'
})
</script>

<style scoped></style>
