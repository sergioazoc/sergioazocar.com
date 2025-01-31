<script lang="ts" setup>
  const title = ref('Sergio Azócar | @sergioazoc')

  useHead({
    title: title.value
  })
</script>

<template>
  <NuxtLoadingIndicator />
  <main class="text-slate-300 bg-slate-950">
    <div class="max-w-[1248px] mx-auto py-4 px-6">
      <TheNavbar />
      <div class="h-full min-h-[calc(100vh-9.5rem)] py-5">
        <slot />
      </div>
      <TheFooter />
    </div>
  </main>
</template>
