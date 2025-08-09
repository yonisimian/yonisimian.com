<template>
  <div class="w-full grid grid-cols-3 sm:grid-cols-5 gap-1">
    <VegetaBadge
      v-for="type in ProductType"
      :key="type"
      :badge="type"
      :activeBadges="activeTypes"
      :toggleBadge="toggleType"
    >
      {{ type }}
    </VegetaBadge>
  </div>
</template>

<script setup lang="ts">
import { ProductType } from '/@/types/vegetavailable'
import { useVegetaState } from '/@/composables/useVegetaState'

const { activeTypes, toggleType } = useVegetaState()
</script>

<style scoped></style>
