<script lang="ts" setup>
useSeoMeta(parseSeo('about'))
</script>

<template>
  <Container class="min-h-[calc(100vh-4rem)] w-full flex flex-col justify-center z-[10] pb-[4rem]">
    <div class="flex">
      <div class="flex-1 pr-32">
        <h1 class="text-4xl font-bold">About Me</h1>
        <div class="mt-6 text-gray-400 flex flex-col gap-2">
          <p class="text-gray-400">
            Hello, my name is <span class="text-primary-400">Alfian Dwi Nugraha</span>! I have a passion in
            the internet world since I was 10 years old.
          </p>
          <p>
            I'm currently working as a freelance web developer, honing my skills in programming
            while expanding my knowledge in <span class="text-primary-400">Golang, Python, and Web3 on the Solana blockchain</span>.
            I hold a Bachelor's degree in <span class="text-primary-400">Computer Science</span> from <span class="text-primary-400">Surabaya State University</span>, 
            which has provided me with a solid foundation to excel in the tech industry.
          </p>
          <div class="flex gap-4 mt-8">
            <UButton
              v-for="(button, i) in getPortfolioConfig('section.about.buttons')"
              :key="i"
              v-bind="button"
            />
          </div>
        </div>
      </div>
      <div class="">
        <NuxtImg src="/assets/images/mypic.jpg" alt="My Avatar" class="block w-auto rounded mypic h-[400px]" />
      </div>
    </div>
  </Container>
</template>