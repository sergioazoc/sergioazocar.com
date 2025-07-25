<script lang="ts" setup>
const { t } = useI18n()

const { menuLinks } = useMenuLinks()

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
  <footer class="grid gap-4 bg-slate-900 px-4 py-10">
    <div
      class="mx-auto mb-4 grid w-full max-w-7xl gap-8 border-b border-neutral-700 pb-8 lg:grid-cols-4 xl:px-4"
    >
      <div class="md:col-span-2">
        <div class="mb-4 flex items-center gap-4">
          <UAvatar src="/images/about/sergio-azocar.jpeg" alt="Sergio Azócar" />
          <p class="text-xl font-bold">Sergio Azócar</p>
        </div>
        <p class="lg:max-w-md">{{ t('description') }}</p>
      </div>

      <div>
        <p class="mb-4 font-semibold">{{ t('quick-links') }}</p>
        <nav class="flex flex-col gap-2">
          <NuxtLink
            v-for="item in menuLinks[0]"
            :key="item.label"
            :to="item.to"
            class="text-md p-0 text-neutral-400"
            exact-active-class="!text-neutral-50"
            :aria-label="`${item.label} link`"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>

      <div>
        <p class="mb-4 font-semibold">{{ t('connect') }}</p>
        <div class="flex items-center gap-4">
          <NuxtLink
            v-for="link in socialLinks"
            :key="link.path"
            :to="link.path"
            target="_blank"
            class="text-2xl text-slate-200 hover:text-slate-400"
            :aria-label="`${link.path} link`"
          >
            <UIcon :name="link.icon" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <p class="text-center text-sm text-slate-300">
      {{ t('footer') }}
    </p>
  </footer>
</template>

<i18n lang="json">
{
  "es": {
    "description": "Vue Frontend Developer Senior apasionado por crear experiencias de usuario excepcionales y compartir conocimientos con la comunidad.",
    "connect": "Conectar",
    "quick-links": "Enlaces rápidos",
    "footer": "Hecho con Vue · Nuxt & TailwindCSS"
  },
  "en": {
    "description": "Vue Frontend Developer Senior passionate about creating exceptional user experiences and sharing knowledge with the community.",
    "connect": "Connect",
    "quick-links": "Quick Links",
    "footer": "Powered by Vue · Nuxt & TailwindCSS"
  }
}
</i18n>
