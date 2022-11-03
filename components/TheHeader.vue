<script lang="ts" setup>
  import { onClickOutside } from '@vueuse/core'

  const nuxtApp = useNuxtApp()
  const bootstrap = nuxtApp.$bootstrap
  const btnToggle = ref(null)
  const navMenu = ref(null)
  const navCollapse = ref(null)

  onMounted(() => {
    navCollapse.value = bootstrap.Collapse.getOrCreateInstance(navMenu.value, {
      toggle: false
    })

    onClickOutside(btnToggle, () => {
      navCollapse.value.hide()
    })
  })
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-transparent">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand">
        <img
          class="img-fluid rounded-circle border border-3 border-primary mb-4"
          src="images/sergio-azocar.jpg"
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
          <li class="nav-item">
            <NuxtLink active-class="active" to="/about" class="nav-link">
              Sobre mi
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink active-class="active" to="/setup" class="nav-link">
              Equipo
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink active-class="active" to="/talks" class="nav-link">
              Charlas
            </NuxtLink>
          </li>
        </ul>
        <ul class="navbar-nav">
          <NuxtLink to="https://www.linkedin.com/in/sergio-azocar/" target="_blank" class="nav-link">
            LinkedIn
          </NuxtLink>
          <NuxtLink to="https://twitter.com/sergioazoc/" target="_blank" class="nav-link">
            Twitter
          </NuxtLink>
          <NuxtLink to="https://github.com/sergioazoc/" target="_blank" class="nav-link">
            Github
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
