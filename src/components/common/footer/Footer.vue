<template>
  <footer class="mb-8 text-center">
    <FooterIcons />

    <span class="text-xs"
      >Made by
      <a
        class="opacity-80 text-cyan-500 hover:text-cyan-400"
        href="https://github.com/yonisimian"
        rel="noreferrer"
        target="_blank"
      >
        Yehonatan Simian
      </a>
    </span>

    <nav class="flex flex-col">
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink :to="'/' + PortfolioRoute">My Portfolio</RouterLink>
      <RouterLink :to="'/' + TripRoute">The Big Trip</RouterLink>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import { TripRoute, PortfolioRoute } from '/@/data/globals'
</script>

<style scoped></style>
