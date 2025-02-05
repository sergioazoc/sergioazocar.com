<script setup lang="ts">
  const props = withDefaults(defineProps<{
    variant?: 'primary' | 'secondary'
  }>(), {
    variant: 'primary'
  })

  const variantClasses = {
    primary: 'border-vue-green bg-vue-green text-slate-900',
    secondary: 'border-slate-400 text-slate-100'
  }
</script>

<template>
  <button
    :class="variantClasses[props.variant]"
    class="border text-lg font-semibold py-2 px-4 rounded-md"
  >
    <slot />
  </button>
</template>
