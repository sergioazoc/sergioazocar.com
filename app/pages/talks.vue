<script setup lang="ts">
const { t, locale } = useI18n()

const isLoaded = ref(false)
const isPlaying = ref(false)
const video = ref()

const stateChange = (event: { data: number }) => {
  isPlaying.value = event.data === 1
}

const parseDate = (dateString: string) => {
  const [day, month, year] = dateString.split('/')
  return new Date(parseInt(year!), parseInt(month!) - 1, parseInt(day!))
}

const formatDate = (dateString: string) => {
  const date = parseDate(dateString)
  return new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

const talksData = [
  {
    date: '11/04/2024',
    event: 'Nerdearla Chile',
    youtubeId: 'pS3Sevsxw_A',
    tags: ['Frontend', 'JavaScript', 'Web Development'],
  },
  {
    date: '26/07/2022',
    event: 'PHP México',
    youtubeId: 'nlEHJXhqtQM',
    tags: ['Vue'],
  },
  {
    date: '05/03/2024',
    event: 'Innovadores al fin del mundo',
    youtubeId: '2-mueX2lm6s',
    tags: ['Tech', 'Startups'],
  },
  {
    date: '26/10/2022',
    event: 'Dev&Ops is back',
    img: '/images/talks/dev&ops.jpg',
    tags: ['Vue', 'JavaScript'],
  },
]

const talks = computed(() => {
  return talksData.map((talk, index) => ({
    ...talk,
    name: t(`talks.${index}.name`),
    description: t(`talks.${index}.description`),
  }))
})
</script>

<template>
  <div>
    <LazyBaseHero :title="t('title')" :description="t('description')" />

    <section>
      <h2 class="mb-8 hidden">{{ t('talks-title') }}</h2>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <LazyUCard
          v-for="talk in talks"
          :key="talk.name"
          :ui="{
            root: 'p-0 sm:p-0 grid-rows-[auto_1fr_auto]',
          }"
        >
          <template #header>
            <ScriptYouTubePlayer
              v-if="talk.youtubeId"
              ref="video"
              class="rounded-t-lg [&_iframe]:rounded-t-lg [&_img]:rounded-t-lg"
              :video-id="talk.youtubeId"
              @ready="isLoaded = true"
              @state-change="stateChange"
            >
              <template #awaitingLoad>
                <div
                  class="absolute left-1/2 top-1/2 h-[48px] w-[68px] -translate-x-1/2 -translate-y-1/2 transform"
                >
                  <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                    <path
                      d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                      fill="#f00"
                    />
                    <path d="M 45,24 27,14 27,34" fill="#fff" />
                  </svg>
                </div>
              </template>
            </ScriptYouTubePlayer>
            <NuxtImg
              v-else-if="talk.img"
              :alt="talk.name"
              :src="talk.img"
              class="aspect-video w-full rounded-t-lg object-cover"
              decoding="async"
              loading="lazy"
              quality="80"
              sizes="sm:100vw md:50vw lg:600px"
            />
          </template>

          <div class="h-full px-6">
            <p class="mb-2 text-sm text-neutral-400">{{ formatDate(talk.date) }}</p>
            <h3 class="text-xl font-bold">{{ talk.name }}</h3>
            <p class="text-primary text-lg">{{ talk.event }}</p>
            <p class="mt-2 text-neutral-400">{{ talk.description }}</p>
          </div>

          <template #footer>
            <div v-if="talk.youtubeId" class="sm-p6 p-6">
              <UButton
                :href="'https://www.youtube.com/watch?v=' + talk.youtubeId"
                target="_blank"
                color="primary"
                variant="solid"
                icon="lucide-youtube"
              >
                {{ t('watch-youtube') }}
              </UButton>
            </div>
          </template>
        </LazyUCard>
      </div>
    </section>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "title": "Charlas y Talleres",
    "description": "Compartiendo conocimientos a través de charlas en conferencias, talleres y sesiones de mentoría. Apasionado por ayudar a la comunidad a crecer y aprender juntos.",
    "talks-title": "Charlas",
    "talks": [
      {
        "name": "Deconstruyendo el frontend, de la teoría a la práctica",
        "description": "Deconstruyendo el Frontend: De la Teoría a la Práctica explora la evolución histórica del desarrollo frontend, desde sus inicios hasta los frameworks modernos. La charla aborda principios clave, desafíos prácticos en la construcción de interfaces de usuario y la importancia de la accesibilidad y la mantenibilidad. Se enfatiza la curiosidad, el aprendizaje continuo y la iteración en este campo en constante evolución."
      },
      {
        "name": "The Vueniverse",
        "description": "La charla explora el framework Vue.js, su evolución, APIs y beneficios. Se cubren herramientas, librerías y tipos de aplicaciones construibles con Vue.js, destacando su relevancia en el mercado laboral. La presentación concluye con una sesión de preguntas y respuestas."
      },
      {
        "name": "Ep. 44",
        "description": "\"Innovadores al Fin del Mundo\" presenta a Pablo Ojeda y Sergio Azócar, quienes comparten sus experiencias en startups chilenas y el espíritu emprendedor del sur de Chile. La conversación resalta la importancia del trabajo remoto, las habilidades blandas y el impacto de la comunidad en los ecosistemas emprendedores. El episodio fomenta la curiosidad, la colaboración y el aprovechamiento de recursos."
      },
      {
        "name": "Vue, el framework progresivo de JavaScript",
        "description": "La charla explora el framework Vue.js, su evolución, APIs y beneficios. Se cubren herramientas, librerías y tipos de aplicaciones construibles con Vue.js, destacando su relevancia en el mercado laboral. La presentación concluye con una sesión de preguntas y respuestas."
      }
    ],
    "watch-youtube": "Ver en YouTube"
  },
  "en": {
    "title": "Talks & Workshops",
    "description": "Sharing knowledge through conference talks, workshops, and mentoring sessions. Passionate about helping the community grow and learn together.",
    "talks-title": "Talks",
    "talks": [
      {
        "name": "Deconstructing Frontend, from Theory to Practice",
        "description": "Deconstructing Frontend: From Theory to Practice explores the historical evolution of frontend development, from its beginnings to modern frameworks. The talk addresses key principles, practical challenges in building user interfaces, and the importance of accessibility and maintainability. It emphasizes curiosity, continuous learning, and iteration in this ever-evolving field."
      },
      {
        "name": "The Vueniverse",
        "description": "The talk explores the Vue.js framework, its evolution, APIs, and benefits. It covers tools, libraries, and types of applications that can be built with Vue.js, highlighting its relevance in the job market. The presentation concludes with a Q&A session."
      },
      {
        "name": "Ep. 44",
        "description": "\"Innovators at the End of the World\" features Pablo Ojeda and Sergio Azócar, who share their experiences in Chilean startups and the entrepreneurial spirit of southern Chile. The conversation highlights the importance of remote work, soft skills, and the impact of community on entrepreneurial ecosystems. The episode encourages curiosity, collaboration, and resourcefulness."
      },
      {
        "name": "Vue, the Progressive JavaScript Framework",
        "description": "The talk explores the Vue.js framework, its evolution, APIs, and benefits. It covers tools, libraries, and types of applications that can be built with Vue.js, highlighting its relevance in the job market. The presentation concludes with a Q&A session."
      }
    ],
    "watch-youtube": "Watch on YouTube"
  }
}
</i18n>
