<template>
  <header class="relative flex flex-col justify-center items-center text-center h-[100svh]">
    <ProfileImage />
    <Title />
    <ScrollDown :text="'scroll down'" :selector="'article'" :absolute="true" />
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
