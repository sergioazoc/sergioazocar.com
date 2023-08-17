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
  <section class="flex justify-center items-center h-full">
    <div class="text-container mx-auto">
      <h1 class="text-center text-4xl font-semibold">
        Hola! <span class="animate-hello origin-[70%_70%] inline-block">👋</span> Soy
        Sergio Azócar, un <span class="tagline">Frontend Developer</span>
        en el multiverso...
      </h1>
    </div>
  </section>
</template>

<style scoped>

.tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-container {
  max-width: 600px;
}
</style>
