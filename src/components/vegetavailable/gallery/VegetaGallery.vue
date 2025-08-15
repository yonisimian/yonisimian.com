<template>
  <div>
    <slot name="header" />

    <GalleryGrid v-if="products.length > 0" :items="products">
      <template #CardFront="{ item }">
        <VegetaGalleryCard :product="item" />
      </template>
    </GalleryGrid>
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
