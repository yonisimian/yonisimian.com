<template>
  <div>
    <slot name="header" />

    <YGallery v-if="products.length > 0" :items="products">
      <template #CardFront="{ item }">
        <VegetaGalleryCard :product="item" />
      </template>
    </YGallery>
    <div v-else class="text-center py-12">
      <slot name="empty" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '/@/types/vegetavailable'

defineProps<{
  products: Product[]
}>()
</script>

<style scoped></style>
