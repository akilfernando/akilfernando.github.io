---
title: "Device Allocation System"
year: 2026
role: "Sole author"
category: "software"
stack: ["Next.js", "Supabase", "Drizzle ORM"]
blurb: "Internal system for tracking and allocating devices across the contractor base."
links: []
---

An internal system I built to track and allocate devices across our contractor base. It answers the unglamorous but important questions an MSP has to keep straight: who has which device, what state it is in, and where everything sits at any given moment.

It is a Next.js app backed by Supabase, with Drizzle ORM for a typed, predictable data layer. The interesting part was less the code and more the modelling: getting the schema for devices, people, and assignments right so the system stays accurate as hardware is handed out, returned, and reassigned. An asset tracker is only useful if it is trusted, and it is only trusted if it never quietly drifts out of sync with reality.
