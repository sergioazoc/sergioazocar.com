<script lang="ts" setup>
  const description = ref('Vue Frontend Developer')
  const { t } = useI18n()

  const communities = [
    {
      image: '/images/startupweekend.jpg',
      link: 'https://www.facebook.com/swloslagos',
      translationKey: 'startup'
    },
    {
      image: '/images/devs&ops.jpg',
      link: 'https://www.linkedin.com/company/techs-los-lagos',
      translationKey: 'techs'
    },
    {
      image: '/images/techschool.jpg',
      link: 'https://jschile.org',
      translationKey: 'js'
    }
  ]

  useHead({
    meta: [{
      name: 'description',
      content: description.value
    }]
  })
</script>

<template>
  <section>
    <BaseTitle>
      {{ t('title') }}
    </BaseTitle>

    <p class="mb-5">
      {{ t('description') }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div 
        v-for="community in communities" 
        :key="community.translationKey"
        class="border-2 rounded-sm border-vue-green overflow-hidden"
      >
        <NuxtImg
          class="hover:scale-110 object-cover transition duration-500 min-h-64"
          :src="community.image"
          alt="Sergio Azócar"
          placeholder
          sizes="600px"
        />
        <p class="p-3">
          {{ t(`communities.${community.translationKey}.role`) }}
          <a
            :href="community.link"
            class="text-vue-green"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t(`communities.${community.translationKey}.name`) }}
          </a>,
          {{ t(`communities.${community.translationKey}.description`) }}
        </p>
      </div>
    </div>
  </section>
</template>

<i18n lang="yaml">
  es:
    title: Sobre mi
    description: Siempre me gustó pertenecer a comunidades, desde chico partí en un foro de Modding (hardmodding) dónde aprendí a amar la tecnología, desde entonces ayudo a fomentar y potenciar comunidades entorno a la tecnología, programación y emprendimiento 🙌
    communities:
      startup:
        role: Coorganizador de
        name: Startup Weekend Los Lagos
        description: dónde enseñamos a crear una startup en 54 horas.
      techs:
        role: Staff de la comunidad de
        name: Tech's Los Lagos
        description: dónde organizamos eventos, meetups y networking para programadores de la región.
      js:
        role: Voluntario en
        name: JavaScript Chile
        description: comunidad sobre JavaScript en Chile, dónde organizamos eventos, meetups y networking.
  en:
    title: About me
    description: I always liked to belong to communities, since I was a kid I started in a Modding forum (hardmodding) where I learned to love technology, since then I help to promote and empower communities around technology, programming and entrepreneurship 🙌
    communities:
      startup:
        role: Co-organizer of
        name: Startup Weekend Los Lagos
        description: where we teach how to create a startup in 54 hours.
      techs:
        role: Staff member of
        name: Tech's Los Lagos
        description: where we organize events, meetups and networking for developers in the region.
      js:
        role: Volunteer at
        name: JavaScript Chile
        description: JavaScript community in Chile, where we organize events, meetups and networking.
  </i18n>