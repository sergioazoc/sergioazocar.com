// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
  ],

  site: {
    url: 'https://www.sergioazocar.com',
    name: 'Sergio Azócar',
  },

  sitemap: {
    xsl: false,
    defaults: {
      changefreq: 'monthly',
      priority: 0.7,
    },
  },

  robots: {
    credits: false,
    allow: '/',
    sitemap: 'https://www.sergioazocar.com/sitemap.xml',
  },

  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        styles: ['normal', 'italic'],
        weights: [400, 600, 700],
        display: 'swap',
        preload: true,
      },
    ],
  },

  scripts: {
    registry: {
      googleAnalytics: {
        strategy: 'post-hydration',
      },
    },
  },

  i18n: {
    strategy: 'prefix',
    defaultLocale: 'es',
    locales: [
      {
        code: 'es',
        name: 'Español',
        language: 'es-ES',
        file: 'es.json',
      },
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
        file: 'en.json',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'en',
    },
    customRoutes: 'config',
    pages: {
      about: {
        es: '/sobre-mi',
        en: '/about',
      },
      blog: {
        es: '/blog',
        en: '/blog',
      },
      'blog/[slug]': {
        es: '/blog/[slug]',
        en: '/blog/[slug]',
      },
      mentorship: {
        es: '/mentoria',
        en: '/mentorship',
      },
      talks: {
        es: '/charlas',
        en: '/talks',
      },
    },
  },

  icon: {
    serverBundle: {
      collections: ['lucide'],
    },
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
      sizeLimitKb: 256,
    },
  },

  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'sergioazocar.com',
        owner: 'sergioazoc',
        url: 'https://github.com/sergioazoc/sergioazocar.com',
      },
    },
    build: {
      markdown: {
        highlight: {
          theme: 'material-theme-ocean',
        },
        toc: {
          depth: 3,
        },
      },
    },
  },

  image: {
    densities: [1, 2],
    format: ['webp', 'avif'],
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    prerender: {
      failOnError: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      scripts: {
        googleAnalytics: {
          id: process.env.NUXT_PUBLIC_SCRIPTS_GOOGLE_ANALYTICS_ID,
        },
      },
    },
  },

  ui: {
    colorMode: false,
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    viewTransition: true,
  },
})
