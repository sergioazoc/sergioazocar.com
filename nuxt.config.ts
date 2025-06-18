import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
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

  sitemap: {},

  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        styles: ['normal', 'italic'],
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },

  scripts: {
    registry: {
      googleAnalytics: true,
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
      talks: {
        es: '/charlas',
        en: '/talks',
      },
    },
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  icon: {
    serverBundle: {
      collections: ['lucide'],
    },
    customCollections: [
      {
        prefix: 'logos',
        dir: './assets/logos',
      },
    ],
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
      sizeLimitKb: 256,
    },
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'material-theme-ocean',
          langs: [
            'angular-html',
            'angular-ts',
            'apache',
            'astro',
            'css',
            'diff',
            'dockerfile',
            'go',
            'graphql',
            'html',
            'http',
            'java',
            'javascript',
            'json',
            'jsx',
            'markdown',
            'mdc',
            'mdx',
            'nginx',
            'php',
            'postcss',
            'powershell',
            'python',
            'regexp',
            'ruby',
            'scss',
            'shellscript',
            'sql',
            'svelte',
            'ts-tags',
            'tsx',
            'typescript',
            'vue-html',
            'vue',
            'xml',
            'yaml',
          ],
        },
      },
    },
  },

  image: {
    densities: [1, 2],
    format: ['webp'],
  },

  css: ['~/assets/css/main.css'],

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
})
