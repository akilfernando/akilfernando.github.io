---
title: "CI Diagnostics & Game Engine Crash Triage Prototypes"
year: 2026
role: "Toolchain & Systems Engineer"
category: "software"
stack: ["Python (scikit-learn, pandas)", ".NET 8 (C#)", "AST Analysis", "CI Automation"]
blurb: "Exploratory developer tooling prototypes for CI build duration analysis and memory-independent game engine crash log triage, evaluated on synthetic data fixtures."
links:
  - label: "Interactive Prototypes Showcase"
    url: "/prototypes"
---

> [!NOTE]
> **Prototype Context**: Evaluated on synthetic data fixtures to test log parsing, stack normalization, and fault localization heuristics. These represent exploratory developer tools, not published scientific studies.

Two exploratory developer tooling prototypes built to investigate common engineering bottlenecks in continuous integration and game engine debugging workflows.

## 1. CI Build Duration & Timeout Analyzer (Python)

Continuous integration pipelines for game projects deal with massive binary assets, multi-gigabyte shader caches, and heavy compiler linking stages. This prototype explores log parsing and duration analysis:

- **Log Phase Segmentation**: Parses raw, unstructured build logs to isolate asset cooking, shader compilation, C++ compilation, and Link-Time Optimization (LTO) stages.
- **Early-Warning Timeout Prediction**: Uses Random Forest regression on simulated build telemetry to evaluate correlations between phase duration spikes (like asset cooking) and downstream job timeouts.
- **Synthetic Evaluation**: Tested against simulated build runs varying asset diff volume, cache miss rates, and dependency graph depth.
- **Real-World Next Steps**: Evaluating against production CI telemetry from open-source repositories to test resilience against runner contention and distributed cache hit variance.

---

## 2. Game Engine Crash Log Triage (.NET 8 C#)

Engine crashes during automated testing often produce noisy stack traces obscured by dynamic pointer addresses and asynchronous frame dispatches. This tool evaluates memory-independent normalization and heuristic fault localization:

- **Stack Trace Normalization**: Strips volatile runtime memory pointers, thread identifiers, and dynamic addresses from raw stack traces to generate canonical SHA-256 cluster signatures.
- **Automated Deduplication**: Reduced 50 simulated crash logs down to 6 distinct failure clusters (an 88% reduction in triage volume).
- **Heuristic Fault Localization**: Evaluates deterministic rules mapping top stack frames to recent Git commits and AST changes across common engine failure archetypes (such as scene reparenting NodePath breaks and multithreaded disposal races).
- **Real-World Next Steps**: Testing against real issue tracker dumps and crash reports from open-source engines like Godot to evaluate performance on inlined frames and inter-leaved thread logs.

For detailed architecture breakdowns and live terminal execution traces, visit the [Prototypes Showcase page](/prototypes).
