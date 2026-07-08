---
title: "Security Posture Reporting Tool"
year: 2026
role: "Primary developer (inherited)"
category: "software"
stack: ["Python", "Flask", "Playwright", "Anthropic Claude API", "NinjaOne", "Bitdefender GravityZone"]
blurb: "Automated security-posture reporting I inherited from my predecessor and significantly extended, adding NinjaOne and device-inventory integration on top of the endpoint data."
links: []
---

A tool that gathers security posture information across the fleet and turns it into a readable report. My predecessor built the first version. I took it over and significantly extended it, and most of what it does now came out of that work. It is a Python and Flask project: Playwright drives the collection, automating its way through surfaces a person would otherwise have to check by hand, and the Anthropic Claude API helps analyse and summarise what comes back into scheduled reports.

Most of the extension work was about widening what the tool can actually see. I wired in NinjaOne, our remote monitoring and management (RMM) system, and connected it to the Fleet Management System I built, which is our device inventory and provisioning system, so the reporting now draws on real device state rather than endpoint data alone. Bitdefender GravityZone feeds the endpoint side.

It sits right at the intersection I find most interesting. Real security work, made faster by good engineering. The repetitive, error-prone parts of checking a posture are exactly the parts worth automating, so human attention can go to the judgement calls instead of the gathering.
