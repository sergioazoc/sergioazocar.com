<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-transparent">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand">
        <img
          class="img-fluid rounded-circle border border-3 border-success"
          src="/assets/images/sergio-azocar.jpg"
          alt="Sergio Azócar"
        >
      </NuxtLink>

      <button
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
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <NuxtLink v-slot="{ isActive }" to="/about" class="nav-link">
              <span :class="{ 'active': isActive }">Sobre mi</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink v-slot="{ isActive }" to="/setup" class="nav-link">
              <span :class="{ 'active': isActive }">Setup</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink v-slot="{ isActive }" to="/talks" class="nav-link">
              <span :class="{ 'active': isActive }">Talks</span>
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
