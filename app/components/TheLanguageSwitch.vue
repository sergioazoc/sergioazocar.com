<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale: currentLocale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const route = useRoute()

type LocaleCode = 'en' | 'es'
type LinksMap = Record<LocaleCode, string>

const codes = computed<LocaleCode[]>(() => {
  const list = (Array.isArray(locales.value) ? locales.value : []) as Array<
    string | { code: string }
  >
  const arr = list
    .map((l) => (typeof l === 'string' ? l : l.code))
    .filter((c): c is LocaleCode => c === 'en' || c === 'es')
  return arr
})

const linksByCode = ref<Partial<LinksMap>>({})
const isBlogPostRoute = computed(() => /\/blog\//.test(route.path))

const resolveLinks = async () => {
  const defaultsEntries = codes.value.map((code) => [code, switchLocalePath(code)] as const)
  const defaults = Object.fromEntries(defaultsEntries) as LinksMap

  if (!isBlogPostRoute.value) {
    linksByCode.value = defaults
    return
  }

  try {
    const currentKey = ('blog_' + currentLocale.value) as keyof Collections
    const current = await queryCollection(currentKey).path(route.path).first()
    const union = (current?.union as string | undefined) || undefined

    if (!union) {
      linksByCode.value = Object.fromEntries(
        codes.value.map((code) => [code, localePath('/blog', code)]),
      ) as LinksMap
      return
    }

    const resolved = await Promise.all(
      codes.value.map(async (code) => {
        try {
          const key = ('blog_' + code) as keyof Collections
          const match = await queryCollection(key).where('union', '=', union).first()
          return [code, match?.path || localePath('/blog', code)] as const
        } catch {
          return [code, localePath('/blog', code)] as const
        }
      }),
    )

    linksByCode.value = Object.fromEntries(resolved) as LinksMap
  } catch {
    linksByCode.value = defaults
  }
}

watch(
  [() => route.path, () => currentLocale.value],
  () => {
    resolveLinks()
  },
  { immediate: true },
)
</script>

<template>
  <div class="flex items-center gap-2">
    <UIcon name="lucide-languages" />
    <NuxtLink
      v-for="{ code } in locales"
      :key="code"
      class="uppercase"
      :aria-label="`${code} switch`"
      :class="[code === currentLocale ? 'text-neutral-300' : 'text-neutral-500']"
      :to="(linksByCode[code as any] || switchLocalePath(code as any)) as string"
    >
      {{ code }}
    </NuxtLink>
  </div>
</template>
