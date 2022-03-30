<template>
  <div>
    <div class="flex justify-between items-center p-3">
      <img
        class="w-20 h-20 rounded-full border-4 border-green-500"
        src="@/public/assets/images/sergio-azocar.jpg"
        alt="Sergio Azócar"
      />

      <div class="flex gap-3 text-emerald-400 font-bold">
        <p>Blog</p>
        <p>Sobre mi</p>
        <p>Contacto</p>
      </div>
    </div>
    <slot />
  </div>
</template>