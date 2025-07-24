<script setup lang="ts">
const { locale: currentLocale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="flex items-center gap-2">
    <UIcon name="lucide-languages" />
    <NuxtLink
      v-for="{ code } in locales"
      :key="code"
      class="uppercase"
      :aria-label="`${code} switch`"
      :class="[code === currentLocale ? 'text-neutral-300' : 'text-neutral-500']"
      :to="switchLocalePath(code)"
    >
      {{ code }}
    </NuxtLink>
  </div>
</template>
