<script lang="ts" setup>
  const title = ref('Sergio Azócar | @sergioazoc')

  useHead({
    title: title.value
  })
</script>

<template>
  <main>
    <NuxtLoadingIndicator />
    <div class="min-vh-100 bg-light">
      <TheNavbar />
      <div class="main-container container d-flex flex-column justify-content-between">
        <slot />
        <TheFooter />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main-container {
  min-height: calc(100vh - 108px);
}
</style>
