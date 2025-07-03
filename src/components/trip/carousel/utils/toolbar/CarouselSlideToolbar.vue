<template>
  <span class="inline-flex rounded-lg overflow-hidden">
    <ToolbarFullscreen />
    <ToolbarRotateLeft :rotateLeft />
    <ToolbarRotateRight :rotateRight />
    <ToolbarShare :shareText="`Check out my visit to ${activeCollection.name}`!" />
  </span>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'

defineProps<{
  rotateLeft: () => void
  rotateRight: () => void
}>()

const { activeCollection } = useTripState()
</script>
