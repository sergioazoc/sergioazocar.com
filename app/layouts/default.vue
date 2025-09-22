<template>
  <div class="grid min-h-dvh grid-rows-[auto_1fr_auto]">
    <NuxtLoadingIndicator />

    <TheHeader />

    <UContainer as="main" class="py-12">
      <slot />
    </UContainer>

    <TheFooter />
  </div>
</template>
