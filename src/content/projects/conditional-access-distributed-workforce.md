---
title: "Designing Conditional Access for a Distributed Workforce"
year: 2026
role: "Identity and access lead"
category: "security"
stack: ["Microsoft Entra ID", "Conditional Access", "MFA", "Break-glass accounts", "IAM"]
blurb: "Building a Conditional Access policy architecture in Microsoft Entra ID for a contractor workforce spread across countries, without locking anyone out."
links: []
---

Designing the Conditional Access policy architecture in Microsoft Entra ID for a workforce that is mostly contractors, spread across countries and devices. This is Identity and Access Management (IAM) where the interesting problem is not turning controls on. It is turning them on without locking out the people the business depends on.

## Context

The organization is a Managed Service Provider (MSP) whose contractor base works from their own locations, often their own hardware, on client systems, across several time zones. Identity is the real perimeter here. There is no office network to hide behind, so who can authenticate, from where, on what, under which conditions, is most of the security story.

Conditional Access is the tool Entra ID gives you to make those decisions. Signals in, a decision out: grant, block, or grant with a requirement like multi-factor authentication (MFA) or a compliant device. Powerful, and unforgiving. A policy written slightly too broad does not warn you. It just stops people working. <!-- TODO: Akil: confirm any workforce / geography specifics you want stated publicly, or keep this generic -->

## Constraints

- **No lockouts.** The workforce cannot afford a bad policy landing at 2am their time with no one awake to fix it. This is the constraint everything else bends around.
- **Distributed, bring-your-own reality.** People sign in from many countries and a mix of managed and personal devices. Any policy that assumed corporate-managed hardware everywhere would either be a lie or a wall.
- **Contractors, not employees.** Higher turnover, varied roles, third-party identities in the mix. Joiner and leaver churn is constant, so the design had to make onboarding and offboarding clean rather than bespoke each time.
- **The admin lockout trap.** Conditional Access can lock out the very administrators who manage it. If a policy blocks all access under a condition your own admin account happens to meet, you can fence yourself out of the tenant entirely.

## Approach

**Break-glass accounts first, before any policy.** Two emergency-access accounts, cloud-only, excluded from every Conditional Access policy, with long random credentials held securely and their sign-in activity alerted on. This is the seatbelt you fasten before you start the engine. If a policy goes wrong and locks everyone out, including the admins, these accounts are the way back in. I set them up and verified the exclusions before writing a single restrictive policy, since the whole point is that they still work when nothing else does. <!-- TODO: Akil: credential custody / vaulting details are internal; do not describe them publicly -->

**Report-only before enforce.** Every new policy went live in report-only mode first. That runs the policy against real sign-ins and records what it would have done, without actually doing it. So I could see exactly who a policy would have blocked, and why, against live traffic, before it had the power to block anyone. Nothing moved to enforced until report-only came back clean.

**Persona-based policy design.** Rather than one sprawling policy, I structured a small set of targeted ones around how people actually work: baseline MFA for everyone, stronger requirements for administrative roles, device and location conditions where they genuinely reduced risk without breaking the distributed model. Layered, legible policies beat one clever monolith, because six months later you can still read them and know what each one is for. <!-- TODO: Akil: the exact policy set, named roles, and any location logic are internal; keep public copy at the pattern level -->

**Staged rollout.** Enforcement rolled out in waves, not all at once, starting with a small pilot group before widening. A staged rollout means a mistake hits a handful of people you can reach directly, not the whole workforce at once.

## Outcome

The tenant runs a Conditional Access architecture that enforces MFA across the workforce, holds administrative access to a higher bar, and applies device and location conditions where they earn their place, with break-glass accounts as the guaranteed way back in. It was delivered without a mass lockout. <!-- TODO: Akil: add any metrics you are comfortable sharing, e.g. coverage percentage, blocked-risky-signin counts, but only if non-identifying -->

Just as useful, the policies are readable. Someone picking this up after me can see the shape of it, which is what makes it maintainable rather than a black box that works until it does not.

## What I'd do differently

I leaned on report-only mode heavily, which was right, but early on I underestimated how long to leave policies in it before enforcing. A couple of times I moved to enforce after a short observation window and caught an edge case, a particular sign-in pattern from a particular context, that a longer report-only soak would have surfaced first. It was recoverable every time, but it taught me to let report-only run across a full working cycle of the distributed team, not just a couple of days, before flipping to enforce.

I would also document the break-glass procedure more formally, sooner. I built the accounts correctly, but the runbook for when and how to actually use them lived too long in my head. Emergency access is only useful if the emergency procedure is written down where someone other than me can follow it under pressure.
