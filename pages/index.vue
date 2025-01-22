<script lang="ts" setup>
useSeoMeta({
  title: getPortofolioConfig('seo.home.title'),
})
</script>

<template>
  <div>
    <div class="absolute w-screen h-screen top-0 left-0 -z-[1] overflow-hidden">
      <Container class="relative">
        <div class="absolute w-[400px] h-[400px] right-[0] top-[43vh] transform translate-y-[-100px]">
          <SplineRoom />
        </div>
      </Container>
    </div>
    <Container class="min-h-[calc(100vh-4rem)] w-full flex flex-col justify-center z-[10] pb-[4rem]">
      <div class="mb-8 inline-flex">
        <UIcon name="ph:quotes-duotone" />
        <div class="text-gray-100 text-lg font-bold italic">{{ getPortofolioConfig('section.home.uptitle') }}</div>
      </div>
      <div class="mb-4">
        <div
          class="text-[7rem] font-black leading-[6rem] text-blue-200 title-shadow"
        >
          {{ getPortofolioConfig('section.home.title') }}
        </div>
        <div class="mt-8 text-3xl w-[750px]">
          <span class="text-orange-200 font-bold">Website Engraver For Artists. </span>
          <span class="text-gray-400 italic">experienced in web design, server side, blockchain and game dev.</span>
        </div>
      </div>
      <div class="mt-6 flex gap-3">
        <UButton
          v-for="(button, i) in getPortofolioConfig('section.home.buttons')"
          :key="i"
          v-bind="button"
        />
      </div>
    </Container>
  </div>
</template>

<style scoped>
.title-shadow {
  text-shadow: 4px 4px rgba(0, 0, 0, 0.4);
}
</style>