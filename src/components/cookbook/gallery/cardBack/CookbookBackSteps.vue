<template>
  <div class="row-span-1 text-right px-4">
    <p class="font-general-semibold text-xl dark:text-ternary-light font-semibold">אופן ההכנה</p>
    <ul :class="steps.length > 1 ? 'list-decimal list-inside text-right' : 'text-right'">
      <li v-for="(step, index) in steps" :key="index" class="text-sm dark:text-ternary-light">
        {{ step }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  steps: string[]
}>()
</script>

<style scoped></style>
