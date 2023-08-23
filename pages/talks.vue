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
</script>

<template>
  <section>
    <BaseTitle>
      Charlas
    </BaseTitle>

    <p class="text-lg mb-5">
      A lo largo de mi carrera he tenido la oportunidad de participar
      en diversas instancias para compartir mi conocimiento, aquí iré recopilando algunas de ellas.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="overflow-hidden">
        <LiteYouTubeEmbed
          id="nlEHJXhqtQM"
          title="The Vueniverse"
        />
        <h3 class="text-xl text-vue-purple dark:text-vue-green text-center font-bold p-3">
          The Vueniverse
        </h3>
      </div>
      <div class="overflow-hidden">
        <LiteYouTubeEmbed
          id="2-mueX2lm6s"
          title="Innovadores al fin del mundo"
        />
        <h3 class="text-xl text-vue-purple dark:text-vue-green text-center font-bold p-3">
          Innovadores al Fin del Mundo
        </h3>
      </div>
    </div>
  </section>
</template>
