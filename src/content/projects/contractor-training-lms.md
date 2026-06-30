---
title: "Contractor Training LMS"
year: 2026
role: "Sole author"
category: "software"
stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Entra ID SSO"]
blurb: "Training platform serving contractors, primarily lawyers learning legal topics. Built end to end with Entra ID single sign-on."
links: []
---

A training platform I built end to end for the contractors our business supports, many of them lawyers working through legal material. It is a Next.js and React app with a Prisma and PostgreSQL data layer, and it signs people in through Entra ID single sign-on using NextAuth.

Sole author meant owning every layer. The data model for courses and progress, the authentication and access rules, the content delivery, and the interface people actually learn in. The single sign-on piece is where my security work and my development work meet most directly. Tie the platform into Entra ID and the same identity, conditional access, and governance that protect everything else protect this too, with no separate set of passwords to manage or leak.
