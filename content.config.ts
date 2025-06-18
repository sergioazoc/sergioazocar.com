import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const commonSchema = z.object({
  author: z.string(),
  date: z.string(),
  description: z.string(),
  img: z.string(),
  slug: z.string(),
  tags: z.array(z.string()),
  title: z.string(),
})

export default defineContentConfig({
  collections: {
    blog_en: defineCollection({
      type: 'page',
      source: 'en/**',
      schema: commonSchema,
    }),
    blog_es: defineCollection({
      type: 'page',
      source: 'es/**',
      schema: commonSchema,
    }),
  },
})
