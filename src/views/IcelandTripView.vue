<template>
  <div class="w-full h-full">
    <TripMasonry v-if="isTripLoaded && isMasonryView" />
    <TripPage v-else-if="isTripLoaded" />
    <TripSkeleton v-else />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSeoMeta } from '@unhead/vue'
import { loadTrip } from '/@/composables/useTripData'
import { useIcelandTripData } from '/@/composables/useIcelandTripData'

const route = useRoute()
const tripData = useIcelandTripData()
const { isTripLoaded, steps } = tripData
const isMasonryView = computed(() => route.query.view === 'masonry')

loadTrip(tripData, route.params.id as string)

useSeoMeta({
  title: 'Iceland 2026',
  description: 'A showcase of my trip to Iceland, September 2026.',
  ogDescription:
    "Allow me to share my journey through Iceland's landscapes and the stories along the way.",
  ogTitle: "Yoni's trip to Iceland, 2026",
  ogImage: () => {
    const firstMedia = steps[0].media[0]
    return typeof firstMedia === 'string' ? firstMedia : firstMedia.thumbnail
  }
})
</script>
