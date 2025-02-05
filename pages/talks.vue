<script lang="ts" setup>
  import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
  import 'vue-lite-youtube-embed/style.css'

  const description = ref('Vue Frontend Developer')

  useHead({
    meta: [{
      name: 'description',
      content: description.value
    }]
  })

  const videos = [
    {
      id: 'nlEHJXhqtQM',
      title: 'The Vueniverse'
    },
    {
      id: '2-mueX2lm6s',
      title: 'Innovadores al fin del mundo'
    },
    {
      id: 'pS3Sevsxw_A',
      title: 'Deconstruyendo el Frontend, de la teoría a la práctica'
    }
  ]
</script>

<template>
  <section>
    <BaseTitle>
      Charlas
    </BaseTitle>

    <p class="mb-5">
      A lo largo de mi carrera he tenido la oportunidad de participar
      en diversas instancias para compartir mi conocimiento, aquí iré recopilando algunas de ellas.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div
        v-for="video in videos"
        :key="video.id"
        class="overflow-hidden"
      >
        <LiteYouTubeEmbed
          :id="video.id"
          :title="video.title"
        />
        <h2 class="text-vue-green text-center font-bold p-3">
          {{ video.title }}
        </h2>
      </div>
    </div>
  </section>
</template>
