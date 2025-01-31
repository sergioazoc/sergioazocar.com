<script lang="ts" setup>

  const props = withDefaults(defineProps<{
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }>(), {
    tag: 'h1'
  })

  const classes = {
    h1: 'text-5xl leading-10 text-vue-green',
    h2: 'text-4xl leading-9',
    h3: 'text-3xl leading-8',
    h4: 'text-2xl leading-7',
    h5: 'text-xl leading-6',
    h6: 'text-lg leading-5'
  }

</script>

<template>
  <component
    :is="props.tag"
    :class="classes[props.tag]"
    class="font-sans font-bold mb-5"
  >
    <slot />
  </component>
</template>
