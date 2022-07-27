<template>
  <section class="w-full">
    <h1 class="text-lime-300 text-4xl font-bold mb-11">
      <fa :icon="['fas', 'terminal']" class="block text-lime-300 mr-3" />
      <span class="animate-ping">|</span> Tools
    </h1>

    <div class="flex flex-col md:flex-row justify-between gap-6">
      <div class="w-2/6 flex flex-row md:flex-col gap-3">
        <NuxtLink to="/tools/character-counter" v-slot="{ isActive }">
          <div :class="{
            'text-violet-600 border-violet-600': isActive,
            'text-lime-300 border-lime-300': !isActive,
          }" class="inline-block border px-3 py-2">
            Character Counter
          </div>
        </NuxtLink>

        <NuxtLink to="/tools/word-counter" v-slot="{ isActive }">
          <div :class="{
            'text-violet-600 border-violet-600': isActive,
            'text-lime-300 border-lime-300': !isActive,
          }" class="inline-block border px-3 py-2">
            Word Counter
          </div>
        </NuxtLink>
      </div>
      <div class="w-full md:w-4/6">
        <NuxtPage />
      </div>
    </div>

  </section>
</template>