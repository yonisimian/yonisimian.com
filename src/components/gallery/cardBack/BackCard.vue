<template>
  <Transition name="slide" appear>
    <div
      class="relative flex flex-col justify-start items-center rounded-xl min-h-lg w-[88vw] sm:w-[60vw] bg-sky-50/50 dark:bg-sky-100/10 shadow-md mb-10 sm:mb-0 backdrop-filter backdrop-blur-[12px]"
    >
      <slot />
    </div>
  </Transition>
  <Transition name="slide" appear>
    <div
      class="relative flex flex-col justify-start items-center rounded-xl min-h-lg w-[88vw] sm:w-[60vw] bg-sky-50/50 dark:bg-sky-100/10 shadow-md mb-10 sm:mb-0 backdrop-filter backdrop-blur-[12px]"
    >
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts"></script>

<style>
@keyframes slide-in {
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

@keyframes slide-out {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.2);
  }
  85% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(0);
  }
}

.slide-enter-active {
  animation: slide-in 0.5s forwards;
}

.slide-leave-active {
  animation: slide-out 0.5s forwards;
}
</style>
