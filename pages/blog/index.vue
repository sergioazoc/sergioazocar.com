<script setup lang="ts">
const { locale, t } = useI18n()

const parseDate = (dateString: string) => {
  const [day, month, year] = dateString.split('/')
  return new Date(parseInt(year!), parseInt(month!) - 1, parseInt(day!))
}

const formatDate = (dateString: string) => {
  const date = parseDate(dateString)
  return new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

const { data: posts } = await useAsyncData(`blog-posts-${locale.value}`, () => {
  return queryCollection(`blog_${locale.value}`)
    .order('date', 'DESC')
    .select('title', 'description', 'date', 'path', 'tags', 'img')
    .all()
})
</script>

<template>
  <div>
    <BaseHero title="Blog" :description="t('description')" />

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <NuxtLink v-for="post in posts" :key="post.path" :to="post.path">
        <ClientOnly>
          <UCard
            :ui="{
              root: 'p-0 sm:p-0 grid-rows-[auto_1fr_auto]',
            }"
          >
            <template #header>
              <NuxtImg :src="post.img" class="rounded-t-lg" :alt="post.title" />
            </template>

            <div class="grid h-full gap-2 px-6">
              <p class="mb-2 text-sm text-neutral-400">{{ formatDate(post.date) }}</p>
              <h2 class="text-xl font-bold">{{ post.title }}</h2>
              <p class="ttext-lg">{{ post.description }}</p>
            </div>

            <template #footer>
              <div class="flex flex-wrap items-center gap-2 px-6 py-4">
                <p>Tags:</p>
                <UBadge
                  v-for="tag in post.tags"
                  :key="tag"
                  variant="outline"
                  class="rounded-full"
                  >{{ tag }}</UBadge
                >
              </div>
            </template>
          </UCard>
        </ClientOnly>
      </NuxtLink>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "description": "Compartiendo conocimientos sobre Vue.js, desarrollo frontend moderno y lecciones aprendidas al construir aplicaciones web escalables."
  },
  "en": {
    "description": "Sharing insights about Vue.js, modern frontend development, and lessons learned from building scalable web applications."
  }
}
</i18n>
