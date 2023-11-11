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
  <header class="mt-10 grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 mb-12">
    <div>
      <NuxtImg
        class="max-w-sm md:max-w-full w-full aspect-square md:aspect-video h-auto hover:scale-110 object-cover transition duration-500"
        src="/images/sergio-azocar.jpg"
        alt="Sergio Azócar"
      />
    </div>

    <section class="flex flex-col gap-5">
      <h1 class="text-4xl font-bold">
        Hola <span class="animate-hello origin-[70%_70%] inline-block">👋</span>, soy
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-vue-green to-vue-purple"
        >
          Sergio
        </span><br>
        Bienvenido a mi página
      </h1>
      <p class="text-lg text-slate-600 dark:text-slate-400">
        Actualmente como <strong>Frontend Lead</strong> en Talana.
      </p>
      <ul class="text-xl">
        <li>💛 Javascript Lover</li>
        <li>👾 Gamer / Geek</li>
        <li>🐶 Team</li>
      </ul>
    </section>
  </header>

  <section>
    <h2 class="text-center text-3xl mb-6">
      Algunas de mis aventuras
    </h2>

    <div class="flex flex-wrap justify-center gap-5">
      <NuxtImg
        class="hover:scale-110 object-cover transition duration-500 max-w-[300px] w-full"
        src="/images/index/jschile.jpeg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
      <NuxtImg
        class="hover:scale-110 object-cover transition duration-500 max-w-[300px] w-full"
        src="/images/index/jsconf.jpg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
      <NuxtImg
        class="hover:scale-110 object-cover transition duration-500 max-w-[300px] w-full"
        src="/images/index/techs-talk01.jpg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
      <NuxtImg
        class="hover:scale-110 object-cover transition duration-500 max-w-[300px] w-full"
        src="/images/index/techs-talk02.jpeg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
    </div>
  </section>
</template>
