<script lang="ts" setup>
  const description = ref('Vue Frontend Developer')
  const { t } = useI18n()

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
      {{ t('title') }}
    </h1>

    <p class="text-slate-400">
      {{ t('subTitle') }}
    </p>
    <p class="text-slate-400 mb-5">
      {{ t('about') }}
    </p>

    <div
      v-if="false"
      class="flex gap-4 mx-auto"
    >
      <BaseButton>{{ t('scheduleMentoring') }}</BaseButton>
      <BaseButton variant="secondary">
        {{ t('contact') }}
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
      {{ t('experience') }}
    </BaseTitle>
    <p class="text-center max-w-2xl block mx-auto mb-5">
      {{ t('work') }}
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

<i18n lang="yaml">
  es:
    title: ¡Hola! soy Sergio
    subTitle: Senior Frontend Developer, con más de 8 años trabajando en tecnología.
    about: Líder de comunidades, speaker y mentor.
    scheduleMentoring: Agendar Mentoría
    contact: Contactar
    experience: Experiencia
    work: He trabajado en proyectos de gran escala para empresas líderes en diferentes industrias, liderando equipos de desarrollo frontend y mentoreando a los miembros del equipo.
  en:
    title: Hi! I'm Sergio
    subTitle: Senior Frontend Developer, with more than 8 years working in technology.
    about: Community leader, speaker and mentor.
    scheduleMentoring: Schedule a Mentoring
    contact: Contact
    experience: Experience
    work: I have worked on large-scale projects for leading companies in different industries, leading frontend development teams and mentoring team members.
  </i18n>