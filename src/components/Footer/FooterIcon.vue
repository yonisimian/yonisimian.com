<template>
  <li class="cursor-pointer text-2xl">
    <a
      :href="href"
      rel="noreferrer"
      target="_blank"
      class="footer-link text-cyan-700 hover:text-cyan-500 transition-all duration-200 ease"
      :title="title"
    >
      <i :class="i" />
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  title: string
  i: string
}>()
</script>

<style scoped></style>
