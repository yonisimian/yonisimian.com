<template>
  <div class="w-full h-[2%] flex flex-row items-center justify-center my-2">
    <div class="h-px w-8 bg-gray-300"></div>
    <span class="mx-2 text-gray-400">
      <slot />
    </span>
    <div class="h-px w-8 bg-gray-300"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
