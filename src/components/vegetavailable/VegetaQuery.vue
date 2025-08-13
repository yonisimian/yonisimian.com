<template>
  <div class="w-full flex flex-col justify-center items-center">
    <VegetaQueryDivider>{{ $t('veg.chooseMonths') }}</VegetaQueryDivider>
    <MonthsChooser />
    <VegetaQueryDivider>{{ $t('veg.chooseTypes') }}</VegetaQueryDivider>
    <BadgesChooser />
    <VegetaQueryDivider>{{ $t('veg.searchProducts') }}</VegetaQueryDivider>
    <VegetaSearchBar />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
