---
title: "Security Posture Reporting Tool"
year: 2026
role: "Sole developer (inherited)"
category: "software"
stack: ["Python", "Flask", "Playwright", "Anthropic Claude API", "NinjaOne", "Bitdefender GravityZone"]
blurb: "Automated security-posture reporting I inherited from my predecessor and significantly extended, adding NinjaOne and device-inventory integration on top of the endpoint data."
links: []
---

This tool collects security information from our device fleet and produces scheduled reports. My predecessor built the first version, and I took over development and extended it.

It uses Python and Flask, with Playwright to collect information that would otherwise need to be checked manually. The Anthropic Claude API helps analyze and summarize the results.

I added NinjaOne integration and connected it to the Fleet Management System I built, so reports could include device inventory and provisioning information alongside endpoint data from Bitdefender GravityZone.

Automating collection gives the security team more time to review findings and decide what needs attention.
