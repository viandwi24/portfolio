<script lang="ts" setup>
useSeoMeta(parseSeo('contact'))
</script>

<template>
  <Container class="min-h-[calc(100vh-4rem)] flex flex-col pb-[4rem]">
    <div class="flex-1 flex flex-col justify-center items-center w-full sm:max-w-screen-sm lg:max-w-screen-lg mx-auto px-4 mb-4 py-10">
      <div class="text-6xl mb-4 font-bold">
        <div class="">Get In Touch</div>
      </div>
      <div class="max-w-screen-sm text-center text-blue-100/50 mb-8">
        Even though I'm not currently looking for new opportunities, my inbox is always open.
        Whether you have any questions or just want to say hello, I'll try my best to get back to you!
      </div>
      <div class="flex flex-col lg:flex-row gap-4 w-full lg:w-auto justify-center">
        <UButton
          v-for="(button, i) in getPortfolioConfig('section.contact.links')"
          :key="i"
          size="xl"
          target="_blank"
          v-bind="button"
        />
        <!-- <a href="https://linktr.ee/viandwi24" target="_blank" class="duration-300 transition-all flex justify-center items-center rounded px-4 py-2 border border-green-500 text-green-500 space-x-2 hover:bg-green-500 hover:text-gray-100">
          <Icon name="mdi:pine-tree-variant-outline" />
          <span>Linktr.ee</span>
        </a>
        <a target="_blank" href="mailto:viandwi24@pm.me" class="duration-300 transition-all flex justify-center items-center rounded px-4 py-2 border border-orange-500 text-orange-500 space-x-2 hover:bg-orange-500 hover:text-gray-100">
          <Icon name="bi:envelope" />
          <span>Email</span>
        </a>
        <a target="_blank" href="https://facebook.com/viandwi24" class="duration-300 transition-all flex justify-center items-center rounded px-4 py-2 border border-blue-300 text-blue-300 space-x-2 hover:bg-blue-300 hover:text-gray-100">
          <Icon name="bi:facebook" />
          <span>Facebook</span>
        </a>
        <a target="_blank" href="https://instagram.com/viandwi_24" class="duration-300 transition-all flex justify-center items-center rounded px-4 py-2 border border-purple-300 text-purple-300 space-x-2 hover:bg-purple-300 hover:text-gray-100">
          <Icon name="bi:instagram" />
          <span>Instagram</span>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/viandwi24/" class="duration-300 transition-all flex justify-center items-center rounded px-4 py-2 border border-blue-500 text-blue-500 space-x-2 hover:bg-blue-500 hover:text-gray-100">
          <Icon name="bi:linkedin" />
          <span>LinkedIn</span>
        </a> -->
      </div>
    </div>
  </Container>
</template>