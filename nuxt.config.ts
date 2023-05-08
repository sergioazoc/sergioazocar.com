export default defineNuxtConfig({

  typescript: {
    shim: false
  },

  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    'nuxt-icon'
  ],

  css: [
    '@/assets/styles/app.scss'
  ],

  runtimeConfig: {
    public: {
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
    }
  }

})
