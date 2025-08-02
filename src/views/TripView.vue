<template>
  <div class="w-full h-full">
    <TripPage v-if="!isLoading" />
    <TripSkeleton v-else />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { loadTripData } from '/@/composables/useTripData'
import { useSeoMeta } from '@unhead/vue'

const isLoading = ref(true)

onMounted(async () => {
  try {
    await loadTripData()
  } catch (e) {
    console.error('Failed to load trip data:', e)
  } finally {
    isLoading.value = false
  }
})

useSeoMeta({
  title: 'The Big Trip',
  description: 'A showcase of my big trip around the world, winter 2024 .',
  ogDescription:
    'Allow me to share with you a journey spans continents and cultures, showcasing beauty, diversity, as well as a shallow dive into my heart and thoughts. ',
  ogTitle: "Yoni's trip around the world, winter 2024",
  ogImage: '/media/trip/01%20-%20America/04%20-%20Hawaii/step-45/2.jpg'
})
</script>
