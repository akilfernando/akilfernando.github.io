---
title: "Fleet Management System"
year: 2026
role: "Sole author"
category: "software"
stack: ["Next.js", "Supabase", "Drizzle ORM", "NinjaOne"]
blurb: "Started as an allocation engine, now the system of record for our entire device fleet: inventory, endpoint provisioning, and an ISO 27001 audit trail."
links: []
---

An internal system I built and still own end to end. It started as a simple allocation engine, answering the unglamorous but important questions a globally distributed staffing firm has to keep straight: who has which device, what state it is in, and where everything sits at any given moment. It has since grown into the system of record for our whole device fleet.

These days it does a lot more than allocate. It tracks the entire device inventory, and it handles endpoint provisioning through close integration with NinjaOne, our remote monitoring and management (RMM) platform. It also carries a strong audit trail, which matters for ISO 27001. It automatically logs the remote support sessions our IT team runs through NinjaOne, and it keeps the full history of every device purchase, allocation, and handover. So when an auditor asks who touched a machine and when, or when day-to-day IT and logistics need to know where a device has been, the answer is already there.

It is a Next.js app backed by Supabase, with Drizzle ORM for a typed, predictable data layer. The interesting part was less the code and more the modelling. Get the schema for devices, people, assignments, and events right and the system stays accurate as hardware is purchased, handed out, returned, and reassigned. An asset tracker is only useful if it is trusted, and it is only trusted if it never quietly drifts out of sync with reality.
