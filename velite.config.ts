import { defineConfig, s } from "velite";

export default defineConfig({
  root: "src/content",

  output: {
    data: ".velite",
  },

  collections: {
    posts: {
      name: "Post",

      pattern: "blog/**/*.mdx",

      schema: s
        .object({
          title: s.string(),

          description: s.string(),

          publishedAt: s.string(),

          category: s.string(),

          featured: s.boolean().default(false),

          slug: s.path(),

          content: s.mdx(),
        })
        .transform((data) => ({
          ...data,

          slug: data.slug
            .replace(/^blog\//, "")
            .replace(/\.mdx$/, ""),
        })),
    },
  },
});