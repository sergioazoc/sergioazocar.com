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
  <header class="flex flex-wrap lg:flex-nowrap items-center gap-8 py-16 md:py-36">
    <div class="">
      <div class="mb-5">
        <h1 class="text-[clamp(3rem,5vw,4.5rem)] font-bold bg-clip-text text-transparent bg-gradient-to-r from-vue-green to-vue-purple">
          Sergio Azócar
        </h1>
      </div>

      <p class="text-xl text-slate-600 dark:text-slate-400">
        Sr. Frontend Developer, con más de 8 años de experiencia.
      </p>
      <p class="text-xl text-slate-600 dark:text-slate-400 mb-5">
        Líder de comunidades, speaker y mentor.
      </p>

      <div
        v-if="flase"
        class="flex gap-4"
      >
        <BaseButton>Agendar Mentoría</BaseButton>
        <BaseButton variant="secondary">
          Contactar
        </BaseButton>
      </div>
    </div>

    <NuxtImg
      class="hover:scale-110 object-cover transition duration-500 w-full max-w-2xl"
      src="/images/index/jsconf.jpg"
      alt="Sergio Azócar"
      placeholder
      loading="lazy"
    />
  </header>

  <section>
    <BaseTitle
      tag="h2"
      class="text-center"
    >
      Experiencia
    </BaseTitle>
    <p class="text-center max-w-2xl block mx-auto mb-5">
      He trabajado en proyectos de gran escala para empresas líderes en diferentes industrias, liderando equipos de desarrollo frontend y mentorando a los miembros del equipo.
    </p>
  </section>

  <section class="mb-8">
    <div class="flex flex-wrap justify-center gap-5">
      <NuxtImg
        class="hover:scale-110 object-cover transition duration-500 sm:max-w-[300px] w-full"
        src="/images/index/jschile.jpeg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
      <NuxtImg
        class="hover:scale-110 object-cover transition duration-500 sm:max-w-[300px] w-full"
        src="/images/index/jsconf.jpg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
      <NuxtImg
        class="hover:scale-110 object-cover transition duration-500 sm:max-w-[300px] w-full"
        src="/images/index/techs-talk01.jpg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
      <NuxtImg
        class="hover:scale-110 object-cover transition duration-500 sm:max-w-[300px] w-full"
        src="/images/index/techs-talk02.jpeg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
      <NuxtImg
        class="hover:scale-110 object-cover transition duration-500 sm:max-w-[300px] w-full"
        src="/images/index/techschoolv2.jpg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
    </div>
  </section>
</template>
