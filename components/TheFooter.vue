<script lang="ts" setup>
const { t } = useI18n()

const { menuLinks } = useMenuLinks()

const socialLinks = [
  {
    path: 'https://www.linkedin.com/in/sergio-azocar',
    icon: 'simple-icons-linkedin',
  },
  {
    path: 'https://www.instagram.com/sergioazoc',
    icon: 'simple-icons-instagram',
  },
  {
    path: 'https://github.com/sergioazoc',
    icon: 'simple-icons-github',
  },
  {
    path: 'https://x.com/sergioazoc',
    icon: 'simple-icons-x',
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
          <UAvatar src="/images/about/sergio-azocar.jpeg" />
          <h3 class="text-xl font-bold">Sergio Azócar</h3>
        </div>
        <p class="lg:max-w-md">{{ t('description') }}</p>
      </div>

      <div>
        <h3 class="mb-4 font-semibold">{{ t('quick-links') }}</h3>
        <nav class="flex flex-col gap-2">
          <NuxtLink
            v-for="item in menuLinks[0]"
            :key="item.label"
            :to="item.to"
            class="text-md p-0 text-neutral-500"
            exact-active-class="!text-neutral-300"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>

      <div>
        <h3 class="mb-4 font-semibold">{{ t('connect') }}</h3>
        <div class="flex items-center gap-4">
          <NuxtLink
            v-for="link in socialLinks"
            :key="link.path"
            :to="link.path"
            target="_blank"
            class="text-2xl text-slate-200 hover:text-slate-400"
          >
            <UIcon :name="link.icon" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <p class="text-center text-sm text-slate-500">
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
