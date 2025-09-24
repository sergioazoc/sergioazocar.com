import type { SitemapUrlInput } from '#sitemap/types'

export default defineSitemapEventHandler(async () => {
  const staticUrls: SitemapUrlInput[] = [
    {
      loc: '/es',
      priority: 1.0,
      changefreq: 'daily',
      alternatives: [
        { hreflang: 'en-US', href: '/en' },
        { hreflang: 'x-default', href: '/' },
      ],
    },
    {
      loc: '/en',
      priority: 1.0,
      changefreq: 'daily',
      alternatives: [
        { hreflang: 'es-ES', href: '/es' },
        { hreflang: 'x-default', href: '/' },
      ],
    },

    {
      loc: '/es/sobre-mi',
      priority: 0.9,
      changefreq: 'monthly',
      alternatives: [{ hreflang: 'en-US', href: '/en/about' }],
    },
    {
      loc: '/en/about',
      priority: 0.9,
      changefreq: 'monthly',
      alternatives: [{ hreflang: 'es-ES', href: '/es/sobre-mi' }],
    },

    {
      loc: '/es/mentoria',
      priority: 0.8,
      changefreq: 'monthly',
      alternatives: [{ hreflang: 'en-US', href: '/en/mentorship' }],
    },
    {
      loc: '/en/mentorship',
      priority: 0.8,
      changefreq: 'monthly',
      alternatives: [{ hreflang: 'es-ES', href: '/es/mentoria' }],
    },

    {
      loc: '/es/charlas',
      priority: 0.8,
      changefreq: 'monthly',
      alternatives: [{ hreflang: 'en-US', href: '/en/talks' }],
    },
    {
      loc: '/en/talks',
      priority: 0.8,
      changefreq: 'monthly',
      alternatives: [{ hreflang: 'es-ES', href: '/es/charlas' }],
    },

    {
      loc: '/es/blog',
      priority: 0.9,
      changefreq: 'weekly',
      alternatives: [{ hreflang: 'en-US', href: '/en/blog' }],
    },
    {
      loc: '/en/blog',
      priority: 0.9,
      changefreq: 'weekly',
      alternatives: [{ hreflang: 'es-ES', href: '/es/blog' }],
    },
  ]

  return staticUrls
})
