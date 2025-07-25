<script lang="ts" setup></script>

<template>
  <div class="grid h-dvh grid-rows-[auto_1fr_auto]">
    <NuxtLoadingIndicator />

    <TheHeader />

    <main class="mx-auto mb-16 mt-20 w-full max-w-7xl px-4 py-4">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>
