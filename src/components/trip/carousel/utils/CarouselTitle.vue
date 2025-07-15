<template>
  <h2>
    {{ activeCollection.name }}
  </h2>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'

const { activeCollection } = useTripState()
</script>

<style scoped>
h2 {
  text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #e60073, 0 0 4px #e6007390, 0 0 5px #e6007390,
    0 0 6px #e6007390, 1px 1px 0 #000000;
}
</style>
