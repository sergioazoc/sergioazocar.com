<script lang="ts" setup>

  const props = withDefaults(defineProps<{
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }>(), {
    tag: 'h1'
  })

  const classes = computed(() => ({
    h1: 'text-4xl leading-10 font-bold text-vue-purple dark:text-vue-green',
    h2: 'text-2xl leading-9 font-semibold',
    h3: 'text-xl leading-8 font-semibold',
    h4: 'text-lg leading-7 font-semibold',
    h5: 'text-base leading-6 font-semibold',
    h6: 'text-sm leading-5 font-semibold'
  }))

</script>

<template>
  <h1 :class="classes[props.tag]" class="mb-5 text-">
    <slot />
  </h1>
</template>
