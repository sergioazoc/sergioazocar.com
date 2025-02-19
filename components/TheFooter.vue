<script lang="ts" setup>
  const { t } = useI18n()

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
  <footer class="grid gap-4 px-4 py-10 bg-slate-800">
    <div class="flex justify-center items-center gap-3 mb-1">
      <NuxtLink
        v-for="link in socialLinks"
        :key="link.path"
        :to="link.path"
        target="_blank"
        class="text-slate-200 hover:text-slate-400 text-3xl"
      >
        <Icon :name="link.icon" />
      </NuxtLink>
    </div>
    <p class="text-center text-xs text-slate-500">
      {{ t('footer') }}
    </p>
  </footer>
</template>

<i18n lang="yaml">
  es:
    footer: "Hecho con Vue · Nuxt & Tailwind"
  en:
    footer: "Powered by Vue · Nuxt & Tailwind"
</i18n>
