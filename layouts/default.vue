<script lang="ts" setup>
  const title = ref('Sergio Azócar | @sergioazoc')

  useHead({
    title: title.value
  })
</script>

<template>
  <NuxtLoadingIndicator />
  <main class="bg-slate-50 dark:text-slate-100 text-slate-900 dark:bg-slate-900">
    <div class="max-w-[1200px] mx-auto py-4 px-4 sm:px-8 md:px-12 lg:px-16">
      <TheNavbar />
      <div class="h-content flex py-5">
        <slot />
      </div>
      <TheFooter />
    </div>
  </main>
</template>

<style>
  .h-content {
    height: 100%;
    min-height: calc(100vh - 9rem);
  }
</style>
