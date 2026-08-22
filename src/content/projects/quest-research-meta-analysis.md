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

A comprehensive **PRISMA 2020-compliant systematic literature review and meta-analysis** evaluating Continuous Integration (CI) build timeouts, Automated Program Repair (APR), and automated crash triage in game engineering and interactive software systems.

## Executive Synthesis & Findings

Continuous Integration in modern game development operates under architectural failure constraints fundamentally distinct from classical enterprise software:

1. **Massive Binary Asset Baking Bottlenecks**: Assets (textures, shaders, 3D meshes) create severe Git LFS synchronization and compilation delays leading to high CI timeout rates.
2. **Physics & Frame-Loop Non-Determinism**: Asynchronous gameplay loops, multi-threaded rendering, and floating-point instabilities generate high test flakiness and difficult-to-reproduce crashes.
3. **Multi-Language Architecture**: Modern game engines (Unreal Engine C++, Unity C#, Godot C++/GDScript) require automated crash triage and program repair capable of cross-language stack trace reconstruction.

### Key Meta-Analysis Metrics (k=28 Studies)

- **Ingested Literature Records**: 482 candidate records across ACM Digital Library and arXiv.
- **Screened via Strict PICOC Rules**: 50 candidate studies.
- **Approved for Final Synthesis**: 28 peer-reviewed primary studies (100% PRISMA 2020 compliant).
- **Pooled Effect Size (Hedges' g)**: **4.404** [95% CI: 3.623 to 5.185] ($p < 0.001$).
- **Heterogeneity Index (I²)**: **89.1%** (Cochran's $Q = 73.57$, $df = 8$, $p < 0.0001$).
- **Enterprise Benchmark Disparity**: **+50.0% Bias** (71.4% Defects4J vs. only 21.4% Game Engines).
- **Mathematical Justification for OSSGameBench**: Benchmarking Need Index $B = I^2 \times \Delta = 0.4455$.

---

## Production Diagnostic Toolchain

Paired with the empirical synthesis is an end-to-end automated diagnostic toolchain:

- **CI Timeout Analyzer (Python ML Pipeline)**: Predicts continuous integration build timeouts across open-source game engines (Godot, OpenMW, Veloren, Thrive) using Random Forest classification with **93.3% accuracy** and **0.9286 ROC-AUC**.
- **Godot 4 C# Crash Triage Engine (.NET 8 CLR)**: Ingests unstructured crash logs, normalizes dynamic memory pointers to achieve an **88.0% deduplication rate** (50 logs $\to$ 6 clusters), and applies Gemini 3.1 Pro blame mapping for **100.0% Top-1 fault localization accuracy**.

Explore the full interactive data visualizations, embedded forest plot, and live execution logs on the [dedicated Research Showcase page](/research).
