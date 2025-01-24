<script lang="ts" setup>
useSeoMeta({
  title: getPortfolioConfig('seo.projects.title'),
})

const projects: PortfolioConfigProject[] = getPortfolioConfig('projects')

const getAvailableSkillFromTags = (project: PortfolioConfigProject) => {
  const skills: PortfolioConfigSkills[] = getPortfolioConfig('skills')
  const tags: (string | [string, number, string])[] = []
  for (const tag of project.tags) {
    // search skill first
    for (const skill of skills) {
      for (const s of skill.items) {
        if (s[0].toLocaleLowerCase() == tag.toLocaleLowerCase()) {
          tags.push(s)
          console.log('skill', s)
        }
      }
    }
  }
  for (const tag of project.tags) {
    const alreadyInTags = tags.find((t) => {
      if (Array.isArray(t)) {
        return t[0].toLocaleLowerCase() == tag.toLocaleLowerCase()
      }
      return t.toLocaleLowerCase() == tag.toLocaleLowerCase()
    })
    if (!alreadyInTags) {
      tags.push(tag)
    }
  }
  return tags
}

const projectsSearch = ref('')
const projectsFiltered = computed(() => {
  const ps: PortfolioConfigProject[] = []
  if (!projectsSearch.value || projectsSearch.value.trim() == '') return projects
  for (const project of projects) {
    // check title if match
    if (project.name.toLocaleLowerCase().includes(projectsSearch.value.toLocaleLowerCase())) {
      ps.push(project)
    }
    // check tags if match
    for (const tag of project.tags) {
      if (tag.toLocaleLowerCase().includes(projectsSearch.value.toLocaleLowerCase())) {
        ps.push(project)
      }
    }
    // check description if match
    if (project.description.toLocaleLowerCase().includes(projectsSearch.value.toLocaleLowerCase())) {
      ps.push(project)
    }
  }
  return ps
})
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
          v-model="projectsSearch"
        />
        <UIcon
          name="ph:magnifying-glass-duotone"
          class="absolute right-2 top-2 text-gray-400"
        />
      </div>
    </div>
    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(project, i) in projectsFiltered"
        :key="i"
        class="bg-neutral-500/10 rounded-xl overflow-hidden border border-neutral-500/50 flex flex-col relative"
      >
        <!-- efek pantulan atas ke air bawah, jadi rotate lalu inverse horizontal -->
        <div class="absolute bottom-0 left-0 right-0 -z-10 transform rotate-180 scale-x-[-1]">
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
            loading="lazy"
            decoding="async"
          />
        </div>
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
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="px-4 py-2 flex flex-col flex-1 bg-gradient-to-b from-neutral-500/50 via-neutral-800 to-neutral-800 backdrop-blur-sm">
          <div class="font-bold text-xl">{{ project.name }}</div>
          <div class="mt-1">
            <span
              v-for="(tag, i) in getAvailableSkillFromTags(project)"
              :key="i"
              class="inline-block mr-2 mb-2 px-2 py-1 rounded-full text-sm bg-gray-500/30"
            >
              <span v-if="Array.isArray(tag)" class="inline-flex items-center">
                <img
                  :src="tag[2]"
                  alt="Skill Icon"
                  class="w-3 h-3 inline-block mr-2"
                />
                {{ tag[0] }}
              </span>
              <span
                v-else
                class="inline-flex h-3"
              >
                {{ tag }}
              </span>
            </span>
          </div>
          <p class="flex-1 line-clamp-2 px-1 text-neutral-400 max-h-[3rem]">
            {{ project.description }}
          </p>
          <div class="mt-2">
            <UTooltip v-if="project?.links?.repository" text="Repository">
              <UButton
                variant="ghost"
                icon="ph:code-duotone"
                color="warning"
                target="_blank"
                :href="project.links.repository"
              />
            </UTooltip>
            <UTooltip v-if="project?.links?.preview" text="Preview">
              <UButton
                variant="ghost"
                icon="ph:arrow-square-out-duotone"
                target="_blank"
                :href="project.links.preview"
              />
            </UTooltip>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>