// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-31',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-gtag',
    '@nuxt/eslint'
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

console.log(import.meta.env.NODE_ENV === 'production')