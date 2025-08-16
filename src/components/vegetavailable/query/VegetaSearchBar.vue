<template>
  <YSearchInput
    :filterSearch="updateSearch"
    :placeholder="$t('veg.searchPlaceholder')"
    class="w-full"
  />
</template>

<script setup lang="ts">
import { useVegetaState } from '/@/composables/useVegetaState'

const { updateSearch } = useVegetaState()
</script>

<style scoped></style>
