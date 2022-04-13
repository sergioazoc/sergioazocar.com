<template>
  <div class="flex justify-between items-center">
    <img class="w-20 h-20 rounded-full border-4 border-lime-300" src="/assets/images/sergio-azocar.jpg"
      alt="Sergio Azócar" />

    <div class="flex gap-3 text-lime-300 font-bold">
      <p>Blog</p>
      <p>Sobre mi</p>
      <p>Contacto</p>
      <fa :icon="['fab', 'youtube']" class="fa-lg" />
      <fa :icon="['fab', 'instagram']" class="fa-lg" />
      <fa :icon="['fab', 'twitter']" class="fa-lg" />
      <fa :icon="['fab', 'twitch']" class="fa-lg" />
    </div>
  </div>
</template>