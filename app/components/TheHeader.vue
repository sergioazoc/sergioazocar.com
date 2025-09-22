<script lang="ts" setup>
const { menuLinks } = useMenuLinks()
const localePath = useLocalePath()
</script>

<template>
  <UHeader mode="slideover" class="">
    <template #title>
      <UAvatar
        as="NuxtLink"
        :to="localePath('index')"
        :aria-label="$t('goBackHome')"
        src="/images/about/sergio-azocar.jpeg"
        alt="Sergio Azocar"
      />
    </template>

    <template #right>
      <UNavigationMenu
        orientation="horizontal"
        color="neutral"
        variant="link"
        :items="menuLinks"
        class="hidden w-full lg:flex"
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
    </template>

    <template #body>
      <UNavigationMenu :items="menuLinks" orientation="vertical" class="-mx-2.5">
        <template #language-switch>
          <ClientOnly>
            <TheLanguageSwitch />
          </ClientOnly>
        </template>
      </UNavigationMenu>
    </template>
  </UHeader>
</template>
