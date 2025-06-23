<template>
  <div class="row-span-1 text-right px-4">
    <p class="font-general-semibold text-xl dark:text-ternary-light font-semibold">הערות</p>
    <p class="text-sm">
      {{ notes }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  notes: string
}>()
</script>

<style scoped></style>
