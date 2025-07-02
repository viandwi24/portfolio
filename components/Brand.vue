<template>
  <span>{{ getPortfolioConfig('layout.navbar.brand.main') }}</span>
  <span class="iandwi animate-fade-out">{{ getPortfolioConfig('layout.navbar.brand.secondary') }}</span>
  <span class="text-primary-500">{{ getPortfolioConfig('layout.navbar.brand.tertiary') }}</span>
  <span class="ml-1 inline-block w-1.5 h-1.5 bg-gray-400" />
</template>

<style>
@keyframes shrinkFadeOut {
  0% {
    display: inline-block;
    letter-spacing: 0;
    opacity: 1;
  }

  100% {
    letter-spacing: -0.5em;
    opacity: 0;
    display: none;
    margin-left: -4px;
  }
}

.animate-fade-out {
  animation: shrinkFadeOut 1s ease-out 1.6s forwards;
}
</style>