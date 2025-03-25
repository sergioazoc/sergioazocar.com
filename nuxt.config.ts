import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    'nuxt-gtag',
  ],

  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google'
      },
    ]
  },

  gtag: {
    enabled: import.meta.env.NODE_ENV === 'production',
    id: import.meta.env.GTAG_ID
  },

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'es',
    locales: [
      {
        code: 'es',
        name: 'Español'
      },
      {
        code: 'en',
        name: 'English'
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'en'
    }
  },

  icon: {
    serverBundle: {
      collections: ['mdi']
    },
    customCollections: [
      {
        prefix: 'logos',
        dir: './assets/logos'
      },
    ],
    clientBundle: {
      scan: true,
      includeCustomCollections: true, 
      sizeLimitKb: 256,
    },
  },

  image: {
    densities: [1, 2],
    format: ['webp']
  },

  css: ['~/assets/css/main.css'],
  
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})