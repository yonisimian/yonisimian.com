<template>
  <div>
    <Background />

    <DarkTheme class="absolute top-3 left-4" />

    <LoadingView v-if="isRouteLoading" />
    <RouterView v-else />

    <Footer />

    <ScrollToEdge direction="up" class="fixed top-2 right-1 sm:right-2" />
    <ScrollToEdge direction="down" class="fixed bottom-2 right-1 sm:right-2 safe" />
  </div>
</template>

<script setup lang="ts">
import LoadingView from './views/LoadingView.vue'
import { useLoading } from '/@/composables/useLoading'

const { isRouteLoading } = useLoading()
</script>

<style scoped>
.safe {
  padding-right: calc(0.5 * env(safe-area-inset-bottom));
}
</style>
