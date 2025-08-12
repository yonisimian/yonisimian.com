<template>
  <div>
    <slot name="header" />

    <div
      v-if="products.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
    >
      <VegetaGalleryCard v-for="(product, index) in products" :key="product.name" :product :index />
    </div>
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
