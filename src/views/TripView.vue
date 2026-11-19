<template>
  <TripViewer />
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'
import { provideTripData } from '/@/composables/useTripData'
import { bigTrip } from '/@/data/trip'

provideTripData(bigTrip)

useSeoMeta({
  title: bigTrip.title,
  description: 'A showcase of my big trip around the world, winter 2024.',
  ogDescription:
    'Allow me to share with you a journey spans continents and cultures, showcasing beauty, diversity, as well as a shallow dive into my heart and thoughts. ',
  ogTitle: "Yoni's trip around the world, winter 2024",
  ogImage: '/media/trip/01%20-%20America/04%20-%20Hawaii/step-45/2.jpg'
})
</script>
