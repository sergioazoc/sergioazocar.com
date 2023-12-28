<script lang="ts" setup>
  const description = ref('Vue Frontend Developer')

  useHead({
    meta: [{
      name: 'description',
      content: description.value
    }]
  })
</script>

<template>
  <section class="max-w-[600px] self-center mx-auto">
    <h1 class="text-center text-4xl font-semibold text-pretty">
      Hola! <span class="animate-hello origin-[70%_70%] inline-block">👋</span> Soy
      Sergio Azócar, un <span class="bg-clip-text text-transparent bg-gradient-to-r from-vue-green to-vue-purple font-mono">Frontend Developer</span>
      en el multiverso...
    </h1>
  </section>
</template>
