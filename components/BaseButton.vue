<script setup lang="ts">
  const props = withDefaults(defineProps<{
    variant?: 'primary' | 'secondary'
  }>(), {
    variant: 'primary'
  })

  const classes = {
    primary: 'border-vue-purple dark:border-vue-green bg-vue-purple dark:bg-vue-green text-slate-100 dark:text-slate-900',
    secondary: 'border-slate-600 dark:border-slate-400 text-slate-900 dark:text-slate-100'
  }
</script>

<template>
  <button
    :class="classes[props.variant]"
    class="border text-lg font-semibold py-2 px-4 rounded-md"
  >
    <slot />
  </button>
</template>
