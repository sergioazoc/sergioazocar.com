// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-31',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-gtag',
    '@nuxt/eslint'
  ],

  colorMode: {
    classSuffix: ''
  },

  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google'
      },
    ]
  },

  gtag: {
    initMode: 'manual',
    // enabled: process.env.NODE_ENV === 'production',
    // id: process.env.GOOGLE_ANALYTICS_ID
    enabled: import.meta.env.PROD,
    id: import.meta.env.GOOGLE_ANALYTICS_ID
  },

  icon: {
    serverBundle: {
      collections: ['mdi']
    }
  },

  image: {
    densities: [1, 2],
    format: ['webp', 'jpg', 'jpeg', 'png']
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
})