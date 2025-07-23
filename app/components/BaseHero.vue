<script setup lang="ts">
defineProps<{
  title: string
  description: string
  highlight?: string
}>()
</script>

<template>
  <div class="mb-16 text-center">
    <p v-if="highlight" class="text-primary mb-4 text-lg">{{ highlight }}</p>
    <h1 class="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
      {{ title }}
    </h1>
    <p class="mx-auto max-w-3xl text-xl text-neutral-400">
      {{ description }}
    </p>
  </div>
</template>
