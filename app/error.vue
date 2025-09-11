<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as () => NuxtError,
    default: () => ({}),
  },
})
</script>

<template>
  <UError
    :error="{
      statusCode: error.statusCode,
      statusMessage: error.statusMessage,
      message: error.message,
    }"
  />
</template>
