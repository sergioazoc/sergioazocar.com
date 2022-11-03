// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

  target: 'static',

  typescript: {
    shim: false
  },

  modules: [
    '@vueuse/nuxt'
  ],

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
    '@nuxt/image-edge',
    '@nuxtjs/eslint-module'
  ],

  image: {
    // dir: 'assets/images'
    staticFilename: '[publicPath]/images/[name]-[hash][ext]'
  }

})
