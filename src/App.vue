<template>
  <div>
    <Background />

    <DarkTheme class="absolute top-3 left-4" />

    <LoadingView v-if="isRouteLoading" class="min-h-[calc(100dvh-137px)]" />
    <RouterView v-else class="min-h-[calc(100dvh-137px)]" />

    <Footer />

    <ScrollToEdge direction="up" class="fixed top-2 right-1 sm:right-2" />
    <ScrollToEdge direction="down" class="fixed bottom-2 right-1 sm:right-2 safe" />
  </div>
</template>

<script setup lang="ts">
import LoadingView from './views/LoadingView.vue'
import { useLoading } from '/@/composables/useLoading'

const { isRouteLoading } = useLoading()

// TODO: replace `min-h-[calc(100dvh-137px)]` with a more robust solution.
</script>

<style scoped>
.safe {
  padding-right: calc(0.5 * env(safe-area-inset-bottom));
}
</style>
