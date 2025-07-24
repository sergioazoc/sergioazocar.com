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
      <NuxtLink :to="localePath('index')" :aria-label="$t('goBackHome')">
        <UAvatar src="/images/about/sergio-azocar.jpeg" alt="Sergio Azocar" />
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
          <ClientOnly>
            <TheLanguageSwitch />
          </ClientOnly>
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
        <UButton
          icon="lucide-menu"
          color="neutral"
          variant="subtle"
          size="xl"
          :aria-label="t('openMenu')"
        />

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
                :aria-label="`${item.label} link`"
                @click="closeMenu"
              >
                {{ item.label }}
              </NuxtLink>
            </nav>

            <div class="mt-6 border-t border-neutral-600 pt-6">
              <ClientOnly>
                <TheLanguageSwitch class="justify-center" />
              </ClientOnly>
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
    "description": "Accede a las secciones del sitio web y cambia el idioma.",
    "openMenu": "Abrir menú de navegación"
  },
  "en": {
    "title": "Menu",
    "description": "Access the sections of the website and change the language.",
    "openMenu": "Open navigation menu"
  }
}
</i18n>
