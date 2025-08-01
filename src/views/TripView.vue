<template>
  <div class="w-full h-full">
    <TripPage v-if="!isLoading" />
    <TripSkeleton v-else />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { loadTripData } from '/@/composables/useTripData'

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
</script>
