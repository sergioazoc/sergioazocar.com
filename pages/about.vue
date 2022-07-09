<script setup>
const description = ref('Vue Frontend Developer')

useHead({
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>

<template>
  <section>
    <h1 class="text-lime-300 text-4xl font-bold mb-11">
      <fa :icon="['fas', 'terminal']" class="block text-lime-300 mr-3" />
      <span class="animate-ping">|</span> Sobre mi
    </h1>

    <p class="text-slate-200 mb-8 text-xl md:text-2xl">Siempre me gustó pertenecer a comunidades, desde chico partí en
      un foro de
      Modding (hardmodding) dónde aprendí a amar la tecnología, desde entonces ayudo a fomentar y potenciar
      comunidades entorno a la tecnología, programación y emprendimiento 🙌</p>

    <div class="flex flex-wrap md:flex-nowrap flex-row gap-5">

      <div class="basis-full md:basis-1/2 border border-violet-600 bg-slate-800">
        <img class="" src="/assets/images/startupweekend.jpg" alt="Sergio Azócar" />
        <p class="text-lime-300 text-lg p-5">Coorganizador de <a href="https://www.facebook.com/swloslagos"
            class="text-yellow-300 hover:text-yellow-400" target="_blank" rel="noopener noreferrer">Startup Weekend Los
            Lagos</a>, dónde
          enseñamos a crear una startup en 54 horas.
        </p>
      </div>

      <div class="basis-full md:basis-1/2 border border-violet-600 bg-slate-800">
        <img class="" src="/assets/images/devs&ops.jpg" alt="Sergio Azócar" />
        <p class="text-lime-300 text-lg p-5">Staff de la comunidad de <a href="https://www.facebook.com/devsopsLosLagos"
            class="text-yellow-300 hover:text-yellow-400" target="_blank" rel="noopener noreferrer">Devs&Ops
            Los Lagos</a>, dónde
          organizamos eventos, meetups y networking para
          programadores de la región.</p>
      </div>

    </div>
  </section>
</template>