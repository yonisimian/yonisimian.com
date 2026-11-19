<template>
  <div class="w-full h-full">
    <TripMasonry v-if="isTripLoaded && isMasonryView" />
    <TripPage v-else-if="isTripLoaded" />
    <TripSkeleton v-else />
    <!-- TODO: create mansory skeleton -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { loadTrip, useTripData } from '/@/composables/useTripData'

const route = useRoute()
const tripData = useTripData()
const { isTripLoaded } = tripData

const isMasonryView = computed(() => route.query.view === 'masonry')

loadTrip(tripData, route.params.id as string)
</script>
