---
title: "CI Diagnostics & Game Engine Crash Triage Prototypes"
year: 2026
role: "Independent project"
category: "software"
stack: ["Python (scikit-learn, pandas)", ".NET 8 (C#)", "AST Analysis", "CI Automation"]
blurb: "Exploratory developer tooling prototypes for CI build duration analysis and memory-independent game engine crash log triage, evaluated on synthetic data fixtures."
links:
  - label: "Prototype walkthrough"
    url: "/prototypes"
---

I built two prototypes to explore build-log analysis and game engine crash triage. Both were tested on synthetic data. They have not been evaluated on production systems and are not published research.

## CI build duration analysis

The Python prototype parses build logs into asset cooking, shader compilation, C++ compilation, and linking phases. It uses Random Forest regression to explore relationships between phase durations and timeouts.

The simulated runs vary asset changes, cache miss rates, and dependency graph depth. Testing with real CI logs would help establish whether the approach works when runner hardware, cache behavior, and network delays vary.

## Game engine crash triage

The .NET 8 prototype removes changing memory addresses and thread identifiers from stack traces, then uses SHA-256 signatures to group similar crashes. It also applies rules that connect stack frames with recent Git commits and AST changes.

On the synthetic fixtures, it grouped 50 logs into six failure clusters. That is an 88% reduction in the number of items to review for that dataset, rather than a measured result on real crash reports. Further testing would need to account for inlined frames, interleaved thread logs, and failures involving several commits.

The [prototype walkthrough](/prototypes) describes both tools and includes an illustrative terminal trace.
