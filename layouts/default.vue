<script lang="ts" setup>
  const title = ref('Sergio Azócar | @sergioazoc')

  useHead({
    title: title.value
  })
</script>

<template>
  <NuxtLoadingIndicator />
  <main class="grid gap-4 text-slate-300 bg-slate-950">
    <TheNavbar />
    <div class="max-w-[1248px] mx-auto h-full min-h-[calc(100vh-9.5rem)] py-5">
      <slot />
    </div>
    <TheFooter />
  </main>
</template>
