// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@vueuse/nuxt'
  ],

  colorMode: {
    classSuffix: ''
  },

  runtimeConfig: {
    public: {
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  image: {
    densities: [1, 2],
    format: ['webp', 'jpg', 'jpeg', 'png']
  }
})
