import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/styles/app.scss'
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  }
})