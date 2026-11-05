---
title: "Fleet Management System"
year: 2026
role: "Sole author"
category: "software"
stack: ["Next.js", "Supabase", "Drizzle ORM", "NinjaOne"]
blurb: "Started as an allocation engine, now the system of record for our entire device fleet: inventory, endpoint provisioning, and an ISO 27001 audit trail."
links: []
---

I built and maintain this internal device management system at Teams Squared. It began as a way to track device assignments and now records inventory, endpoint provisioning, purchases, allocations, and handovers across the company's distributed workforce.

It integrates with NinjaOne, our remote monitoring and management platform, for provisioning and automatic logging of remote support sessions. The device history helps the IT team handle day-to-day logistics and provides records for ISO 27001 audits.

The app uses Next.js, Supabase, and Drizzle ORM. Much of the design work went into modelling devices, people, assignments, and events so that the records stayed accurate as hardware was purchased, returned, and reassigned.
