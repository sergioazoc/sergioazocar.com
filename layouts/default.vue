<script lang="ts" setup>
  const title = ref('Sergio Azócar | @sergioazoc')

  useHead({
    title: title.value
  })
</script>

<template>
  <NuxtLoadingIndicator />
  <main class="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
    <div class="h-content">
      <TheNavbar />
      <slot />
    </div>
    <TheFooter />
  </main>
</template>

<style>
  .h-content {
    height: 100%;
    min-height: calc(100vh - 5rem);
  }
</style>
