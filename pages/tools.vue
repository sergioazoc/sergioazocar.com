<template>
  <section>
    <h1>
      Tools
    </h1>

    <div class="flex flex-col md:flex-row justify-between gap-6">
      <div class="w-2/6 flex flex-row md:flex-col gap-3">
        <NuxtLink v-slot="{ isActive }" to="/tools/character-counter">
          <div
            :class="{
              'text-violet-600 border-violet-600': isActive,
              'text-lime-300 border-lime-300': !isActive,
            }"
            class="inline-block border px-3 py-2"
          >
            Character Counter
          </div>
        </NuxtLink>

        <NuxtLink v-slot="{ isActive }" to="/tools/word-counter">
          <div
            :class="{
              'text-violet-600 border-violet-600': isActive,
              'text-lime-300 border-lime-300': !isActive,
            }"
            class="inline-block border px-3 py-2"
          >
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
