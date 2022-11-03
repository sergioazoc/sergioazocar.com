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
    <h1 class="text-primary">
      Sobre mi
    </h1>

    <p class="lead">
      Siempre me gustó pertenecer a comunidades, desde chico partí en
      un foro de
      Modding (hardmodding) dónde aprendí a amar la tecnología, desde entonces ayudo a fomentar y potenciar
      comunidades entorno a la tecnología, programación y emprendimiento 🙌
    </p>

    <div class="row g-3">
      <div class="col-12 col-lg-6">
        <div class="card bg-transparent border-secondary">
          <img class="card-img-top" src="/images/startupweekend.jpg" alt="Sergio Azócar">
          <div class="card-body bg-dark rounded-bottom">
            <p class="card-text">
              Coorganizador de <a
                href="https://www.facebook.com/swloslagos"
                class=""
                target="_blank"
                rel="noopener noreferrer"
              >Startup Weekend Los
                Lagos</a>, dónde
              enseñamos a crear una startup en 54 horas.
            </p>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6">
        <div class="card bg-transparent border-secondary">
          <img class="card-img-top" src="/images/devs&ops.jpg" alt="Sergio Azócar">
          <div class="card-body bg-dark rounded-bottom">
            <p class="card-text">
              Staff de la comunidad de <a
                href="https://www.facebook.com/devsopsLosLagos"
                class=""
                target="_blank"
                rel="noopener noreferrer"
              >Devs&Ops
                Los Lagos</a>, dónde
              organizamos eventos, meetups y networking para
              programadores de la región.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
