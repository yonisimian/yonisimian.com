<template>
  <div class="text-center text-md">
    <h1 class="font-serif font-bold font-bold text-4xl mb-8">
      Hello 👋 there, welcome my portfolio!
    </h1>

    <p>Maybe write a bit about myself? Maybe add some links as well?</p>
    <p class="mb-10">
      <a href="#"> Maybe a link </a>
      |
      <a href="#">Maybe another link</a>
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
a {
  @apply text-cyan-400 hover:text-cyan-500 transition-all ease-out duration-100;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}
</style>
