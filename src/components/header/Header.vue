<template>
  <DarkTheme class="absolute top-3 left-4" />
  <header class="relative flex flex-col justify-center items-center text-center h-screen">
    <ProfileImage />
    <Title />
    <ScrollDown :text="'scroll down'" :selector="'article'" />
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
