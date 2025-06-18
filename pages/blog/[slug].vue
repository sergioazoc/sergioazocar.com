<script setup lang="ts">
import { withLeadingSlash } from 'ufo'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const router = useRouter()
const { share, isSupported: isShareSupported } = useShare()

const slug = computed(() => withLeadingSlash(`blog-${String(route.params.slug)}-${locale.value}`))

const { data: post } = await useAsyncData(slug.value, async () => {
  return queryCollection(`blog_${locale.value}`).where('path', '=', route.path).first()
})

watch(
  () => locale.value,
  (newLocale) => {
    router.push(localePath('/blog', newLocale))
  },
)

const sharePost = () => {
  if (isShareSupported.value && post.value) {
    share({
      title: post.value.title,
      text: post.value.description,
      url: window.location.href,
    }).catch((err) => console.error('Error al compartir:', err))
  }
}
</script>

<template>
  <div>
    <template v-if="post">
      <BaseHero :title="post.title" :description="post.description" />

      <div class="">
        <UCard>
          <div class="writing">
            <ContentRenderer :value="post" class="" />
          </div>

          <ClientOnly>
            <UButton v-if="isShareSupported" icon="lucide-share-2" class="mt-4" @click="sharePost">
              {{ t('shareArticle') }}
            </UButton>
          </ClientOnly>
        </UCard>
      </div>
    </template>
    <template v-else>
      <BaseHero :title="t('pageNotFound')" :description="t('oopsContentNotExist')" />

      <UButton to="/" variant="subtle" class="mx-auto block w-fit">
        {{ t('goBackHome') }}
      </UButton>
    </template>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "shareArticle": "Compartir Artículo",
    "pageNotFound": "Página No Encontrada",
    "oopsContentNotExist": "¡Vaya! El contenido que buscas no existe.",
    "goBackHome": "Volver a Inicio"
  },
  "en": {
    "shareArticle": "Share Article",
    "pageNotFound": "Page Not Found",
    "oopsContentNotExist": "Oops! The content you're looking for doesn't exist.",
    "goBackHome": "Go back home"
  }
}
</i18n>
