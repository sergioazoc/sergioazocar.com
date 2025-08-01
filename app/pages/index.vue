<script lang="ts" setup>
const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: 'Sergio Azócar - Frontend Developer Senior',
  description: t('seo.description'),
})
</script>

<template>
  <div class="grid gap-16">
    <section class="text-center">
      <BaseHero
        :title="t('hello.title')"
        :description="t('hello.description')"
        :highlight="t('hello.highlight')"
      />

      <div class="flex items-center justify-center gap-4">
        <UButton :to="localePath('mentorship')" size="xl">{{ t('cta.mentoring') }}</UButton>
        <UButton :to="localePath('about')" size="xl" variant="subtle">{{ t('cta.about') }}</UButton>
      </div>
    </section>

    <section>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <UCard class="lg:col-span-2">
          <template #header>
            <div class="flex items-center gap-4 text-xl font-semibold">
              <UIcon name="lucide-briefcase-business" class="text-success-500" />
              <p>{{ t('experience.title') }}</p>
            </div>
          </template>

          <p>{{ t('experience.description') }}</p>

          <template #footer>
            <div class="flex flex-wrap gap-2">
              <UBadge variant="outline" class="rounded-full">Vue.js</UBadge>
              <UBadge variant="outline" class="rounded-full">TypeScript</UBadge>
              <UBadge variant="outline" class="rounded-full">Nuxt</UBadge>
              <UBadge variant="outline" class="rounded-full">Node.js</UBadge>
            </div>
          </template>
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center gap-4 text-xl font-semibold">
              <UIcon name="lucide-target" class="text-success-500" />
              <p>{{ t('current.title') }}</p>
            </div>
          </template>

          <p>{{ t('current.description') }}</p>
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center gap-4 text-xl font-semibold">
              <UIcon name="lucide-users" class="text-purple-500" />
              <p>{{ t('mentoring.title') }}</p>
            </div>
          </template>

          <p>{{ t('mentoring.description') }}</p>
        </UCard>

        <UCard class="lg:col-span-2">
          <template #header>
            <div class="flex items-center gap-4 text-xl font-semibold">
              <UIcon name="lucide-mic" class="text-orange-500" />
              <p>{{ t('speaking.title') }}</p>
            </div>
          </template>

          <p>{{ t('speaking.description') }}</p>

          <template #footer>
            <ULink :to="localePath('talks')">
              {{ t('speaking.footer') }}
              <UIcon name="lucide-external-link" class="ml-1 inline-block" />
            </ULink>
          </template>
        </UCard>
      </div>
    </section>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "seo": {
      "title": "Sergio Azócar - Desarrollador Frontend Senior",
      "description": "Desarrollador frontend senior especializado en Vue.js y TypeScript. Construyo aplicaciones web excepcionales con un enfoque en el rendimiento y la experiencia de usuario."
    },
    "hello": {
      "title": "¡Hola! Soy Sergio Azócar",
      "highlight": "Desarrollador Frontend Senior",
      "description": "Construyo aplicaciones web excepcionales con Vue.js, TypeScript y tecnologías frontend modernas. Apasionado por el código limpio, la optimización del rendimiento y compartir conocimientos."
    },
    "cta": {
      "mentoring": "Agendar Mentoría",
      "about": "Sobre mí"
    },
    "experience": {
      "title": "Experiencia",
      "description": "Más de 5 años construyendo soluciones modulares, reutilizables y de alto rendimiento con Vue.js para startups y empresas grandes."
    },
    "current": {
      "title": "Enfoque Actual",
      "description": "Optimización del rendimiento, Vue 3 Composition API y mejoras en la experiencia del desarrollador."
    },
    "mentoring": {
      "title": "Mentoría",
      "description": "Ayudando a los desarrolladores a mejorar sus habilidades en prácticas modernas de frontend."
    },
    "speaking": {
      "title": "Charlas y Talleres",
      "description": "Ponente habitual en conferencias y meetups de Vue.js. He impartido talleres sobre patrones avanzados de Vue.js.",
      "footer": "Ver las charlas"
    }
  },
  "en": {
    "seo": {
      "title": "Sergio Azócar - Senior Frontend Developer",
      "description": "Senior frontend developer specializing in Vue.js and TypeScript. I build exceptional web applications with a focus on performance and user experience."
    },
    "hello": {
      "title": "Hello! I'm Sergio Azócar",
      "highlight": "Senior Frontend Developer",
      "description": "Building exceptional web applications with Vue.js, TypeScript, and modern frontend technologies. Passionate about clean code, performance optimization, and sharing knowledge."
    },
    "cta": {
      "mentoring": "Schedule Mentoring",
      "about": "About Me"
    },
    "experience": {
      "title": "Experience",
      "description": "Over 5 years building modular, reusable, and high-performance solutions with Vue.js for startups and enterprise companies."
    },
    "current": {
      "title": "Current Focus",
      "description": "Performance optimization, Vue 3 Composition API, and developer experience improvements."
    },
    "mentoring": {
      "title": "Mentoring",
      "description": "Helping developers level up their skills in modern frontend practices."
    },
    "speaking": {
      "title": "Speaking & Workshops",
      "description": "Regular speaker at Vue.js conferences and meetups. Conducted workshops on advanced Vue.js patterns.",
      "footer": "View Talks"
    }
  }
}
</i18n>
