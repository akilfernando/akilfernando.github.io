---
title: "PRISMA Meta-Analysis & Game CI Diagnostic Toolchain"
year: 2026
role: "Lead Researcher & Author"
category: "academic"
stack: ["PRISMA 2020", "Meta-Analysis (R/Python)", ".NET 8 (C#)", "Python (ML)", "Gemini CLI", "Claude Code", "Antigravity"]
blurb: "Systematic literature review (k=28 from 482 ingested records) quantifying CI timeouts, APR speedups (g=4.404), and the +50.0% enterprise SE benchmark disparity. Includes a production .NET 8 Godot crash triage engine."
links:
  - label: "Interactive Research Showcase"
    url: "/research"
  - label: "Download Full Manuscript (PDF)"
    url: "/research/Meta_Analysis_Manuscript.pdf"
  - label: "GitHub Repository"
    url: "https://github.com/akilfernando/quest-outreach-showcase"
---

A **PRISMA 2020 systematic review and meta-analysis** investigating Continuous Integration (CI) build timeouts, Automated Program Repair (APR), and automated crash triage across game engines and interactive software systems.

## Why This Research Matters

Most academic automated program repair (APR) and automated debugging tools are evaluated against single-threaded Java benchmarks like Defects4J or QuixBugs. While helpful for foundational research, these suites ignore the architectural bottlenecks of production game development:

1. **Massive Binary Asset Baking**: Multi-gigabyte textures, shader variants, and 3D meshes create severe Git LFS bottlenecks and build delays, making CI timeout prediction essential.
2. **Physics & Frame-Loop Non-Determinism**: Asynchronous update loops, multithreaded rendering backends, and floating-point variance cause flaky tests and non-deterministic runtime crashes.
3. **Cross-Language Stack Traces**: Engines like Unreal (C++ / Blueprints), Unity (C++ / C#), and Godot (C++ / C# / GDScript) require crash triage and fault localization capable of traversing language boundaries.

## Key Meta-Analysis Findings (k=28 Studies)

- **Ingested Literature Records**: 482 candidate records across ACM Digital Library and arXiv.
- **Screened via PICOC Selection**: 50 candidate studies evaluated for quantitative synthesis.
- **Synthesized in Meta-Analysis**: 28 peer-reviewed primary studies adhering to PRISMA 2020 standards.
- **Pooled Effect Size (Hedges' g)**: **4.404** [95% CI: 3.623 to 5.185] ($p < 0.001$), demonstrating substantial empirical benefit from targeted CI scheduling and repair interventions.
- **Heterogeneity Index (I²)**: **89.1%** (Cochran's $Q = 73.57$, $df = 8$, $p < 0.0001$), confirming heavy variance across evaluation benchmarks.
- **Enterprise Benchmark Disparity**: **+50.0% Bias** (71.4% representation for Defects4J suites vs. only 21.4% for game engines).
- **Motivation for OSSGameBench**: The Benchmarking Need Index ($B = I^2 \times \Delta = 0.4455$) proves that domain variation dominates tool performance, establishing the empirical need for a standardized game engine benchmark suite.

---

## Operational Diagnostic Toolchain

To validate the findings, the project implements two production-grade diagnostic modules:

- **CI Timeout Analyzer (Python ML)**: Evaluates build telemetry from open-source engines (Godot, OpenMW, Veloren, Thrive) using Random Forest classification to predict timeouts (**93.3% accuracy**, **0.9286 ROC-AUC**), identifying asset delta volume and Link-Time Optimization as primary culprits.
- **Godot 4 C# Crash Triage Engine (.NET 8 CLR)**: Normalizes dynamic memory addresses across unstructured stack traces to achieve an **88.0% deduplication rate** (50 raw logs reduced to 6 clusters), mapping AST context to Git commits for **100.0% Top-1 fault localization**.

For detailed forest plots, full methodology, and live terminal execution output, visit the [Research Showcase page](/research).
