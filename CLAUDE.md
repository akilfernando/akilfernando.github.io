# CLAUDE.md

Akil Fernando's portfolio site. Astro, zero-JS-by-default, content collections for `projects` and `blog`, content/data in `src/`.

## Writing voice (read before editing any copy)

All prose on this site follows the voice spec in [`docs/voice-spec.md`](docs/voice-spec.md). That file is the source of truth. Summary of how it maps here:

**This is hiring-facing brand copy.** So the brand override is loaded:

- **No em-dashes (`—`). Ever.** This is a hard rule for this repo. Translate the dash instinct into short hard-stop beats, periods, or the occasional spaced hyphen (` - `, which is authentically Akil's and not an em-dash). Ellipses (`…`) for genuine trailing thought are allowed but used sparingly.
- The page-title separator and any structural punctuation also avoid em-dashes.

**Deep fingerprint (Section 0/1 of the spec) applies everywhere on the site:**
- Lead with the substance, never a warm-up. No "I hope you're well", no throat-clearing.
- Reason out loud with since/so/because; back claims with concrete detail and comparison, not adjectives.
- Momentum through short beats and subject-drop ("Built X end to end.", "Came to it through engineering.").
- Dry honesty that undercuts. Own the rough edge. Do not oversell.
- "We" for shared/team work, "I" for owning a specific action or a miss.

**Register by page type:**
- **About, Career, project write-ups** = reflective professional prose. Deep fingerprint on, creative-mode flourishes off (no present-tense fiction immersion). Warm, first-person, concrete.
- **Blog / essays** = creative long-form (Section 6): lush passage then a hard stop, the dry inner-voice puncture, emotion rendered through the body not named, tactile similes. Still no em-dashes; ellipses fine.
- **Writing collection (`src/content/writing/`)** = Akil's own creative work, reproduced verbatim. This is the ONE exception to the no-em-dash rule: do not alter the author's punctuation (en/em dashes, ellipses, semicolons). It is his art, copied exactly. New pieces are added as `.md` files; use `status: "in progress"` for unfinished work.

**Confidentiality:** no client names, no employer-internal codenames, no unannounced product details, no invented metrics. Describe work only to the level the public resume already does.

## Build / check

- `npm run build` must pass before commit.
- Quick voice/brand check: there should be zero em-dashes in `src/`. `grep -rn "—" src/` should return nothing.
