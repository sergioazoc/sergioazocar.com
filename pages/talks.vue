<script lang="ts" setup>
  import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
  import 'vue-lite-youtube-embed/style.css'

  const description = ref('Vue Frontend Developer')
  const { t } = useI18n()

  useHead({
    meta: [{
      name: 'description',
      content: description.value
    }]
  })

  const videos = [
    {
      id: 'nlEHJXhqtQM',
      translationKey: 'vueniverse'
    },
    {
      id: '2-mueX2lm6s',
      translationKey: 'innovadores'
    },
    {
      id: 'pS3Sevsxw_A',
      translationKey: 'frontend'
    }
  ]
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
        v-for="video in videos"
        :key="video.id"
        class="overflow-hidden"
      >
        <LiteYouTubeEmbed
          :id="video.id"
          :title="t(`videos.${video.translationKey}.title`)"
        />
        <h2 class="text-vue-green text-center font-bold p-3">
          {{ t(`videos.${video.translationKey}.title`) }}
        </h2>
      </div>
    </div>
  </section>
</template>

<i18n lang="yaml">
es:
  title: Charlas
  description: A lo largo de mi carrera he tenido la oportunidad de participar en diversas instancias para compartir mi conocimiento, aquí iré recopilando algunas de ellas.
  videos:
    vueniverse:
      title: The Vueniverse
    innovadores:
      title: Innovadores al fin del mundo
    frontend:
      title: Deconstruyendo el Frontend, de la teoría a la práctica
en:
  title: Talks
  description: Throughout my career I have had the opportunity to participate in various instances to share my knowledge, here I will be collecting some of them.
  videos:
    vueniverse:
      title: The Vueniverse
    innovadores:
      title: Innovators at the end of the world
    frontend:
      title: Deconstructing Frontend, from theory to practice
</i18n>