<template>
  <div
    @click="discard"
    class="fixed top-0 left-0 z-10 w-screen h-[100dvh] overflow-hidden select-none flex justify-center items-center"
  >
    <YDarkBackground />
    <Transition name="backCard" appear>
      <div
        @click.stop
        class="overflow-hidden z-20 rounded-xl h-[80dvh] sm:h-[69vh] w-[89vw] sm:w-[60vw] bg-sky-50/70 dark:bg-sky-100/10 shadow-md backdrop-filter backdrop-blur-[12px]"
      >
        <div
          class="portfolio-card w-full h-full overflow-auto relative flex flex-col justify-start items-center"
        >
          <div
            class="px-2 sm:px-4 lg:px-8 h-full text-lg flex flex-col flex-grow justify-start items-center"
          >
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  discard: () => void
}>()
</script>

<style scoped>
@supports not selector(::-webkit-scrollbar) {
  /* Firefox */
  .portfolio-card {
    scrollbar-width: thin;
    scrollbar-color: rgba(148, 163, 184, 0.5) transparent;
  }
  .dark .portfolio-card {
    scrollbar-color: rgba(0, 255, 255, 0.2) transparent;
  }
}

/* Webkit browsers (Chrome, Safari, Edge) */
.portfolio-card::-webkit-scrollbar {
  width: 6px;
  border-radius: 9999px;
  /* scrollbar-color: rebeccapurple green; */
}

.portfolio-card::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.5);
  border-radius: 9999px;
  transition: background-color 0.2s ease;
}

.portfolio-card::-webkit-scrollbar-thumb:hover {
  background: rgba(148, 163, 184, 0.8);
}

.dark .portfolio-card::-webkit-scrollbar-thumb {
  background: rgba(71, 85, 105, 0.8);
}

.dark .portfolio-card::-webkit-scrollbar-thumb:hover {
  background: rgba(71, 85, 105, 1);
}

/* Animations */
@keyframes backCard-in {
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.2);
  }
  85% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes backCard-out {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0);
  }
}

.backCard-enter-active {
  animation: backCard-in 0.5s forwards;
}

.backCard-leave-active {
  animation: backCard-out 0.5s forwards;
}
</style>
