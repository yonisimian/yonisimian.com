<template>
  <TripViewer />
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'
import { provideTripData, type TripData } from '/@/composables/useTripData'

const { data } = defineProps<{ data: TripData }>()

provideTripData(data)

useSeoMeta({
  title: data.title,
  description: data.seo.description,
  ogDescription: data.seo.ogDescription,
  ogTitle: data.seo.ogTitle,
  ogImage: data.cover
})
</script>
