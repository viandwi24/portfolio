<script lang="ts" setup>
const route = useRoute()

const navMenus: [string, string][] = [
  ['Home', '/'],
  ['About', '/about'],
  ['Projects', '/projects'],
  ['Experiences', '/experiences'],
  ['Blog', '/blog'],
]
const checkRouteActive = (item: [string, string]) => {
  return route.path === item[1]
}
</script>

<template>
  <div>
    <header class="sticky top-0 left-0 h-16 w-full bg-neutral-900/70 border-b border-neutral-500/30 animate-header-fade-in z-50 shadow-lg backdrop-blur-lg">
      <Container class="flex items-center justify-between h-full relative">
        <div class="flex items-center w-[500px]">
          <NuxtLink to="/" class="text-3xl font-bold text-white">
            <span>{{ getPortfolioConfig('layout.navbar.brand.main') }}</span>
            <span class="iandwi animate-fade-out">{{ getPortfolioConfig('layout.navbar.brand.secondary') }}</span>
            <span class="text-primary-500">{{ getPortfolioConfig('layout.navbar.brand.tertiary') }}</span>
            <span class="ml-1 inline-block w-1.5 h-1.5 bg-gray-400" />
          </NuxtLink>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <div class="flex gap-2 text-sm">
            <UButton
              v-for="(item, i) in navMenus"
              :key="i"
              class="font-semibold font-mono"
              :variant="checkRouteActive(item) ? 'soft' : 'ghost'"
              :to="item[1]"
              size="md"
            >
              <span class="text-primary-500">0{{ i + 1 }}.// </span>
              <span class="text-gray-200">{{ item[0] }}</span>
            </UButton>
          </div>
        </div>
        <div class="w-[500px]">
          <div class="flex justify-end">
            <UButton
              label="Say Hello"
              variant="subtle"
              to="/contact"
              icon="ph:mailbox-duotone"
            />
          </div>
        </div>
      </Container>
    </header>
    <main class="flex flex-col w-full animate-main-fade-in">
      <slot />
    </main>
    <div class="fixed z-50 bottom-0 left-0 w-0 h-1 bg-primary-500/30 animate-bottom-border-transition-from-left-to-right">
      <div class="fixed z-50 bottom-0 left-0 w-0 h-1 bg-primary-500/50 animate-bottom-border-transition-from-left-to-right-2">
        <div class="fixed z-50 bottom-0 left-0 w-0 h-1 bg-primary-500/50 animate-bottom-border-transition-from-left-to-right-3">
          <div class="fixed z-50 bottom-0 left-0 w-0 h-1 bg-primary-500/50 animate-bottom-border-transition-from-left-to-right-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

@keyframes HeaderFadeInFromTopToBottom {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes bottomBorderTransitionLeftToRight {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.animate-fade-out {
  animation: shrinkFadeOut 1s ease-out 1.6s forwards;
}

.animate-header-fade-in {
  transform: translateY(-100%);
  animation: HeaderFadeInFromTopToBottom 0.5s ease-out 0.1s forwards;
}

.animate-main-fade-in {
  opacity: 0;
  animation: mainFadeIn 0.5s ease-out 0.8s forwards;
}

.animate-bottom-border-transition-from-left-to-right {
  animation: bottomBorderTransitionLeftToRight 0.5s ease-out 1.3s forwards;
}

.animate-bottom-border-transition-from-left-to-right-2 {
  animation: bottomBorderTransitionLeftToRight 0.5s ease-out 1.5s forwards;
}

.animate-bottom-border-transition-from-left-to-right-3 {
  animation: bottomBorderTransitionLeftToRight 0.5s ease-out 1.7s forwards;
}

.animate-bottom-border-transition-from-left-to-right-4 {
  animation: bottomBorderTransitionLeftToRight 0.5s ease-out 2s forwards;
}
</style>
