<template>
  <div class="min-h-screen bg-slate-900 p-4">
    <div class="flex justify-between items-center">
      <img class="w-20 h-20 rounded-full border-4 border-lime-300" src="@/public/assets/images/sergio-azocar.jpg"
        alt="Sergio Azócar" />

      <div class="flex gap-3 text-lime-300 font-bold">
        <p>Blog</p>
        <p>Sobre mi</p>
        <p>Contacto</p>
      </div>
    </div>
    <div class="main my-3">
      <slot />
    </div>
    <footer class="sticky bottom-0">
      <p class="text-lime-300 text-center">Hecho con 💚 vue & nuxt</p>
    </footer>
  </div>
</template>

<style>
.main {
  min-height: calc(100vh - 10rem);
}
</style>