<script lang="ts" setup>
  import { onClickOutside } from '@vueuse/core'

  const menu = ref()
  const showMenu = ref(false)

  const menuLinks = [
    // {
    //   path: '/blog',
    //   text: 'Blog'
    // },
    {
      path: '/about',
      text: 'Sobre mi'
    },
    {
      path: '/setup',
      text: 'Setup'
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
  <nav ref="menu" class="flex flex-wrap justify-between items-center gap-5">
    <NuxtLink to="/" @click="closeMenu">
      <img
        class="rounded-full h-14 w-14 border-vue-purple dark:border-vue-green border-[3px]"
        src="/images/sergio-azocar.jpg"
        alt="Sergio Azócar"
      >
    </NuxtLink>

    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg sm:hidden hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
      aria-controls="navbar-default"
      aria-expanded="false"
      @click="toggleMenu"
    >
      <span class="sr-only">Open main menu</span>
      <Icon name="mdi:menu" size="34" />
    </button>

    <div id="navbar-default" class="w-full sm:block sm:w-auto" :class="{ hidden: !showMenu }">
      <ul class="font-medium flex items-center flex-col mx-3 p-4 gap-2 sm:p-0 border border-slate-100 rounded-lg bg-slate-300 sm:flex-row sm:space-x-8 sm:mt-0 sm:border-0 sm:bg-transparent dark:bg-slate-800 sm:dark:bg-transparent dark:border-slate-700">
        <li
          v-for="link in menuLinks"
          :key="link.path"
          class="w-full"
          @click="closeMenu"
        >
          <NuxtLink active-class="!text-vue-purple dark:!text-vue-green" :to="link.path" class="block text-slate-800 sm:border-0 hover:text-vue-purple sm:p-0 dark:text-slate-50 dark:hover:text-vue-green hover:bg-slate-800 dark:hover:bg-slate-600 sm:hover:bg-transparent dark:sm:hover:bg-transparent w-full text-center rounded-md p-1 sm:whitespace-nowrap">
            {{ link.text }}
          </NuxtLink>
        </li>
        <li>
          <TheDarkMode />
        </li>
      </ul>
    </div>
  </nav>
</template>
