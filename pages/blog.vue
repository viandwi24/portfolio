<script lang="ts" setup>
useSeoMeta(parseSeo('blog'))

const { data: blog } = await useFetch('/api/blog')
</script>

<template>
  <Container class="min-h-[calc(100vh-4rem)]">
    <div class="flex-1 mt-12 w-[600px]">
      <h1 class="text-6xl font-bold">Blog</h1>
      <!-- description about this page in eng: ini adalah halaman blog saya, saya menulis banyak artikel dibanyak platform juga -->
      <p class="mt-3">
        This is my blog page, I write many articles on many platforms as well, and this is a collection of all of them.
      </p>
    </div>

    <!-- <div class="mt-6 h-0.5 bg-neutral-500/30" /> -->

    <div class="mt-6 grid grid-cols-1 gap-4">
      <NuxtLink
        v-for="(item, i) in blog?.items || []"
        :key="i"
        class="border border-neutral-500/30 p-4 rounded-lg flex gap-4 hover:bg-neutral-500/10 hover:backdrop-blur-sm"
        :href="item.url"
        target="_blank"
      >
        <div class="w-36 h-24 bg-neutral-500/30 rounded-lg overflow-hidden">
          <NuxtImg
            :src="item.image"
            :alt="item.title"
            class="rounded-lg w-full h-full"
            :style="{
              objectFit: 'cover',
            }"
          />
        </div>
        <div class="flex-1 flex flex-col justify-center">
          <h2 class="text-lg font-bold line-clamp-1">{{ item.title }}</h2>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-sm px-2 py-1 rounded-full bg-primary-500/20">{{ item.source.split(':')[0] }}</span>
              <div class="flex items-center gap-1">
                <!-- <UIcon name="ph:calendar" /> -->
                <span class="text-sm text-gray-400">{{ $dayjs(item.date).format(`DD/MM/YYYY`) }}</span>
              </div>
              <span class="inline-block w-1 h-1 bg-gray-400/60" />
              <span class="text-sm text-gray-400">{{ item.author }}</span>
            </div>
            <p class="mt-1 text-sm text-gray-300 line-clamp-2">
              {{ item.content.slice(0, 400) }}...
            </p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </Container>
</template>