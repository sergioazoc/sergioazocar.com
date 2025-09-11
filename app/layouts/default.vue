<script lang="ts" setup></script>

<template>
  <div class="grid h-dvh grid-rows-[auto_1fr_auto]">
    <NuxtLoadingIndicator />

    <TheHeader />

    <UContainer as="main" class="py-12">
      <slot />
    </UContainer>

    <TheFooter />
  </div>
</template>
