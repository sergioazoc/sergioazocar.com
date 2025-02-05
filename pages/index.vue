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
  <header class="grid gap-4 py-16 md:py-24 text-center">
    <h1 class="text-[clamp(3rem,5vw,4.5rem)] font-bold bg-clip-text text-transparent bg-gradient-to-r from-vue-green to-vue-purple">
      ¡Hola! soy Sergio
    </h1>

    <p class="text-slate-400">
      Senior Frontend Developer, con más de 8 años trabajando en tecnología.
    </p>
    <p class="text-slate-400 mb-5">
      Líder de comunidades, speaker y mentor.
    </p>

    <div
      v-if="false"
      class="flex gap-4 mx-auto"
    >
      <BaseButton>Agendar Mentoría</BaseButton>
      <BaseButton variant="secondary">
        Contactar
      </BaseButton>
    </div>
  </header>

  <div class="">
    <NuxtImg
      class="object-cover mx-auto"
      src="/images/index/jsconf.jpg"
      alt="Sergio Azócar"
      placeholder
      loading="lazy"
    />
  </div>

  <section class="my-16">
    <BaseTitle
      tag="h2"
      class="text-center"
    >
      Experiencia
    </BaseTitle>
    <p class="text-center max-w-2xl block mx-auto mb-5">
      He trabajado en proyectos de gran escala para empresas líderes en diferentes industrias, liderando equipos de desarrollo frontend y mentoreando a los miembros del equipo.
    </p>
  </section>

  <section class="mb-16">
    <div class="grid grid-cols-2 sm:grid-cols-4 items-stretch gap-5">
      <NuxtImg
        class="hover:scale-110 object-cover transition duration-500 sm:max-w-[300px] w-full"
        src="/images/index/jschile.jpeg"
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
