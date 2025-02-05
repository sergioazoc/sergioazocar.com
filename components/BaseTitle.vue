<script lang="ts" setup>
  const props = withDefaults(defineProps<{
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }>(), {
    tag: 'h1'
  })

  const tagClasses = {
    h1: 'text-6xl leading-10 text-vue-green',
    h2: 'text-5xl leading-9',
    h3: 'text-4xl leading-8',
    h4: 'text-3xl leading-7',
    h5: 'text-2xl leading-6',
    h6: 'text-xl leading-5'
  }

</script>

<template>
  <component
    :is="props.tag"
    :class="tagClasses[props.tag]"
    class="font-sans font-bold mb-5"
  >
    <slot />
  </component>
</template>
