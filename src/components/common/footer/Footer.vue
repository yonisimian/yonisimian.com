<template>
  <footer class="flex flex-col text-center gap-3 mb-8">
    <hr class="w-xl max-w-[82vw] mx-auto bg-blue-gray-200 dark:bg-blue-gray-800 h-[2px] border-0" />
    <FooterIcons />

    <nav class="flex flex-row justify-center gap-2 text-xs">
      <RouterLink to="/">Home</RouterLink>
      <p>•</p>
      <RouterLink :to="'/' + PortfolioRoute">My Portfolio</RouterLink>
      <p>•</p>
      <RouterLink :to="'/' + TripRoute">The Big Trip</RouterLink>
    </nav>

    <span class="text-xs">
      Made by
      <a
        class="opacity-80 text-cyan-500 hover:text-cyan-400"
        href="https://github.com/yonisimian"
        rel="noreferrer"
        target="_blank"
      >
        Yehonatan Simian
      </a>
    </span>
  </footer>
</template>

<script setup lang="ts">
import { TripRoute, PortfolioRoute } from '/@/data/globals'
</script>

<style scoped></style>
