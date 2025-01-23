<script lang="ts" setup>
useSeoMeta({
  title: getPortofolioConfig('seo.projects.title'),
})

const skills: PortofolioConfigSkills[] = getPortofolioConfig('skills')
const skillsSearch = ref('')
</script>

<template>
  <Container class="min-h-[calc(100vh-4rem)]">
    <div class="mt-12 w-[600px]">
      <h1 class="text-6xl font-bold">Experiences</h1>
      <p class="mt-3">
        This is a list of my experiences and skills that I have gained over the years. Some of them are from my work, some are from my personal projects, and some are from my learning journey.
      </p>
    </div>

    <div class="mt-6 h-0.5 bg-neutral-500/30" />

    <div class="mt-8">
      <div>
        <div class="inline-flex items-center gap-2 border-b border-gray-500/30 pb-2">
          <UIcon name="ph:circle-duotone" class="text-2xl" />
          <h1 class="text-3xl font-semibold">
            Skills
          </h1>
        </div>
      </div>
      <div
        class="flex flex-col gap-8 mt-6"
      >
        <div v-for="(item, i) in skills" :key="i">
          <div class="pb-4">
            <div class="text-xl flex items-center gap-1 font-semibold border-b border-gray-500/30 pb-2">
              <UIcon name="ph:hash-straight-duotone" />
              <h2>Shortcuts</h2>
            </div>
          </div>
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2"
          >
            <div
              v-for="(tech, j) in item.items.filter((tech) => tech[0].toLowerCase().includes(skillsSearch.toLowerCase()))"
              :key="j"
              class="transition-all duration-300 flex flex-col items-center justify-center border p-4 rounded bg-gray-900/30 border-gray-500/50 hover:border-primary-500/50 hover:bg-primary-500/50"
            >
              <div class="font-semibold text-sm text-slate-400 mb-3 text-center">
                {{ tech[0] }}
              </div>
              <div class="w-12 h-12 mb-3">
                <NuxtImg
                  :src="tech[2]"
                  :alt="tech[0]"
                  :style="{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }"
                />
              </div>
              <div class="text-[10px] text-slate-400 mb-2 text-center">
                learn on {{ tech[1] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>