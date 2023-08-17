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
  <footer class="h-20 flex flex-col items-center justify-center">
    <div class="flex justify-center items-center gap-3 mb-1">
      <NuxtLink
        v-for="link in socialLinks"
        :key="link.path"
        :to="link.path"
        target="_blank"
        class="text-zinc-600 dark:text-zinc-400 text-lg"
      >
        <Icon :name="link.icon" />
      </NuxtLink>
    </div>
    <p class="text-center mb-2">
      Powered by Vue · Nuxt & Bootstrap
    </p>
  </footer>
</template>
