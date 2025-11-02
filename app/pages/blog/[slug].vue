<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, t } = useI18n()

const dataKey = `blog-post-${route.params.slug}-${locale.value}`

const { data: post } = await useAsyncData(
  dataKey,
  async () => {
    const collection = ('blog_' + locale.value) as keyof Collections
    return await queryCollection(collection).path(route.path).first()
  },
  {
    server: true
  },
)

const { data: surround } = await useAsyncData(`${route.params.slug}-surround-${locale.value}`, async () => {
  return queryCollectionItemSurroundings(
    ('blog_' + locale.value) as keyof Collections,
    route.path,
    {
      fields: ['description'],
    },
  )
})

useSeoMeta({
  title: post?.value?.title,
  description: post?.value?.description,
  ogTitle: post?.value?.title,
  ogDescription: post?.value?.description,
  ogImage: `https://sergioazocar.com${post?.value?.img}`,
  twitterCard: 'summary_large_image',
  twitterTitle: post?.value?.title,
  twitterDescription: post?.value?.description,
  twitterImage: `https://sergioazocar.com${post?.value?.img}`,
})
</script>

<template>
  <div>
    <template v-if="post">
      <UPageHero :title="post.title" :description="post.description" />

      <UPage>
        <ClientOnly>
          <BaseShare :title="post.title" />
        </ClientOnly>

        <article>
          <UPageCard
            variant="subtle"
            :spotlight="true"
            spotlight-color="primary"
            :ui="{
              header: 'w-full',
            }"
          >
            <template #header>
              <NuxtImg
                :alt="post.title"
                :src="post.img"
                class="size-full rounded-lg object-cover"
                fetchpriority="high"
                loading="eager"
                preload
                quality="85"
                sizes="sm:100vw md:80vw lg:800px"
              />
            </template>

            <template #body>
              <div class="writing">
                <ContentRenderer :value="post" class="" />
              </div>
            </template>
          </UPageCard>
        </article>

        <template #right>
          <UContentToc :title="t('toc-title')" :highlight="true" :links="post?.body?.toc?.links" />
        </template>

        <ClientOnly>
          <BaseShare :title="post.title" />
        </ClientOnly>
      </UPage>

      <USeparator icon="lucide-chevrons-left-right-ellipsis" class="mb-8" />

      <UContentSurround :surround="surround as any" />
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
    "toc-title": "Tabla de contenidos",
    "pageNotFound": "Página No Encontrada",
    "oopsContentNotExist": "¡Vaya! El contenido que buscas no existe.",
    "goBackHome": "Volver a Inicio"
  },
  "en": {
    "toc-title": "Table of Contents",
    "pageNotFound": "Page Not Found",
    "oopsContentNotExist": "Oops! The content you're looking for doesn't exist.",
    "goBackHome": "Go back home"
  }
}
</i18n>
