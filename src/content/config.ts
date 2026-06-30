import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),
    role: z.string(),
    category: z.enum(['game', 'software', 'academic']),
    stack: z.array(z.string()).default([]),
    blurb: z.string(),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

// Creative writing (fiction, essays). Body is reproduced verbatim, so its own
// punctuation (em/en dashes, ellipses) is preserved here, not the brand no-em-dash rule.
const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['in progress', 'complete']).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects, writing };
