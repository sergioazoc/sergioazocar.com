<template>
  <div class="flex justify-between items-center">
    <NuxtLink to="/">
      <img class="w-20 h-20 rounded-full border-4 border-lime-300" src="/assets/images/sergio-azocar.jpg"
        alt="Sergio Azócar" />
    </NuxtLink>

    <div class="sm:hidden">
      <fa :icon="['fas', 'bars']" class="text-lime-300" />
    </div>

    <div class="flex gap-3 items-center text-lime-300 font-bold">
      <NuxtLink to="/about">Sobre mi</NuxtLink>
      <NuxtLink to="/setup">Setup</NuxtLink>
      <NuxtLink to="/talks">Talks</NuxtLink>
      <NuxtLink to="/tools">Tools</NuxtLink>
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
</template>