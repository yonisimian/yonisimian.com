<template>
  <div>
    <Background />

    <DarkTheme class="absolute top-3 left-4" />

    <RouterView />

    <Footer />

    <ScrollToEdge direction="up" class="fixed top-2 right-1 sm:right-2" />
    <ScrollToEdge direction="down" class="fixed bottom-2 right-1 sm:right-2 safe" />
  </div>
</template>

<style scoped>
.safe {
  padding-right: calc(0.5 * env(safe-area-inset-bottom));
}
</style>
