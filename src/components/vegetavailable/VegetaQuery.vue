<template>
  <div class="w-full flex flex-col justify-center items-center">
    <VegetaQueryDivider>choose month(s)</VegetaQueryDivider>
    <MonthsChooser />
    <VegetaQueryDivider>choose type(s)</VegetaQueryDivider>
    <BadgesChooser />
    <VegetaQueryDivider>search products' names</VegetaQueryDivider>
    <VegetaSearchBar />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
