<script lang="ts" setup>
  const title = ref('Sergio Azócar | @sergioazoc')

  useHead({
    title: title.value
  })
</script>

<template>
  <main>
    <NuxtLoadingIndicator />
    <div class="min-vh-100 bg-dark">
      <TheHeader />
      <div class="main-container container bg rounded-bottom rounded-5 pt-5 px-5">
        <slot />
        <TheFooter />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.main-container {
  min-height: calc(100vh - 132px);
}
.bg {
  background-color: #1c1132;
}
</style>
