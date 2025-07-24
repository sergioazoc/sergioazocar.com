<script lang="ts" setup>
const { t } = useI18n()
const { menuLinks } = useMenuLinks()
const localePath = useLocalePath()

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="mt-4.5">
    <div
      class="mx-auto flex h-14 w-full items-center justify-between gap-12 rounded-full px-4 py-1 md:max-w-fit md:bg-neutral-900"
    >
      <NuxtLink :to="localePath('index')">
        <UAvatar src="/images/about/sergio-azocar.jpeg" />
      </NuxtLink>
      <UNavigationMenu
        orientation="horizontal"
        color="neutral"
        variant="link"
        :items="menuLinks"
        class="hidden w-full md:flex"
        :ui="{
          root: 'gap-12',
          list: 'gap-4',
          link: 'text-lg',
        }"
      >
        <template #language-switch>
          <TheLanguageSwitch />
        </template>
      </UNavigationMenu>

      <USlideover
        v-model:open="isOpen"
        class="md:hidden"
        :title="t('title')"
        :description="t('description')"
        :close="{ size: 'xl', color: 'neutral', variant: 'ghost' }"
        :ui="{
          title: 'text-2xl font-bold',
        }"
      >
        <UButton icon="lucide-menu" color="neutral" variant="subtle" size="xl" />

        <template #body>
          <div class="p-4">
            <nav class="flex flex-col items-center justify-center gap-4">
              <NuxtLink
                v-for="item in menuLinks[0]"
                :key="item.label"
                :to="item.to"
                variant="link"
                color="neutral"
                class="text-lg"
                @click="closeMenu"
              >
                {{ item.label }}
              </NuxtLink>
            </nav>

            <div class="mt-6 border-t border-neutral-600 pt-6">
              <TheLanguageSwitch class="justify-center" />
            </div>
          </div>
        </template>
      </USlideover>
    </div>
  </header>
</template>

<i18n lang="json">
{
  "es": {
    "title": "Menú",
    "description": "Accede a las secciones del sitio web y cambia el idioma."
  },
  "en": {
    "title": "Menu",
    "description": "Access the sections of the website and change the language."
  }
}
</i18n>
