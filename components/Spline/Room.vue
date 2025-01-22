<script lang="ts" setup>
import { Application } from '@splinetool/runtime';


const canvas = useTemplateRef('canvas');
const app = ref<Application | null>(null);
const isLoading = ref(true);

// funcs
const mount = async () => {
  isLoading.value = true;
  if (!canvas.value) return;
  const app = new Application(canvas.value);
  // await app.load('https://prod.spline.design/F6wOrERSghbRffLp/scene.splinecode');
  await app.load('/assets/spline/room.splinecode');
  isLoading.value = false;
}

onMounted(mount)
onBeforeUnmount(() => {
  if (app.value) {
    app.value.dispose();
    app.value = null;
  }
})
</script>

<template>
  <div v-if="isLoading" class="absolute top-1/2 left-1/2 text-4xl flex items-center justify-center">
    <div class="bg-white/30 flex-1 p-4 animate-pulse rounded flex items-center justify-center">
      <Icon name="ph:circle-notch-duotone" class="animate-spin text-white" />
    </div>
  </div>
  <canvas ref="canvas" class="flex-1" />
</template>