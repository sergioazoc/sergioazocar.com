export default defineNuxtConfig({

  typescript: {
    shim: false
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxt/image-edge'
  ],

  css: [
    '@/assets/styles/app.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  runtimeConfig: {
    public: {
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
    }
  }

})
