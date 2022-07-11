<script lang="ts" setup>
const isOpen = ref(false)
</script>

<template>
  <div class="flex flex-wrap justify-between items-center">
    <NuxtLink to="/">
      <img class="w-full h-full max-w-[4rem] max-h-[4rem] rounded-full border-[3px] border-lime-300"
        src="/assets/images/sergio-azocar.jpg" alt="Sergio Azócar" />
    </NuxtLink>

    <div @click="isOpen = !isOpen" class="sm:hidden cursor-pointer border border-lime-300 px-2">
      <fa v-if="!isOpen" :icon="['fas', 'bars']" class="text-lime-300" />
      <fa v-else :icon="['fas', 'close']" class="text-lime-300" />
    </div>

    <div :class="{ hidden: !isOpen }"
      class="flex sm:flex gap-3 items-center text-lime-300 font-bold w-full sm:w-auto flex-col sm:flex-row">
      <NuxtLink to="/about">Sobre mi</NuxtLink>
      <NuxtLink to="/setup">Setup</NuxtLink>
      <NuxtLink to="/talks">Talks</NuxtLink>
      <NuxtLink to="/tools">Tools</NuxtLink>
      <div class="flex gap-3">
        <NuxtLink to="https://www.linkedin.com/in/sergio-azocar/" target="_blank">
          <fa :icon="['fab', 'linkedin']" class="fa-lg text-violet-600" />
        </NuxtLink>
        <NuxtLink to="https://twitter.com/sergioazoc/" target="_blank">
          <fa :icon="['fab', 'twitter']" class="fa-lg text-violet-600" />
        </NuxtLink>
        <NuxtLink to="https://github.com/sergioazoc/" target="_blank">
          <fa :icon="['fab', 'github']" class="fa-lg text-violet-600" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>