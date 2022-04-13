<template>
  <div class="min-h-screen bg-slate-900 p-4">
    <TheHeader />
    <div class="main my-3">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 10rem);
}
</style>