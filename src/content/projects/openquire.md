---
title: "OpenQuire"
year: 2026
role: "Creator / Ongoing"
category: "software"
stack: ["TypeScript", "React", "MuPDF", "WebAssembly", "Tauri", "MCP"]
blurb: "An open-source PDF app for the browser and desktop, with editing, OCR, redaction, signatures, and repeatable workflows. PDF processing runs on your device."
links:
  - label: "Source on GitHub"
    url: "https://github.com/akilfernando/openquire"
---

I’m building OpenQuire, an open-source PDF app for the browser and desktop. It brings viewing, editing, annotation, conversion, and document organization into one workspace. PDF operations run on the user's device using MuPDF compiled to WebAssembly.

## Working with documents

The app supports paragraph editing, image changes, forms, annotations, redaction, and document comparison. It also includes on-device OCR for scanned pages, certificate-based digital signatures, and tools for checking accessibility and preparing archival PDFs.

Users can record a sequence of operations and replay it on another document or a batch of files. The same engine is available through a command-line tool and a Node library, so those operations can also be used outside the interface.

## How it is built

The React and TypeScript interface communicates with the PDF engine through a Web Worker. This keeps document processing separate from the interface, and the engine can also run without a browser. Changes use MuPDF's journal operations for undo and redo.

The desktop app uses Tauri and adds file-manager integration, saving back to the original file, and desktop updates. Plugins run in separate workers with permissions approved by the user.

## Optional AI and assistant tools

AI features are off by default. Users choose a provider or local endpoint and approve each request before document content is sent. Local PDF operations do not need an AI connection.

OpenQuire also provides a local Model Context Protocol (MCP) server. Connected assistants can extract text, fill forms, redact content, and compare documents within configured directories. Results returned to an assistant follow that client's own model and privacy settings.

## Current work

I’m continuing to develop the application across its browser, desktop, command-line, and assistant interfaces. The [repository](https://github.com/akilfernando/openquire) documents setup, release checks, supported capabilities, and known limitations.
