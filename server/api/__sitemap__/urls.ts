export default defineSitemapEventHandler(async (e) => {
  // URLs estáticas con prioridades
  const staticUrls = [
    // Páginas principales
    { loc: '/es', priority: 1.0, changefreq: 'daily' },
    { loc: '/en', priority: 1.0, changefreq: 'daily' },

    // Páginas sobre mí
    { loc: '/es/sobre-mi', priority: 0.9, changefreq: 'monthly' },
    { loc: '/en/about', priority: 0.9, changefreq: 'monthly' },

    // Páginas de charlas
    { loc: '/es/charlas', priority: 0.8, changefreq: 'monthly' },
    { loc: '/en/talks', priority: 0.8, changefreq: 'monthly' },

    // Blog principal
    { loc: '/es/blog', priority: 0.9, changefreq: 'weekly' },
    { loc: '/en/blog', priority: 0.9, changefreq: 'weekly' },
  ]

  // Obtener posts del blog dinámicamente
  type BlogUrl = {
    loc: string
    lastmod: string
    priority: number
    changefreq: string
  }
  const blogUrls: BlogUrl[] = []

  try {
    // Posts en español
    const esBlogs = await serverQueryContent(e, '/es/blog').find()
    esBlogs.forEach((post) => {
      if (post._path) {
        blogUrls.push({
          loc: post._path,
          lastmod: post.date
            ? new Date(post.date.split('/').reverse().join('-')).toISOString()
            : new Date().toISOString(),
          priority: 0.7,
          changefreq: 'monthly',
        })
      }
    })

    // Posts en inglés
    const enBlogs = await serverQueryContent(e, '/en/blog').find()
    enBlogs.forEach((post) => {
      if (post._path) {
        blogUrls.push({
          loc: post._path,
          lastmod: post.date
            ? new Date(post.date.split('/').reverse().join('-')).toISOString()
            : new Date().toISOString(),
          priority: 0.7,
          changefreq: 'monthly',
        })
      }
    })
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  return [...staticUrls, ...blogUrls]
})
