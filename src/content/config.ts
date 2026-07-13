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
    category: z.enum(['security', 'game', 'software', 'academic']),
    stack: z.array(z.string()).default([]),
    blurb: z.string(),
    // Optional cover art (itch/engine thumbnail). Shown at the top of the
    // detail page and used as the per-project social share image.
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
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

// Backlog and reviews: games, films, shows, books. Letterboxd-style tracker.
// The markdown body is the review (Akil's own words). rating is 0-5, half steps.
const library = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['game', 'movie', 'show', 'book']),
    status: z.enum(['backlog', 'active', 'finished']),
    rating: z.number().min(0).max(5).optional(),
    year: z.number().optional(),
    creator: z.string().optional(), // studio, director, author, or network
    started: z.coerce.date().optional(),
    finished: z.coerce.date().optional(),
    favorite: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects, writing, library };
