import { z, defineCollection } from "astro:content"
import format from "date-fns/format"

const postsCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    categories: z.array(z.string()),
    date: z.string().transform((str) => format(new Date(str), "MMMM d, yyyy")),
    featured: z.boolean().default(false),
    image: z.string(),
    title: z.string(),
  }),
})

export const collections = {
  posts: postsCollection,
}
