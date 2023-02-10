<script lang="ts" setup>
  import { onClickOutside } from '@vueuse/core'

  const nuxtApp = useNuxtApp()
  const bootstrap = nuxtApp.$bootstrap
  const btnToggle = ref()
  const navMenu = ref()
  const navCollapse = ref()

  onMounted(() => {
    navCollapse.value = bootstrap.Collapse.getOrCreateInstance(navMenu.value, {
      toggle: false
    })

    onClickOutside(btnToggle, () => {
      navCollapse.value.hide()
    })
  })

  const menuLinks = [
    {
      path: '/blog',
      text: 'Blog'
    },
    {
      path: '/about',
      text: 'Sobre mi'
    },
    {
      path: '/setup',
      text: 'Equipo'
    },
    {
      path: '/talks',
      text: 'Charlas'
    }
  ]

  const socialLinks = [
    {
      path: 'https://www.linkedin.com/in/sergio-azocar/',
      icon: ['fab', 'linkedin']
    },
    {
      path: 'https://twitter.com/sergioazoc/',
      icon: ['fab', 'twitter']
    },
    {
      path: 'https://github.com/sergioazoc/',
      icon: ['fab', 'github']
    }
  ]
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-transparent">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand">
        <img
          class="img-fluid rounded-circle border border-3 border-primary mb-4"
          src="/images/sergio-azocar.jpg"
          alt="Sergio Azócar"
        >
      </NuxtLink>

      <button
        ref="btnToggle"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarSupportedContent" ref="navMenu" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li
            v-for="link in menuLinks"
            :key="link.path"
            class="nav-item"
          >
            <NuxtLink active-class="active" :to="link.path" class="nav-link">
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
        <ul class="navbar-nav">
          <NuxtLink
            v-for="link in socialLinks"
            :key="link.path"
            :to="link.path"
            target="_blank"
            class="nav-link"
          >
            <FaIcon :icon="link.icon" />
          </NuxtLink>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .img-fluid {
    width: 58px;
  }
</style>
