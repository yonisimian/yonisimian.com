<template>
  <TripViewer />
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'
import { provideTripData } from '/@/composables/useTripData'
import { icelandTrip } from '/@/data/iceland-trip'

provideTripData(icelandTrip)

useSeoMeta({
  title: icelandTrip.title,
  description: 'A showcase of my trip to Iceland, September 2026.',
  ogDescription:
    "Allow me to share my journey through Iceland's landscapes and the stories along the way.",
  ogTitle: "Yoni's trip to Iceland, 2026",
  ogImage: icelandTrip.steps[0].bgImage
})
</script>
