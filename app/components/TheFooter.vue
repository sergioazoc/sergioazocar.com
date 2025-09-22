<script lang="ts" setup>
const { t } = useI18n()

const socialLinks = [
  {
    path: 'https://www.linkedin.com/in/sergio-azocar',
    icon: 'simple-icons-linkedin',
    name: 'linkedin',
  },
  {
    path: 'https://www.instagram.com/sergioazoc',
    icon: 'simple-icons-instagram',
    name: 'instagram',
  },
  {
    path: 'https://github.com/sergioazoc',
    icon: 'simple-icons-github',
    name: 'github',
  },
  {
    path: 'https://x.com/sergioazoc',
    icon: 'simple-icons-x',
    name: 'x',
  },
]
</script>

<template>
  <UFooter class="pt-8">
    <template #left>
      <div class="md:col-span-2">
        <div class="mb-4 flex items-center gap-4">
          <UUser
            name="Sergio Azócar"
            :description="t('user-description')"
            :avatar="{
              src: '/images/about/sergio-azocar.jpeg',
              icon: 'i-lucide-image',
            }"
          />
        </div>
        <p class="lg:max-w-md">{{ t('description') }}</p>
      </div>
    </template>

    <template #right>
      <div class="flex items-center gap-2">
        <UButton
          v-for="link in socialLinks"
          :key="link.path"
          :to="link.path"
          target="_blank"
          variant="ghost"
          color="neutral"
          :aria-label="`${link.path} link`"
          :icon="link.icon"
          size="xl"
        />
      </div>
    </template>

    <template #bottom>
      <p class="text-center text-sm text-slate-300">
        {{ t('footer') }}
      </p>
    </template>
  </UFooter>
</template>

<i18n lang="json">
{
  "es": {
    "user-description": "Frontend Developer Senior",
    "description": "Apasionado por crear experiencias de usuario excepcionales y compartir conocimientos con la comunidad.",
    "footer": "Hecho con Vue · Nuxt & TailwindCSS"
  },
  "en": {
    "user-description": "Senior Frontend Developer",
    "description": "Passionate about creating exceptional user experiences and sharing knowledge with the community.",
    "footer": "Powered by Vue · Nuxt & TailwindCSS"
  }
}
</i18n>
