<script lang="ts" setup>
  const title = ref('Sergio Azócar | @sergioazoc')

  useHead({
    title: title.value
  })
</script>

<template>
  <NuxtLoadingIndicator />
  <main class="bg-slate-100 dark:text-slate-100 text-slate-900 dark:bg-slate-900">
    <div class="max-w-[1248px] mx-auto py-4 px-6">
      <TheNavbar />
      <div class="h-full min-h-[calc(100vh-9.5rem)] py-5">
        <slot />
      </div>
      <TheFooter />
    </div>
  </main>
</template>
