<script lang="ts" setup>
  import { onClickOutside } from '@vueuse/core'

  const menu = ref()
  const showMenu = ref(false)

  const menuLinks = [
    {
      path: '/',
      text: 'Inicio'
    },
    {
      path: '/about',
      text: 'Sobre mi'
    },
    {
      path: '/talks',
      text: 'Charlas'
    }
  ]

  const toggleMenu = () => {
    showMenu.value = !showMenu.value
  }

  const closeMenu = () => {
    showMenu.value = false
  }

  onClickOutside(menu, () => {
    closeMenu()
  })

</script>

<template>
  <div
    ref="menu"
    class="flex flex-wrap justify-between items-center gap-5 mt-6"
  >
    <div class="flex items-center gap-5 sm:hidden">
      <NuxtLink
        to="/"
        @click="closeMenu"
      >
        <NuxtImg
          class="rounded-full max-h-16 max-w-16 border-vue-green border-[3px]"
          src="/images/sergio-azocar.jpeg"
          alt="Sergio Azócar"
        />
      </NuxtLink>
    </div>

    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg sm:hidden focus:outline-none focus:ring-2 text-slate-400 hover:bg-slate-700 focus:ring-slate-600"
      aria-controls="navbar-default"
      aria-expanded="false"
      @click="toggleMenu"
    >
      <span class="sr-only">Open main menu</span>
      <Icon
        name="mdi:menu"
        size="34"
      />
    </button>

    <nav
      id="navbar-default"
      class="w-full sm:block sm:w-auto sm:mx-auto"
      :class="{ hidden: !showMenu }"
    >
      <ul
        class="font-medium flex items-center flex-col mx-3 p-4 gap-2 sm:py-2 sm:px-8 border rounded-xl sm:rounded-full sm:flex-row sm:space-x-8 bg-slate-900 border-slate-700"
      >
        <li class="hidden sm:block">
          <NuxtLink
            to="/"
            @click="closeMenu"
          >
            <NuxtImg
              class="rounded-full max-h-10 max-w-10 border-vue-green border-[2px]"
              src="/images/sergio-azocar.jpeg"
              alt="Sergio Azócar"
            />
          </NuxtLink>
        </li>
        <template
          v-for="(link, index) in menuLinks"
          :key="link.path"
        >
          <li
            class="w-full"
            @click="closeMenu"
          >
            <NuxtLink
              active-class="!text-vue-green"
              :to="link.path"
              class="block sm:border-0 sm:p-0 text-slate-50 hover:text-vue-green hover:bg-slate-600 sm:hover:bg-transparent w-full text-center rounded-md p-1 sm:whitespace-nowrap"
            >
              {{ link.text }}
            </NuxtLink>
          </li>
          <li
            v-if="index !== menuLinks.length - 1"
            class="hidden sm:block font-black text-xl"
          >
            ·
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>
