// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

  target: 'static',

  typescript: {
    shim: false
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxt/content'
  ],

  css: [
    '@/assets/styles/app.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
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
    '@nuxt/image-edge',
    '@nuxtjs/eslint-module'
  ]
})
