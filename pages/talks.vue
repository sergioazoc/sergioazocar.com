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
    <h1>
      Talks
    </h1>

    <p class="text-slate-200 mb-8 text-xl md:text-2xl">
      A lo largo de mi carrera he tenido la oportunidad de participar
      en diversas instancias para compartir mi conocimiento, aquí iré recopilando algunas de ellas.
    </p>

    <div class="row">
      <div class="col">
        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/nlEHJXhqtQM" title="The Vueniverse" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
        <p class="text-lime-300 text-lg p-5">
          The Vueniverse
        </p>
      </div>
      <div class="col">
        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/2-mueX2lm6s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <p class="text-lime-300 text-lg p-5">
          Innovadores al Fin del Mundo
        </p>
      </div>
    </div>
  </section>
</template>
