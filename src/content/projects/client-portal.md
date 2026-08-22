---
title: "Client Portal"
year: 2026
role: "Sole developer (inherited & expanded)"
category: "software"
stack: ["TypeScript", "React", "Python", "FastAPI", "Microsoft Entra", "Resend"]
blurb: "Inherited an unreleased portal and expanded it into an all-in-one platform replacing Zelt and Clockify for client management and contractor timesheets."
links: []
---

An internal platform I inherited as an unreleased prototype from my predecessor and developed into Teams Squared's central operational hub as the sole developer.

Originally envisioned as a read-only client portal pulling data from external services, I re-architected and expanded the platform to replace **Zelt** (HRIS) and **Clockify** (time tracking) entirely:
- **Two-Sided Coordination**: A unified dashboard for clients to review team engagements, invoices, and approvals, paired with a contractor portal for logging hours, viewing timesheets, and requesting leave.
- **Enterprise Integrations**: Integrated **Resend** for transactional email notifications and configured **Microsoft Entra ID** authentication.
- **Modern AI & CI Workflows**: Leveraged modern AI developer tools (Claude Code, Google Antigravity) alongside staging/production pipelines to reliably deploy updates and maintain rapid iteration cycles.

I wrote in detail about the lessons learned from this solo rollout and moving from feature-first to UX-first design in [a post on inheriting a production app](/blog/inheriting-a-production-app/).
