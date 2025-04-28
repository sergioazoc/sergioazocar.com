<script lang="ts" setup>
  const description = ref('Vue Frontend Developer')
  const { t } = useI18n()
  const { logos } = useLogos()

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
      <p class="text-slate-300 text-3xl">{{ t('subTitle') }}</p>
    </h1>

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

  <BaseCard class="my-20 flex justify-center items-center gap-16">
    <div>
      <BaseTitle
        tag="h2"
        class=""
      >
        {{ t('experience') }}
      </BaseTitle>
      <p class="max-w-2xl block mx-auto mb-5">
        {{ t('work') }}
      </p>
    </div>
    <NuxtImg
        class="object-cover transition duration-500 sm:max-w-[500px] w-full"
        src="/images/index/techs-talk01.jpg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
  </BaseCard>

  <section class="mb-20">
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
        src="/images/index/techs-talk02.jpeg"
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
        src="/images/index/techschoolv2.jpg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
    </div>
  </section>

  <section class="mb-8">
    <BaseTitle
      tag="h3"
      class="text-center"
    >
      {{ t('tools') }}
    </BaseTitle>
    <div class="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mt-8">
      <BaseLogo
        v-for="logo in logos"
        :key="logo.name" 
        :icon="logo.img"
      />
    </div>
  </section>
</template>

<i18n lang="yaml">
  es:
    title: ¡Hola! soy Sergio
    subTitle: Vue Frontend Developer Senior
    about: "Líder de Comunidades, Speaker y Mentor"
    scheduleMentoring: Agendar Mentoría
    contact: Contactar
    experience: Experiencia
    work: He trabajado en proyectos de gran escala para empresas líderes en diferentes industrias, liderando equipos de desarrollo frontend y mentoreando a los miembros del equipo.
    tools: Herramientas que utilizo
  en:
    title: Hi! I'm Sergio
    subTitle: Senior Vue Frontend Developer
    about: Community Leader, Speaker and Mentor
    scheduleMentoring: Schedule a Mentoring
    contact: Contact
    experience: Experience
    work: I have worked on large-scale projects for leading companies in different industries, leading frontend development teams and mentoring team members.
    tools: Tools I use
</i18n>