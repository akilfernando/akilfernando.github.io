---
title: "Implementing ISO 27001 at a Managed Service Provider"
year: 2026
role: "ISMS Officer, implementation lead"
category: "security"
stack: ["ISO 27001", "ISMS", "Risk assessment", "Statement of Applicability", "Microsoft Entra ID", "Microsoft 365"]
blurb: "Standing up an Information Security Management System from scratch at a Microsoft-stack MSP: scoping, risk assessment, Statement of Applicability, and audit preparation."
links: []
---

Standing up an Information Security Management System (ISMS) from nothing, as the appointed officer for it, at a Managed Service Provider (MSP). This is the piece of work I point people to first, since it is the one where the Governance, Risk, and Compliance (GRC) side and the hands-on security side had to meet in the same place and hold.

## Context

The organization is a Microsoft-stack MSP: a small internal team supporting a much larger contractor base across several countries, on behalf of clients in more than one market. <!-- TODO: Akil: confirm the headcount / contractor / client figures you are comfortable stating publicly, or leave them out entirely -->

Certification was a business requirement, not a vanity exercise. Clients were beginning to ask for it, so the ask landed on me: take the organization from no formal management system to something a certification body would sign off on. I had done plenty of the technical controls before. I had never owned the management system that is supposed to hold them together.

## Constraints

- **A distributed team on someone else's clock.** Most of the people in scope are contractors, spread across time zones, working on client systems. Any control that assumed everyone sat in one office, on managed hardware, on one network, was a control that would not survive contact with reality.
- **Small team, no dedicated GRC function.** The management system had to be light enough that a handful of people could actually run it, month after month, without a compliance department behind them. A framework nobody maintains is worse than no framework, since it lies about where you stand.
- **Certification timeline.** There was a date to be ready by. <!-- TODO: Akil: add the target audit window / certification deadline if you want it stated -->
- **Live business.** None of this could stop the actual work of supporting clients. The ISMS had to be built around operations that were already running.

## Approach

I started where the standard makes you start, which is not with controls. It is with scope and risk.

**Scoping.** First job was drawing an honest boundary. What information, what systems, what people, what locations are inside the ISMS, and what is deliberately outside it. For an MSP that line is genuinely hard, because you are handling your own information and, in places, your clients'. I wrote the scope statement to be specific about that split rather than papering over it. <!-- TODO: Akil: the exact scope boundary wording is internal; keep this generic in public copy -->

**Risk assessment.** I built a risk assessment methodology the team could actually apply, not a spreadsheet that looked rigorous and died on first use. Assets and information flows first, then threats and vulnerabilities against them, then a consistent way to score likelihood and impact so two people scoring the same risk landed in roughly the same place. For a team this size the honest risks were rarely exotic. A stale account nobody deprovisioned. A shared credential. An unpatched laptop on a home network. The methodology had to surface the boring, real risks and not get lost chasing the dramatic ones. <!-- TODO: Akil: the scoring scale and specific risk register entries are internal; do not reproduce -->

**Statement of Applicability.** Then the Annex A controls, one at a time. The Statement of Applicability (SoA) is the document that says, control by control, this applies and here is why, or it does not and here is why not. This was the part that changed how I think. You cannot wave at best practice. You have to justify your own environment to yourself, in writing, and mean it. Most of the identity and access controls mapped cleanly onto work already live in Microsoft Entra ID and Microsoft 365, so the SoA also became an honest audit of what we really had switched on versus what we told ourselves we had.

**Policy and evidence.** Controls need policy behind them and evidence in front of them. I wrote the policy set to be short and readable, since a policy nobody reads is not a control, and wired each one to evidence that gets produced by the work happening anyway rather than by a separate compliance chore. Access reviews that actually run. Offboarding that is real and not theoretical. Proof that the thing happened, not just the intention to.

## Outcome

The organization went from no formal management system to one that is scoped, risk-assessed, documented, and operating, with a Statement of Applicability and evidence trail ready for external audit. <!-- TODO: Akil: state the certification outcome / audit result here once it is final, and only what you are comfortable making public -->

The more durable outcome is that the ISMS is a loop, not a one-time push. Assess, treat, monitor, review, improve, and around again. It runs at a size the team can sustain, which was the whole point.

## What I'd do differently

I would start the evidence habit earlier. For the first stretch I treated documentation as something to catch up on once the controls were in place, and that led to a scramble to reconstruct proof of things we had genuinely been doing for months. The work was real. The record of it was not, and to an auditor those are the same problem. Next time I wire the evidence in from day one, so the trail builds itself as the controls go live instead of being back-filled under a deadline.

I would also socialize the risk methodology with the team sooner. I built it well but largely alone, so the first few risk conversations were me explaining the scoring rather than the team owning it. A management system only survives if the people in it treat it as theirs, and that buy-in is easier to build early than to retrofit.
