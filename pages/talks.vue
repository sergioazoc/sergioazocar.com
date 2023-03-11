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
    <h1 class="text-primary mb-3">
      Charlas
    </h1>

    <p class="lead">
      A lo largo de mi carrera he tenido la oportunidad de participar
      en diversas instancias para compartir mi conocimiento, aquí iré recopilando algunas de ellas.
    </p>

    <div class="row g-3">
      <div class="col-12 col-lg-6">
        <LiteYouTubeEmbed
          id="nlEHJXhqtQM"
          title="The Vueniverse"
        />
        <h3 class="text-primary text-center mt-2">
          The Vueniverse
        </h3>
      </div>
      <div class="col-12 col-lg-6">
        <LiteYouTubeEmbed
          id="2-mueX2lm6s"
          title="Innovadores al fin del mundo"
        />
        <h3 class="text-primary text-center mt-2">
          Innovadores al Fin del Mundo
        </h3>
      </div>
    </div>
  </section>
</template>
