// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

  typescript: {
    shim: false
  },

  modules: [],

  css: [
    '@/assets/styles/app.scss'
  ],

  runtimeConfig: {
    public: {
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  alias: {
    '~bootstrap': 'bootstrap'
  },

  buildModules: [
    '@nuxtjs/eslint-module'
  ]

})
