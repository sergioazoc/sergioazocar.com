<script lang="ts" setup>
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
        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/nlEHJXhqtQM" title="The Vueniverse" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
        <h3 class="text-primary text-center mt-2">
          The Vueniverse
        </h3>
      </div>
      <div class="col-12 col-lg-6">
        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/2-mueX2lm6s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <h3 class="text-primary text-center mt-2">
          Innovadores al Fin del Mundo
        </h3>
      </div>
    </div>
  </section>
</template>
