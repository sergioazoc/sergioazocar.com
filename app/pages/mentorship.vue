<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const { t } = useI18n()

const items = computed<AccordionItem[]>(() => [
  {
    label: t('faq.0.question'),
    content: t('faq.0.answer'),
  },
  {
    label: t('faq.1.question'),
    content: t('faq.1.answer'),
  },
  {
    label: t('faq.2.question'),
    content: t('faq.2.answer'),
  },
  {
    label: t('faq.3.question'),
    content: t('faq.3.answer'),
  },
  {
    label: t('faq.4.question'),
    content: t('faq.4.answer'),
  },
])
</script>

<template>
  <div>
    <UPageHero :title="t('title')" :description="t('description')" />

    <section class="mb-16 grid grid-cols-1 md:grid-cols-3">
      <div class="col-span-2">
        <NuxtImg
          class="h-full max-h-[530px] w-full rounded-lg rounded-b-none object-cover md:rounded-b-lg md:rounded-l-lg md:rounded-r-none"
          src="/images/mentorship/mentorship.jpeg"
          alt="Sergio Azócar"
          placeholder
          sizes="sm:100vw md:50vw lg:700px"
          loading="eager"
          decoding="async"
        />
      </div>

      <UCard class="rounded-t-none md:rounded-l-none md:rounded-t-lg">
        <template #header>
          <h2>{{ t('schedule.title') }}</h2>
        </template>

        <div class="mb-4 grid gap-2">
          <div v-for="item in 5" :key="item" class="flex items-center gap-2">
            <div class="flex items-center">
              <UIcon name="lucide-circle-check" size="20" class="text-primary" />
            </div>
            <p>
              {{ t(`schedule.description.${item}`) }}
            </p>
          </div>
        </div>

        <p class="flex items-center text-neutral-400">
          <UIcon name="lucide-asterisk" size="20" />
          {{ t('schedule.footer') }}
        </p>

        <template #footer>
          <UButton size="xl" href="https://calendar.app.google/6KF6e1cbfhaVBWzz7" target="_blank">
            {{ t('schedule.button') }}
          </UButton>
        </template>
      </UCard>
    </section>

    <section class="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
      <UCard>
        <template #header>
          <h2>{{ t('target.title') }}</h2>
        </template>

        <div class="grid gap-2">
          <div v-for="item in 4" :key="item" class="flex items-center gap-2">
            <div class="flex items-center">
              <UIcon name="lucide-chevron-right" size="20" class="text-primary" />
            </div>
            <p>
              {{ t(`target.description.${item}`) }}
            </p>
          </div>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h2>{{ t('commitment.title') }}</h2>
        </template>

        <div class="grid gap-2">
          <div v-for="item in 4" :key="item" class="flex items-center gap-2">
            <div class="flex items-center">
              <UIcon name="lucide-chevron-right" size="20" class="text-primary" />
            </div>
            <p>
              {{ t(`commitment.description.${item}`) }}
            </p>
          </div>
        </div>
      </UCard>
    </section>

    <section>
      <h2 class="mb-8 text-center">FAQ</h2>

      <UCard>
        <UAccordion
          :items="items"
          :ui="{
            label: 'text-lg',
            content: 'text-neutral-400',
          }"
        />
      </UCard>
    </section>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "title": "Mentoría",
    "description": "Mentorías personalizadas para que escales tu carrera como desarrollador frontend. Desde tus primeros pasos hasta liderar equipos.",
    "schedule": {
      "title": "Agenda tu mentoría",
      "description": {
        "1": "Mentoría 1:1",
        "2": "60 minutos de sesión",
        "3": "Modalidad online",
        "4": "Acorde a tu disponibilidad",
        "5": "Enfocada en tus necesidades"
      },
      "button": "Agendar mentoría",
      "footer": "Gratis por tiempo limitado"
    },
    "target": {
      "title": "¿A quién va dirigido?",
      "description": {
        "1": "Quieres mejorar tus habilidades técnicas y de liderazgo.",
        "2": "Buscas orientación para avanzar en tu carrera y alcanzar tus objetivos profesionales.",
        "3": "Deseas recibir feedback constructivo sobre tu trabajo y proyectos.",
        "4": "Te gustaría aprender de la experiencia de un mentor con trayectoria en la industria."
      }
    },
    "commitment": {
      "title": "Mi compromiso",
      "description": {
        "1": "Te ayudaré a identificar tus fortalezas y áreas de mejora.",
        "2": "Te proporcionaré recursos y herramientas para tu desarrollo profesional.",
        "3": "Te guiaré en la planificación de tu carrera y establecimiento de objetivos.",
        "4": "Te ofreceré apoyo continuo y seguimiento en tu progreso."
      }
    },
    "faq": [
      {
        "question": "¿Cómo funciona el proceso de mentoría?",
        "answer": "El proceso comienza con una sesión de diagnóstico para entender tus necesidades y objetivos. Luego, establecemos un plan de acción personalizado."
      },
      {
        "question": "¿Qué duración tienen las sesiones de mentoría?",
        "answer": "Las sesiones suelen durar 60 minutos, dependiendo de tus necesidades."
      },
      {
        "question": "¿Con qué frecuencia se realizan las sesiones?",
        "answer": "La frecuencia puede variar según tus necesidades, pero generalmente se recomienda una sesión cada dos semanas."
      },
      {
        "question": "¿Puedo elegir el horario de las sesiones?",
        "answer": "Sí, trabajaremos juntos para encontrar horarios que se ajusten a tu agenda."
      },
      {
        "question": "¿Qué temas se pueden tratar en las sesiones?",
        "answer": "Podemos abordar temas técnicos, desarrollo de habilidades blandas, planificación de carrera y más."
      }
    ]
  },
  "en": {
    "title": "Mentorship",
    "description": "Personalized mentorship to help you scale your career as a frontend developer. From your first steps to leading teams.",
    "schedule": {
      "title": "Schedule your mentorship",
      "description": {
        "1": "1:1 Mentorship",
        "2": "60-minute session",
        "3": "Online format",
        "4": "According to your availability",
        "5": "Focused on your needs"
      },
      "button": "Schedule mentorship",
      "footer": "Free for a limited time"
    },
    "target": {
      "title": "Who is it for?",
      "description": {
        "1": "You want to improve your technical and leadership skills.",
        "2": "You seek guidance to advance in your career and achieve your professional goals.",
        "3": "You wish to receive constructive feedback on your work and projects.",
        "4": "You would like to learn from the experience of a mentor with a track record in the industry."
      }
    },
    "commitment": {
      "title": "My commitment",
      "description": {
        "1": "I will help you identify your strengths and areas for improvement.",
        "2": "I will provide you with resources and tools for your professional development.",
        "3": "I will guide you in planning your career and setting goals.",
        "4": "I will offer ongoing support and follow-up on your progress."
      }
    },
    "faq": [
      {
        "question": "How does the mentorship process work?",
        "answer": "The process begins with a diagnostic session to understand your needs and goals. Then, we establish a personalized action plan."
      },
      {
        "question": "How long are the mentorship sessions?",
        "answer": "Sessions typically last 60 minutes, depending on your needs."
      },
      {
        "question": "How often are the sessions held?",
        "answer": "The frequency can vary based on your needs, but generally, a session every two weeks is recommended."
      },
      {
        "question": "Can I choose the timing of the sessions?",
        "answer": "Yes, we will work together to find times that fit your schedule."
      },
      {
        "question": "What topics can be covered in the sessions?",
        "answer": "We can address technical topics, soft skills development, career planning, and more."
      }
    ]
  }
}
</i18n>
