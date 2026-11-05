---
title: "Ruster"
year: 2026
role: "Creator / Ongoing"
category: "game"
stack: ["Rust", "wgpu", "Vulkan", "Rhai", "MCP"]
blurb: "An early open-source engine project for interactive applications, with a shared 3D renderer, scene editor, standalone application kit, and optional assistant tools."
links:
  - label: "Source on GitHub"
    url: "https://github.com/akilfernando/Ruster"
---

I’m building Ruster, an open-source Rust engine project for games, interactive simulations, and visualization. The current work focuses on a small Linux foundation: rendering a scene, editing it, and using the shared systems in a standalone application.

## Rendering and scene editing

The editor and standalone viewer share a renderer built with wgpu's Vulkan backend. It supports a perspective camera, depth-tested 3D objects, simple colored materials, object picking, and orbit and zoom controls.

The scene editor provides stable object IDs, position, rotation and scale editing, undo and redo, validation, and conflict detection when saving. Imported triangle-only OBJ meshes use a stable asset catalog with rebuildable caches. Invalid mesh or shader changes retain the last working version so they can be corrected.

## Building applications

The application kit lets an application own its behavior and state while reusing input, rendering, and lifecycle handling. A delivery challenge demonstrates the kit, with tools for exporting its source and packaging a Linux development build.

I’m also experimenting with Rhai scripting in a separate Motion Lab example. It attaches behaviors to objects and validates source changes before applying them through a reset. This is an early experiment; the scripting language and broader editor integration are still open decisions.

## Manual and assistant workflows

Ruster can be used through its native editor and command-line tools without an AI account. An optional local MCP adapter lets an assistant inspect and edit the displayed editor session. Changes require the current session identity and revision, respect pending human edits, and use the same undo history as manual changes.

## Current scope

Ruster is in early development and is not production-ready. The current scene workflow is limited to one viewport and 256 objects. General physics, audio, textures, and broader mesh-format support remain future work. Native runtime verification currently covers a Linux system with an NVIDIA RTX 4060 Laptop GPU; other platforms and GPU classes are not yet verified.

The project is developed with AI assistance. The [repository](https://github.com/akilfernando/Ruster) includes the roadmap, architecture decisions, verification evidence, and current limitations.
