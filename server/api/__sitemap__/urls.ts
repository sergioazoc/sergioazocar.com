import type { SitemapUrlInput } from '#sitemap/types'

export default defineSitemapEventHandler(async (e) => {
  const staticUrls: SitemapUrlInput[] = [
    { loc: '/es', priority: 1.0, changefreq: 'daily' },
    { loc: '/en', priority: 1.0, changefreq: 'daily' },

    { loc: '/es/sobre-mi', priority: 0.9, changefreq: 'monthly' },
    { loc: '/en/about', priority: 0.9, changefreq: 'monthly' },

    { loc: '/es/charlas', priority: 0.8, changefreq: 'monthly' },
    { loc: '/en/talks', priority: 0.8, changefreq: 'monthly' },

    { loc: '/es/blog', priority: 0.9, changefreq: 'weekly' },
    { loc: '/en/blog', priority: 0.9, changefreq: 'weekly' },
  ]

  const blogUrls: SitemapUrlInput[] = []

  try {
    const blogPostsEs = await queryCollection(e, 'blog_es')
      .order('date', 'DESC')
      .select('date', 'path')
      .all()

    const blogPostsEn = await queryCollection(e, 'blog_en')
      .order('date', 'DESC')
      .select('date', 'path')
      .all()

    for (const post of blogPostsEs) {
      const loc = post.path
      blogUrls.push({
        loc,
        lastmod: post.date,
        priority: 0.7,
        changefreq: 'weekly',
      })
    }

    for (const post of blogPostsEn) {
      const loc = post.path
      blogUrls.push({
        loc,
        lastmod: post.date,
        priority: 0.7,
        changefreq: 'weekly',
      })
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  return [...staticUrls, ...blogUrls]
})
