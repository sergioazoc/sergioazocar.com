<script lang="ts" setup>
  import { onClickOutside } from '@vueuse/core'

  const menu = ref()
  const showMenu = ref(false)

  const menuLinks = [
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
  <nav
    ref="menu"
    class="flex flex-wrap justify-between items-center gap-5"
  >
    <div class="flex items-center gap-5">
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
      <!-- <span class="text-2xl font-semibold">Sergio Azócar</span> -->
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

    <div
      id="navbar-default"
      class="w-full sm:block sm:w-auto"
      :class="{ hidden: !showMenu }"
    >
      <ul
        class="font-medium flex items-center flex-col mx-3 p-4 gap-2 sm:p-0 border rounded-lg sm:flex-row sm:space-x-8 sm:mt-0 sm:border-0 bg-slate-800 sm:bg-transparent border-slate-700"
      >
        <li
          v-for="link in menuLinks"
          :key="link.path"
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
      </ul>
    </div>
  </nav>
</template>
