<template>
  <section class="w-5xl max-w-[88vw] mx-auto py-16 flex flex-col gap-8">
    <h1 class="text-4xl font-bold">Trips</h1>
    <ul class="grid gap-6 sm:grid-cols-2">
      <li v-for="trip in tripList" :key="trip.slug">
        <RouterLink
          :to="tripPath(trip.slug)"
          class="group block rounded-xl overflow-hidden shadow-lg bg-white/5 hover:shadow-2xl transition-shadow"
        >
          <div class="aspect-video overflow-hidden">
            <img
              :src="smallThumbnail(trip.cover)"
              :alt="trip.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div class="p-4">
            <h2 class="text-xl font-semibold">{{ trip.title }}</h2>
            <p class="text-sm opacity-70">
              {{ trip.dates[0] }} – {{ trip.dates.at(-1) }} · {{ trip.steps.length }} stops
            </p>
          </div>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import { trips, tripPath } from '/@/data/trips'
import { smallThumbnail } from '/@/functions/trip'
import type { TripData } from '/@/composables/useTripData'

const tripList = shallowRef<TripData[]>([])
Promise.all(Object.values(trips).map(({ load }) => load())).then((loaded) => {
  tripList.value = loaded.reverse()
})

useSeoMeta({
  title: 'Trips',
  description: 'Photos and stories from my trips.',
  ogTitle: "Yoni's trips",
  ogDescription: 'Photos and stories from my trips.'
})
</script>
