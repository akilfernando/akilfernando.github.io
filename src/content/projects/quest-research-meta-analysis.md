---
title: "PRISMA Automation Scaffold & CI Diagnostic Prototypes"
year: 2026
role: "Toolchain & Pipeline Engineer"
category: "academic"
stack: ["Python (scipy, pandas, reportlab)", ".NET 8 (C#)", "CrossRef & arXiv APIs", "AST Analysis", "CI Automation"]
blurb: "A Python-based automation pipeline scaffolding mechanical PRISMA systematic review steps, paired with exploratory synthetic prototypes for CI build timeout prediction and crash log triage."
links:
  - label: "Interactive Architecture Showcase"
    url: "/research"
  - label: "Sample Output Manuscript (PDF)"
    url: "/research/Meta_Analysis_Manuscript.pdf"
  - label: "GitHub Repository"
    url: "https://github.com/akilfernando/quest-outreach-showcase"
---

> [!NOTE]
> **Artifact Disclaimer**: Generated sample artifacts (manuscript PDFs, forest plots, triage logs) are automated outputs produced by the pipeline scaffolding to demonstrate the tooling architecture, not real scientific publications. All underlying review records and crash traces are synthetic placeholder data.

An exploratory software engineering toolchain designed to automate the mechanical workflows of systematic literature reviews (PRISMA 2020) and continuous integration diagnostic routines for game development environments.

## 1. PRISMA Metadata Pipeline Scaffold

Conducting systematic literature reviews often involves repetitive, error-prone manual labor across hundreds of publication records. This module implements a modular **Python automation architecture** to orchestrate the pipeline from ingestion to publication-ready output:

- **Automated Literature Ingestion**: Integrates with **CrossRef** and **arXiv APIs** to query metadata, enforce rate limiting, filter candidate records by search schemas, and deduplicate entries.
- **Statistical Computation Layer**: Leverages `scipy` and `pandas` to calculate standardized effect sizes, random-effects meta-analysis models, confidence intervals, and statistical heterogeneity metrics on ingested data matrices.
- **Automated Document Compilation**: Generates publication-ready PDF manuscripts using `reportlab` and programmatic forest plots using `matplotlib`, assembling structured sections, tables, and references directly from pipeline data.
- **Synthetic Validation Data**: The datasets currently in the repository consist of synthetically generated placeholder cohorts used to stress-test schema parsing, statistical routines, and document formatting end to end.

---

## 2. Exploratory CI Diagnostic Prototypes

Game engine continuous integration pipelines face unique challenges: long compilation cycles, heavy asset processing phases, and cross-language runtime crashes. This project prototypes two exploratory diagnostic tools:

- **CI Timeout Analyzer (Python / Scikit-Learn)**: An exploratory prototype using Random Forest regression on simulated build telemetry to analyze how distinct build phases (asset cooking, shader compilation, Link-Time Optimization) correlate with pipeline runtime. Focuses on log phase segmentation and runtime threshold heuristics.
- **Crash Log Triage Engine (.NET 8 C#)**: A high-throughput prototype that ingests simulated game engine crash logs, strips volatile dynamic memory addresses and pointers, and generates canonical SHA-256 stack hashes for deduplication. Evaluates deterministic heuristic baselines, such as rule-based AST-to-Git commit mapping, across simulated failure archetypes (e.g., node path resolution shifts and multithreaded disposal races).

For interactive architecture diagrams, sample generated plots, and live terminal execution traces, visit the [Research & Tooling Showcase page](/research).
