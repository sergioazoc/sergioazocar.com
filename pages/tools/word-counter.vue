<script setup lang="ts">
  import { ref, watch } from 'vue'
  const text = ref('')
  const count = ref(0)
  watch(text, () => {
    const arrayText = text.value.split(' ')
    count.value = arrayText.filter(word => word !== '').length
  })
</script>

<template>
  <div class="flex flex-col gap-3">
    <h1 class="text-lime-300 text-2xl">
      Word Counter
    </h1>

    <textarea v-model="text" type="text" class="w-full p-2 border border-lime-300" placeholder="type..." rows="3" />

    <p class="text-lime-300">
      N°: {{ count }}
    </p>
  </div>
</template>
