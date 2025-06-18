<script setup lang="ts">
import type { NuxtError } from '#app'

const { t } = useI18n()

defineProps({
  error: {
    type: Object as () => NuxtError,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="grid h-dvh place-items-center">
    <div>
      <BaseHero :title="`Error: ${error?.statusCode}`" :description="error?.message" />

      <UButton to="/" variant="subtle" class="mx-auto block w-fit">
        {{ t('goBackHome') }}
      </UButton>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "goBackHome": "Volver a Inicio"
  },
  "en": {
    "goBackHome": "Go back home"
  }
}
</i18n>
