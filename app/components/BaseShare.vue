<script setup lang="ts">
const { t } = useI18n()
const { share, isSupported } = useShare()
const route = useRoute()

const props = defineProps<{
  title: string
}>()

const baseUrl = 'https://sergioazocar.com'
const url = computed(() => `${baseUrl}${route.fullPath}`)
const trackedUrl = `${url.value}?utm_source=x&utm_medium=social&utm_campaign=blog`

const message = t('articleMessage', {
  title: props.title,
  url: trackedUrl,
})

const sharePost = () => {
  if (isSupported.value) {
    share({
      title: props.title,
      text: trackedUrl,
      url: url.value,
    }).catch((err) => console.error('Error al compartir:', err))
  }
}
</script>

<template>
  <ClientOnly>
    <div class="flex justify-center gap-4 px-4 py-8">
      <UButton
        v-if="isSupported"
        size="xl"
        icon="lucide-share-2"
        class="md:hidden"
        @click="sharePost"
      >
        {{ t('shareArticle') }}
      </UButton>

      <div class="hidden items-center gap-2 md:flex">
        <p>{{ t('shareOn') }}</p>
        <UButton
          icon="simple-icons-x"
          variant="subtle"
          :to="`https://x.com/intent/tweet?text=${encodeURIComponent(message)}`"
          target="_blank"
          rel="noopener noreferrer"
          class="flex size-10 items-center justify-center rounded-full text-lg"
        />
        <UButton
          icon="simple-icons-linkedin"
          variant="subtle"
          :to="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(trackedUrl)}`"
          target="_blank"
          rel="noopener noreferrer"
          class="flex size-10 items-center justify-center rounded-full text-lg"
        />
        <UButton
          icon="simple-icons-whatsapp"
          variant="subtle"
          :to="`https://wa.me/?text=${encodeURIComponent(message)}`"
          target="_blank"
          rel="noopener noreferrer"
          class="flex size-10 items-center justify-center rounded-full text-lg"
        />
      </div>
    </div>
  </ClientOnly>
</template>

<i18n lang="json">
{
  "es": {
    "shareArticle": "Compartir Artículo",
    "shareOn": "Compartir en:",
    "articleMessage": "Mira el artículo: \"{title}\" de Sergio Azócar en {url}"
  },
  "en": {
    "shareArticle": "Share Article",
    "shareOn": "Share on:",
    "articleMessage": "Check out the article: \"{title}\" by Sergio Azócar at {url}"
  }
}
</i18n>
