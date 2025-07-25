<script setup lang="ts">
import type { Toc } from '@nuxt/content'

const { t } = useI18n()

const props = defineProps<{
  toc: Toc
}>()

const activeId = ref('')
const observer = ref<IntersectionObserver | null>(null)
const isScrollingProgrammatically = ref(false)
let scrollTimeout: NodeJS.Timeout | null = null

const scrollToHeading = (id: string) => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }

  isScrollingProgrammatically.value = true
  activeId.value = id

  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
  window.history.replaceState(null, '', `#${id}`)

  scrollTimeout = setTimeout(() => {
    isScrollingProgrammatically.value = false
  }, 700)
}

onMounted(() => {
  const headings = document.querySelectorAll('h2[id], h3[id], h4[id], h5[id], h6[id]')
  if (headings.length === 0) return

  observer.value = new IntersectionObserver(
    (entries) => {
      if (isScrollingProgrammatically.value) {
        return
      }

      const intersectingEntry = entries.find((entry) => entry.isIntersecting)
      if (intersectingEntry) {
        activeId.value = intersectingEntry.target.id
      }
    },
    {
      rootMargin: '-100px 0px -85% 0px',
      threshold: 0,
    },
  )

  headings.forEach((heading) => observer.value!.observe(heading))

  const hash = window.location.hash.slice(1)
  if (hash) {
    activeId.value = hash
  }
})

onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
})

const tocLinks = computed(() => props.toc?.links || [])
</script>

<template>
  <nav v-if="tocLinks.length">
    <p class="mb-4 border-b border-neutral-200 pb-2 font-semibold">
      {{ t('toc') }}
    </p>

    <ul class="space-y-1">
      <li
        v-for="link in tocLinks"
        :key="link.id"
        :class="{
          'ml-4': link.depth === 3,
          'ml-8': link.depth === 4,
        }"
      >
        <a
          :href="`#${link.id}`"
          :class="[
            'block rounded-md px-3 py-2 text-sm transition-all duration-200',
            'hover:translate-x-1 hover:bg-neutral-950',
            activeId === link.id
              ? 'bg-primary/10 text-primary border-primary font-semibold'
              : 'text-neutral-300',
          ]"
          @click.prevent="scrollToHeading(link.id)"
        >
          {{ link.text }}
        </a>

        <ul v-if="link.children?.length" class="ml-4 mt-1 space-y-1">
          <li v-for="child in link.children" :key="child.id">
            <a
              :href="`#${child.id}`"
              :class="[
                'block rounded px-3 py-2 text-xs transition-all duration-200',
                'hover:translate-x-1 hover:bg-neutral-950',
                activeId === child.id ? 'bg-primary/5 text-primary' : 'text-neutral-300',
              ]"
              @click.prevent="scrollToHeading(child.id)"
            >
              <span class="flex items-center gap-2">
                <span
                  :class="[
                    'h-1 w-1 rounded-full transition-colors',
                    activeId === child.id ? 'bg-primary' : 'bg-neutral-300',
                  ]"
                />
                {{ child.text }}
              </span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<i18n lang="json">
{
  "es": {
    "toc": "Tabla de Contenidos"
  },
  "en": {
    "toc": "Table of Contents"
  }
}
</i18n>
