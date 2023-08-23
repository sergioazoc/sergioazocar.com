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
    <BaseTitle>
      Sobre mi
    </BaseTitle>

    <p class="text-lg mb-5">
      Siempre me gustó pertenecer a comunidades, desde chico partí en
      un foro de
      Modding (hardmodding) dónde aprendí a amar la tecnología, desde entonces ayudo a fomentar y potenciar
      comunidades entorno a la tecnología, programación y emprendimiento 🙌
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="border-2 rounded-sm border-vue-purple dark:border-vue-green overflow-hidden">
        <img class="hover:scale-110 object-cover transition duration-500" src="/images/startupweekend.jpg" alt="Sergio Azócar">
        <p class="text-base p-3">
          Coorganizador de <a
            href="https://www.facebook.com/swloslagos"
            class="text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >Startup Weekend Los
            Lagos</a>, dónde
          enseñamos a crear una startup en 54 horas.
        </p>
      </div>

      <div class="border-2 rounded-sm border-vue-purple dark:border-vue-green overflow-hidden">
        <img class="hover:scale-110 object-cover transition duration-500" src="/images/devs&ops.jpg" alt="Sergio Azócar">
        <p class="text-base p-3">
          Staff de la comunidad de <a
            href="https://www.linkedin.com/company/techs-los-lagos"
            class="text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >Tech's
            Los Lagos</a>, dónde
          organizamos eventos, meetups y networking para
          programadores de la región.
        </p>
      </div>
    </div>
  </section>
</template>
