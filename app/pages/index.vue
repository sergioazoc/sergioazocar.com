<script lang="ts" setup>
import type { ButtonProps } from '#ui/types'

const { t } = useI18n()
const localePath = useLocalePath()

const links = ref<ButtonProps[]>([
  {
    label: t('cta.mentoring'),
    to: localePath('mentorship'),
    color: 'primary',
    variant: 'solid',
  },
  {
    label: t('cta.about'),
    to: localePath('about'),
    color: 'primary',
    variant: 'subtle',
  },
])

useSeoMeta({
  title: 'Sergio Azócar - Frontend Developer Senior',
  description: t('seo.description'),
})
</script>

<template>
  <div class="grid gap-16">
    <UPageHero
      :title="t('hello.title')"
      :description="t('hello.description')"
      :headline="t('hello.headline')"
      :links="links"
    />

    <section>
      <div class="grid gap-8 sm:grid-cols-2">
        <UPageCard
          variant="subtle"
          :spotlight="true"
          spotlight-color="primary"
        >
          <template #header>
            <div class="flex items-center gap-4 text-xl font-semibold">
              <UIcon name="lucide-briefcase-business" class="text-emerald-500" />
              <p>{{ t('experience.title') }}</p>
            </div>
          </template>

          <template #description>
            <p>{{ t('experience.description') }}</p>
          </template>

          <template #footer>
            <div class="flex flex-wrap gap-2">
              <UBadge variant="outline" class="rounded-full">Vue.js</UBadge>
              <UBadge variant="outline" class="rounded-full">TypeScript</UBadge>
              <UBadge variant="outline" class="rounded-full">Nuxt</UBadge>
              <UBadge variant="outline" class="rounded-full">Node.js</UBadge>
            </div>
          </template>
        </UPageCard>

        <UPageCard variant="subtle" :spotlight="true" spotlight-color="primary">
          <template #header>
            <div class="flex items-center gap-4 text-xl font-semibold">
              <UIcon name="lucide-target" class="text-cyan-500" />
              <p>{{ t('current.title') }}</p>
            </div>
          </template>

          <template #description>
            <p>{{ t('current.description') }}</p>
          </template>
        </UPageCard>

        <UPageCard variant="subtle" :spotlight="true" spotlight-color="primary">
          <template #header>
            <div class="flex items-center gap-4 text-xl font-semibold">
              <UIcon name="lucide-users" class="text-purple-500" />
              <p>{{ t('mentoring.title') }}</p>
            </div>
          </template>

          <template #description>
            <p>{{ t('mentoring.description') }}</p>
          </template>
        </UPageCard>

        <UPageCard
          variant="subtle"
          :spotlight="true"
          spotlight-color="primary"
        >
          <template #header>
            <div class="flex items-center gap-4 text-xl font-semibold">
              <UIcon name="lucide-mic" class="text-amber-500" />
              <p>{{ t('speaking.title') }}</p>
            </div>
          </template>

          <template #description>
            <p>{{ t('speaking.description') }}</p>
          </template>

          <template #footer>
            <UButton variant="ghost" icon="lucide-external-link" :to="localePath('talks')">
              {{ t('speaking.footer') }}
            </UButton>
          </template>
        </UPageCard>
      </div>
    </section>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "seo": {
      "title": "Sergio Azócar - Software Engineer",
      "description": "Software Engineer especializado en Vue, React y TypeScript. Construyo aplicaciones escalables para humanos y modelos de IA."
    },
    "hello": {
      "title": "¡Hola! Soy Sergio Azócar",
      "headline": "Software Engineer",
      "description": "Construyo aplicaciones escalables con Vue, React, TypeScript y tecnologías frontend modernas. Apasionado por el código limpio, la optimización del rendimiento y compartir conocimientos."
    },
    "cta": {
      "mentoring": "Agendar Mentoría",
      "about": "Sobre mí"
    },
    "experience": {
      "title": "Experiencia",
      "description": "Más de 10 años construyendo soluciones modulares, reutilizables y de alto rendimiento con Vue, React y TypeScript para startups y empresas consolidadas."
    },
    "current": {
      "title": "Enfoque Actual",
      "description": "Diseño arquitecturas y herramientas que promueven la colaboración, el contexto y la escalabilidad en proyectos modernos tanto para humanos como para modelos de IA."
    },
    "mentoring": {
      "title": "Mentoría",
      "description": "Acompaño a desarrolladores/as en el fortalecimiento de sus habilidades técnicas y comunicacionales, ayudándolos a avanzar hacia roles de mayor impacto y liderazgo dentro de sus equipos."
    },
    "speaking": {
      "title": "Charlas y Talleres",
      "description": "Relator en conferencias, meetups y talleres sobre arquitectura, experiencia de desarrollo y nuevas tendencias tecnológicas.",
      "footer": "Ver las charlas"
    }
  },
  "en": {
    "seo": {
      "title": "Sergio Azócar - Software Engineer",
      "description": "Software Engineer specializing in Vue, React, and TypeScript. I build scalable applications for humans and AI models."
    },
    "hello": {
      "title": "Hello! I'm Sergio Azócar",
      "headline": "Software Engineer",
      "description": "I build scalable applications with Vue, React, TypeScript, and modern frontend technologies. Passionate about clean code, performance optimization, and knowledge sharing."
    },
    "cta": {
      "mentoring": "Schedule Mentoring",
      "about": "About Me"
    },
    "experience": {
      "title": "Experience",
      "description": "Over 10 years of building modular, reusable, and high-performance solutions with Vue, React, and TypeScript for startups and established companies."
    },
    "current": {
      "title": "Current Focus",
      "description": "I design architectures and tools that promote collaboration, context, and scalability in modern projects for both humans and AI models."
    },
    "mentoring": {
      "title": "Mentoring",
      "description": "I mentor developers to strengthen their technical and communication skills, helping them advance to higher-impact and leadership roles within their teams."
    },
    "speaking": {
      "title": "Speaking & Workshops",
      "description": "Speaker at conferences, meetups, and workshops on architecture, developer experience, and new technology trends.",
      "footer": "View Talks"
    }
  }
}
</i18n>
