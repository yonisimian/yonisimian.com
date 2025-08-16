<template>
  <div
    class="spinner"
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)"
  >
    <svg width="32" height="32" viewBox="0 0 32 32">
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="#888"
        stroke-width="4"
        fill="none"
        stroke-linecap="round"
        stroke-dasharray="80"
        stroke-dashoffset="60"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 16 16"
          to="360 16 16"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
</template>
