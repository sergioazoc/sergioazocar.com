import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

const commonSchema = z.object({
  author: z.string(),
  date: z.string(),
  description: z.string(),
  img: z.string(),
  slug: z.string().optional(),
  tags: z.array(z.string()),
  title: z.string(),
  published: z.boolean().default(false),
  union: z.string().optional(),
})

export default defineContentConfig({
  collections: {
    blog_en: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: 'en/**',
        schema: commonSchema,
      }),
    ),
    blog_es: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: 'es/**',
        schema: commonSchema,
      }),
    ),
  },
})
