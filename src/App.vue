<template>
  <div>
    <Background />

    <DarkTheme class="absolute top-3 left-4" />

    <div class="flex items-center justify-center min-h-screen">
      <LoadingView v-if="isRouteLoading" />
      <RouterView v-else />
    </div>

    <Footer />

    <ScrollToEdge direction="up" tabindex="-1" class="fixed top-2 right-1 sm:right-2" />
    <ScrollToEdge direction="down" tabindex="-1" class="fixed bottom-2 right-1 sm:right-2 safe" />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'
import LoadingView from './views/LoadingView.vue'
import { useLoading } from '/@/composables/useLoading'

const { isRouteLoading } = useLoading()

// Note: `min-h-screen` won't allow the footer to appear on low-content pages...
// but that's okay because currently there are no such pages.
// If you want to change this, you can use `min-h-[calc(100dvh-137px)]`.

useSeoMeta({
  description: 'A personal website showcasing all my shenanigans and terrible dad jokes.',
  ogDescription:
    "C'mon, do it if you dare! I dare you to read this description. I double dare you! Muhahahaha",
  ogTitle: "Yoni's cool ass website",
  ogImage: 'https://yonisimian.com/media/portfolio/pp/0.webp',
  ogUrl: 'https://yonisimian.com/',
  ogType: 'website'
})
</script>

<style scoped>
.safe {
  padding-right: calc(0.5 * env(safe-area-inset-bottom));
}
</style>
