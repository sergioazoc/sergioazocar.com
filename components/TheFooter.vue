<script lang="ts" setup>
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
  <footer class="text-muted">
    <div class="d-flex justify-content-center align-items-center gap-3">
      <NuxtLink
        v-for="link in socialLinks"
        :key="link.path"
        :to="link.path"
        target="_blank"
        class="text-reset fs-5"
      >
        <FaIcon :icon="link.icon" />
      </NuxtLink>
    </div>
    <p class="text-center mb-0">
      Powered by Vue · Nuxt & Bootstrap
    </p>
  </footer>
</template>
