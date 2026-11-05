---
title: "Contractor Training LMS"
year: 2026
role: "Sole author"
category: "software"
stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Entra ID SSO"]
blurb: "Training platform serving contractors, primarily lawyers, and a core part of our ISO 27001 compliance: it delivers the mandatory ISMS training. Built end to end with Entra ID single sign-on."
links: []
---

I built this training platform for the contractor workforce at Teams Squared, including lawyers completing legal training. It also delivers the mandatory Information Security Management System (ISMS) awareness training required by our ISO 27001 program and records completion.

The app uses Next.js, React, Prisma, and PostgreSQL, with Microsoft Entra ID single sign-on through NextAuth. I was the sole developer.

## Requirements

We needed to deliver courses, track progress, and keep reliable completion records for audits. The platform also needed to use our existing organizational accounts so that staff would not have another set of credentials to manage.

Because I would be maintaining it alongside my other responsibilities, the scope and architecture needed to be manageable for one developer.

## Implementation

I started with the data model for courses, enrolments, progress, and completion, then built the learning interface around it.

Authentication uses Entra ID through NextAuth. This lets the platform use the organization's existing identity controls and MFA. Removing someone's organizational access also removes their access to the LMS.

I chose Next.js and Prisma over PostgreSQL because they were familiar tools that would be straightforward to maintain and hand over.

## Result

Contractors can sign in with their existing accounts, work through courses, and have their completion recorded. The platform provides the training records we need for the ISMS without requiring separate user accounts.

## What I would change

I would separate content authoring from application deployments earlier. Initially, course changes required code changes, which made me responsible for every update. Managing course content as data would make it easier for other team members to maintain.

I would also add automated tests for completion tracking earlier, since users and auditors both rely on those records.
