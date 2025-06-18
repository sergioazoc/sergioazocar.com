<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="mb-16 text-center">
    <h1 class="mb-6 text-4xl font-bold sm:text-5xl">{{ title }}</h1>
    <p class="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
      {{ description }}
    </p>
  </div>
</template>
