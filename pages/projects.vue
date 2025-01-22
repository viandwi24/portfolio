<script lang="ts" setup>
useSeoMeta({
  title: getPortofolioConfig('seo.projects.title'),
})

const projects: PortofolioConfigProject[] = getPortofolioConfig('projects')
</script>

<template>
  <Container class="min-h-[calc(100vh-4rem)]">
    <div class="mt-12 w-[600px]">
      <h1 class="text-6xl font-bold">Projects</h1>
      <p class="mt-3">
        This is a list of projects that I have worked on. Some of them are personal projects, some are client projects, and some are open-source projects.
      </p>
      <div class="mt-4 relative w-[300px]">
        <UInput
          class="w-full"
          placeholder="Search something..."
        />
        <UIcon
          name="ph:magnifying-glass-duotone"
          class="absolute right-2 top-2 text-gray-400"
        />
      </div>
    </div>
    <div class="mt-8 grid grid-cols-3 gap-4">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="bg-neutral-500/10 rounded-xl overflow-hidden border border-neutral-500/50 flex flex-col"
      >
        <div class="w-full h-[200px] flex">
          <img
            :src="project.image"
            alt="Project Image"
            class="flex-1 w-full h-full object-cover"
            :style="{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }"
          />
        </div>
        <div class="px-4 py-2 flex flex-col flex-1">
          <div class="font-bold text-xl">{{ project.name }}</div>
          <div class="mt-1 flex gap-1.5">
            <span
              v-for="(tag, i) in project.tags"
              :key="i"
              class="inline-block px-2 py-1 rounded-full text-sm bg-gray-500/30"
            >
              {{ tag }}
            </span>
          </div>
          <p class="flex-1 line-clamp-2 mt-2 px-1 text-neutral-400">
            {{ project.description }}
          </p>
          <div class="mt-2">
            <UTooltip v-if="project?.links?.repository" text="Repository">
              <UButton
                variant="ghost"
                icon="ph:code-duotone"
                color="warning"
                :href="project.links.repository"
              />
            </UTooltip>
            <UTooltip v-if="project?.links?.preview" text="Preview">
              <UButton
                variant="ghost"
                icon="ph:arrow-square-out-duotone"
                :href="project.links.preview"
              />
            </UTooltip>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>