---
title: "Gameplay Programming at Ubisoft"
year: 2024
role: "Gameplay Programmer (Co-op)"
category: "game"
stack: ["Unity", "C#", "Cinemachine", "NavMesh", "Maya", "Blender", "Three.js", "Capacitor"]
blurb: "A co-op term writing gameplay code on two unannounced Unity projects, from camera and AI systems to a cross-platform playable demo."
links: []
---

My co-op term at Ubisoft Halifax, where I wrote gameplay code in Unity and C# across two unannounced projects. I cannot go into the games themselves, so this is about the work and the systems rather than what was being made.

## Camera, targeting, and AI

Most of my time went into the existing systems and tooling of a Unity project heading toward a prototype milestone. I added several new dynamic camera angles and built the foundation of a camera-clipping solution with Cinemachine and Unity raycasting. I extended the targeting system so it could measure distance both along NavMesh paths and across hex-grid tiles, and I tuned character behaviour trees so the AI matched the direction game design was after.

Alongside that I added debug tools inside the client to make systems like the hex grid easier to inspect and adjust, and squashed a range of bugs that improved both the build itself and the day-to-day of everyone working in it.

## Character pipeline and a portable demo

The role was not only gameplay code. I built character art in Maya and Blender and merged it into the project's existing character systems to get a new, fully animating character into the game, then documented the process so it could be repeated. On a separate project, working alongside another co-op in my cohort, I built a 3D scene and a rigged, animated character in Blender and used Three.js and Capacitor to turn it into a webkit-compatible playable scene, wrapped as an installable Android app. When dependencies broke partway through a milestone, I wrote workarounds to keep the build playable for the demo.

## What I took from it

Working inside a large, living codebase with its own bespoke tools taught me to learn a system thoroughly before changing it. The same instinct I lean on everywhere now. Most of the value was in reading carefully, respecting what was already there, and leaving it a little more workable than I found it.
