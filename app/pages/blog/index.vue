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
    .where('published', '=', true)
    .all()
})
</script>

<template>
  <div>
    <UPageHero title="Blog" :description="t('description')" />

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <UBlogPost
        v-for="post in posts"
        :key="post.path"
        :title="post.title"
        :image="post.img"
        :description="post.description"
        :date="formatDate(post.date)"
        :to="post.path"
        variant="soft"
      >
        <template #footer>
          <div class="flex flex-wrap items-center gap-2 px-6 pb-6">
            <p>Tags:</p>
            <UBadge v-for="tag in post.tags" :key="tag" variant="outline" class="rounded-full">{{
              tag
            }}</UBadge>
          </div>
        </template>
      </UBlogPost>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "description": "Aquí comparto mis conocimientos sobre desarrollo frontend, arquitectura de software y lecciones aprendidas al construir aplicaciones web en estos años."
  },
  "en": {
    "description": "Here I share my knowledge about frontend development, software architecture, and lessons learned while building web applications over the years."
  }
}
</i18n>
