---
title: "Contractor Training LMS"
year: 2026
role: "Sole author"
category: "software"
stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Entra ID SSO"]
blurb: "Training platform serving contractors, primarily lawyers learning legal topics. Built end to end with Entra ID single sign-on."
links: []
---

A Learning Management System (LMS) I built end to end, sole author, for the contractor workforce at our business, many of them lawyers working through legal material. It is a Next.js and React app with a Prisma and PostgreSQL data layer, and it signs people in through Microsoft Entra ID single sign-on (SSO) using NextAuth. It is the internal platform I point to when someone wants to see where the development side and the security side of my work meet in one codebase.

## Context

The organization is a global remote staffing firm, legal-first and now multi-industry, with a distributed contractor workforce. Those team members need structured training, tracked, with a record of who completed what. Off-the-shelf platforms existed, but bringing one in would have meant a separate identity silo, a separate set of credentials, and a separate thing to secure and pay for. Building it in-house meant the training platform could live inside the same identity and governance perimeter as everything else the team runs. <!-- TODO: Akil: confirm any audience / headcount specifics you want stated publicly, or keep this generic -->

## Constraints

- **Sole author, real users.** One person owning every layer, for a platform people actually depend on to complete required training. So the scope had to stay honest about what one person could build and then maintain.
- **No new identity silo.** A separate login for this platform would have been a new set of passwords to manage, reset, and leak. The hard constraint was that it authenticate against the identity the organization already trusts.
- **Sensitive audience.** The learners include lawyers working through legal material, so access and completion records had to be handled with care rather than treated as throwaway data. <!-- TODO: Akil: describe the data-sensitivity handling only to the level you are comfortable with publicly -->

## Approach

**Identity first, through Entra ID SSO.** The single sign-on piece is where my security work and my development work meet most directly. Rather than bolting an authentication system onto the app, I made the platform defer to Entra ID through NextAuth, so the same identity, Conditional Access, and multi-factor authentication (MFA) that protect everything else protect this too. No separate passwords, no parallel account lifecycle. When someone is offboarded from the organization, they lose the LMS with everything else, automatically, because it was never a separate account to remember to close.

**Owning every layer.** Sole author meant the data model for courses and progress, the authentication and access rules, the content delivery, and the interface people actually learn in were all mine to get right. I built the schema for courses, enrolments, and completion first, since a training record is only worth anything if it is accurate and hard to fudge, and got that stable before building the interface on top of it.

**Building it to be maintained by one person.** I kept the stack deliberately conventional, Next.js and Prisma over PostgreSQL, because the clever architecture that only I understand is a liability the day I am not the one maintaining it. Boring and legible was the goal.

## Outcome

A working training platform that the contractor base signs into with their existing organizational identity, tracks course progress and completion, and requires no separate credentials to manage or secure. <!-- TODO: Akil: add usage figures, number of courses, or completion metrics here if you want them, and only if non-identifying -->

The outcome I am most pleased with is not a feature. It is that the platform sits cleanly inside the organization's identity model instead of poking a hole in it. Tying it into Entra ID is the reason a new internal tool made the security posture no worse, and arguably a little better.

## What I'd do differently

I would separate content authoring from the code sooner. Early on, adding or editing a course meant touching the application, which was fine while I was the only one doing it but made me the bottleneck for every content change. A cleaner authoring path, content managed as data rather than through deployments, would have taken the platform from a thing I run to a thing the team runs. <!-- TODO: Akil: adjust if you did in fact build a content-authoring layer -->

I would also invest in automated tests around the completion logic earlier. It is the part users trust most and notice fastest when it is wrong, so it is exactly the part worth pinning down with tests rather than manual checking.
