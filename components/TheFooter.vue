<script lang="ts" setup>
  const socialLinks = [
    {
      path: 'https://www.linkedin.com/in/sergio-azocar/',
      icon: 'fa:linkedin'
    },
    {
      path: 'https://twitter.com/sergioazoc/',
      icon: 'fa:twitter'
    },
    {
      path: 'https://github.com/sergioazoc/',
      icon: 'fa:github'
    }
  ]
</script>

<template>
  <footer class="text-muted mt-3">
    <div class="d-flex justify-content-center align-items-center gap-3 mb-1">
      <NuxtLink
        v-for="link in socialLinks"
        :key="link.path"
        :to="link.path"
        target="_blank"
        class="text-reset fs-5"
      >
        <Icon :name="link.icon" />
      </NuxtLink>
    </div>
    <p class="text-center mb-2">
      Powered by Vue · Nuxt & Bootstrap
    </p>
  </footer>
</template>
