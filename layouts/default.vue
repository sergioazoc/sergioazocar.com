<script lang="ts" setup>
  const title = ref('Sergio Azócar | @sergioazoc')

  useHead({
    title: title.value
  })
</script>

<template>
  <main>
    <NuxtLoadingIndicator />
    <main class="min-vh-100 bg-dark">
      <TheHeader />
      <div class="main-container container">
        <slot />
      </div>
      <TheFooter />
    </main>
  </main>
</template>

<style lang="scss">
.main-container {
  min-height: calc(100vh - 132px);
}
</style>
