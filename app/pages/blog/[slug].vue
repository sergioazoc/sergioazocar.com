<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, t } = useI18n()

// Usar la ruta actual como clave y como path de búsqueda
const dataKey = computed(() => `blog-post-${locale.value}-${route.path}`)

const { data: post } = await useAsyncData(
  dataKey.value,
  async () => {
    const collection = ('blog_' + locale.value) as keyof Collections
    // Buscar por el path público que ya viene de Content (ej: /es/blog/mi-post)
    return await queryCollection(collection).path(route.path).first()
  },
  {
    watch: [locale, () => route.path],
  },
)

useSeoMeta({
  title: post?.value?.title,
  description: post?.value?.description,
  ogTitle: post?.value?.title,
  ogDescription: post?.value?.description,
  ogImage: `https://www.sergioazocar.com${post?.value?.img}`,
  twitterCard: 'summary_large_image',
  twitterTitle: post?.value?.title,
  twitterDescription: post?.value?.description,
  twitterImage: `https://www.sergioazocar.com${post?.value?.img}`,
})
</script>

<template>
  <div>
    <template v-if="post">
      <UPageHero :title="post.title" :description="post.description" />

      <ClientOnly>
        <BaseShare :title="post.title" />
      </ClientOnly>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <article class="lg:col-span-2">
          <UCard>
            <template #header>
              <NuxtImg
                :alt="post.title"
                :src="post.img"
                class="w-full rounded-lg"
                fetchpriority="high"
                loading="eager"
                preload
                quality="85"
                sizes="sm:100vw md:80vw lg:800px"
              />
            </template>
            <div class="writing">
              <ContentRenderer :value="post" class="" />
            </div>
          </UCard>
        </article>

        <aside class="sticky top-4 hidden h-fit lg:col-span-1 lg:block">
          <UCard>
            <UContentToc
              :links="post?.body?.toc?.links"
              :ui="{
                container: 'lg:py-0',
              }"
            />
          </UCard>
        </aside>
      </div>

      <ClientOnly>
        <BaseShare :title="post.title" />
      </ClientOnly>
    </template>

    <template v-else>
      <UPageHero :title="t('pageNotFound')" :description="t('oopsContentNotExist')" />

      <UButton to="/" variant="subtle" class="mx-auto block w-fit">
        {{ t('goBackHome') }}
      </UButton>
    </template>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "pageNotFound": "Página No Encontrada",
    "oopsContentNotExist": "¡Vaya! El contenido que buscas no existe.",
    "goBackHome": "Volver a Inicio"
  },
  "en": {
    "pageNotFound": "Page Not Found",
    "oopsContentNotExist": "Oops! The content you're looking for doesn't exist.",
    "goBackHome": "Go back home"
  }
}
</i18n>
