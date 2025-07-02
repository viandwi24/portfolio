<script lang="ts" setup>
definePageMeta({
  layout: 'blank'
})
</script>

<template>
  <div>
    <section class="min-h-screen flex">
      <div class="flex-1 flex flex-col justify-end p-10 bg-primary-500 relative">
        <div class="absolute top-0 left-0 -ml-10">
          <div class="text-9xl font-black">HELLO</div>
        </div>
        <div class="ml-2 text-4xl font-bold">
          <span>{{ getPortfolioConfig('layout.navbar.brand.main') }}</span>
          <span class="text-gray-100">{{ getPortfolioConfig('layout.navbar.brand.secondary') }}</span>
          <span class="text-gray-100">{{ getPortfolioConfig('layout.navbar.brand.tertiary') }}</span>
          <span class="ml-1 inline-block w-1.5 h-1.5 bg-gray-300" />
        </div>
        <div class="text-white font-black text-6xl">
          Alfian Dwi Nugraha
        </div>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <div class="h-[500px] w-[500px] rounded-lg overflow-hidden">
          <NuxtImg
            src="assets/images/mypic.jpg"
            alt="Alfian Dwi Nugraha"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  </div>
</template>