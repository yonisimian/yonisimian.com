<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
  >
    <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover" />
    <div class="p-4">
      <h3 class="text-lg font-bold text-gray-800">{{ product.name }}</h3>
      <span
        class="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full mt-1"
        >{{ product.type }}</span
      >
    </div>
    <div class="p-4 border-t border-gray-100">
      <p class="text-xs font-bold text-gray-500 mb-2">SEASONALITY</p>
      <div class="flex flex-wrap gap-1">
        <span
          v-for="m in product.months"
          :key="m"
          class="text-xs bg-gray-200 px-1.5 py-0.5 rounded-full"
          >{{ m.substring(0, 3) }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '/@/types/vegetavailable'

defineProps<{
  product: Product
}>()
</script>

<style scoped></style>
