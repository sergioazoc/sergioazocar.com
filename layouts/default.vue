<script setup>
const title = ref('Sergio Azócar | @sergioazoc')

useHead({
  title
})
</script>

<template>
  <div class="min-h-screen flex justify-center bg-slate-900 py-4 px-8">
    <div class="max-w-7xl w-full">
      <TheHeader />
      <div class="main my-10 flex">
        <slot />
      </div>
      <TheFooter />
    </div>
  </div>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 14rem);
}
</style>