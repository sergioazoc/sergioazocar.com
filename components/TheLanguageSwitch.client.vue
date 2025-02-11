<script setup lang="ts">
  const { locales, setLocale, locale: currentLocale } = useI18n()
  const cookieLocale = useCookieLocale()

  // Función para cambiar el idioma
  const changeLocale = async (code: 'es' | 'en') => {
    await setLocale(code) // Cambia el idioma en vue-i18n
    cookieLocale.value = code // Actualiza la cookie
  }
</script>

<template>
  <div class="flex gap-2 items-center">
    <Icon name="mdi:world-wide-web" />
    <template
      v-for="{ code } in locales"
      :key="code"
    >
      <button
        class="uppercase"
        :class="[
          code === currentLocale ? 'text-slate-400' : 'text-slate-600',
        ]"
        @click="changeLocale(code)"
      >
        {{ code }}
      </button>
    </template>
  </div>
</template>