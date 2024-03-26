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
  <header class="mt-10 mb-12">
    <div class="mb-5">
      <p class="text-xl">
        Hola <span class="animate-hello origin-[70%_70%] inline-block">👋</span>, soy
      </p>
      <h1 class="text-[clamp(3rem,5vw,4.5rem)] font-bold bg-clip-text text-transparent bg-gradient-to-r from-vue-green to-vue-purple">
        Sergio Azócar
      </h1>
    </div>

    <p class="text-xl text-slate-600 dark:text-slate-400 mb-5">
      Sr. Frontend Developer, trabajando como <strong>Frontend Lead</strong> en Talana.
    </p>

    <div class="flex gap-5">
      <ul class="text-xl">
        <li>💚 Vue Lover</li>
        <li>👾 Gamer</li>
        <li>💻 Geek</li>
      </ul>
      <ul class="text-xl">
        <li>📢 Speaker</li>
        <li>🧙‍♂ Mentor</li>
      </ul>
    </div>
  </header>

  <section>
    <div class="flex flex-wrap justify-center md:justify-end gap-5">
      <NuxtImg
        class="hover:scale-110 object-cover transition duration-500 sm:max-w-[300px] w-full"
        src="/images/index/jschile.jpeg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
      <NuxtImg
        class="hover:scale-110 object-cover transition duration-500 sm:max-w-[300px] w-full"
        src="/images/index/jsconf.jpg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
      <NuxtImg
        class="hover:scale-110 object-cover transition duration-500 sm:max-w-[300px] w-full"
        src="/images/index/techs-talk01.jpg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
      <NuxtImg
        class="hover:scale-110 object-cover transition duration-500 sm:max-w-[300px] w-full"
        src="/images/index/techs-talk02.jpeg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
      <NuxtImg
        class="hover:scale-110 object-cover transition duration-500 sm:max-w-[300px] w-full"
        src="/images/index/techschoolv2.jpg"
        alt="Sergio Azócar"
        placeholder
        loading="lazy"
      />
    </div>
  </section>
</template>
