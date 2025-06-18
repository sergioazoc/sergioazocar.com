<script lang="ts" setup>
const { menuLinks } = useMenuLinks()

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="mt-4.5">
    <div
      class="mx-auto flex h-14 w-full items-center justify-between gap-12 rounded-full px-4 py-1 sm:max-w-fit sm:bg-neutral-900"
    >
      <UAvatar src="/images/about/sergio-azocar.jpeg" />
      <UNavigationMenu
        orientation="horizontal"
        color="neutral"
        variant="link"
        :items="menuLinks"
        class="hidden w-full sm:flex"
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
        class="sm:hidden"
        title=""
        :close="{ size: 'xl', color: 'neutral', variant: 'ghost' }"
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
