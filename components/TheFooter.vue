<script lang="ts" setup>
  const socialLinks = [
    {
      path: 'https://www.linkedin.com/in/sergio-azocar/',
      icon: 'mdi:linkedin'
    },
    {
      path: 'https://twitter.com/sergioazoc/',
      icon: 'mdi:twitter'
    },
    {
      path: 'https://github.com/sergioazoc/',
      icon: 'mdi:github'
    }
  ]
</script>

<template>
  <footer class="h-14 flex flex-col items-center justify-center">
    <div class="flex justify-center items-center gap-3 mb-1">
      <NuxtLink
        v-for="link in socialLinks"
        :key="link.path"
        :to="link.path"
        target="_blank"
        class="text-slate-400 text-lg"
      >
        <Icon :name="link.icon" />
      </NuxtLink>
    </div>
    <p class="text-center">
      Powered by Vue · Nuxt & Tailwind
    </p>
  </footer>
</template>
