<template>
  <Transition name="backCard" appear>
    <div
      class="relative flex flex-col justify-start items-center rounded-xl overflow-y-auto h-[80dvh] sm:h-[69vh] w-[89vw] sm:w-[60vw] bg-sky-50/70 dark:bg-sky-100/10 shadow-md backdrop-filter backdrop-blur-[12px]"
    >
      <div
        class="px-2 sm:px-4 lg:px-8 h-full w-full text-lg flex flex-col flex-grow gap-4 justify-start items-start"
      >
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts"></script>

<style>
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
