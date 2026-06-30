---
title: "Vulkan Graphics Demo"
year: 2025
role: "Personal"
category: "game"
stack: ["C++", "Vulkan"]
blurb: "Real-time graphics renderer built to learn the Vulkan API from the ground up."
links: []
---

A real-time renderer written from the ground up on Vulkan in C++, built to learn the API the hard way. Vulkan hands you almost nothing for free: you describe the queues, the memory, the synchronization, and the entire pipeline state yourself, and the famous hello triangle runs to hundreds of lines.

That verbosity is the whole lesson. All the work Vulkan makes you do by hand is work that older APIs and the driver were quietly doing on your behalf. Doing it explicitly, once, changed how I think about the GPU for good. It stopped being magic and became a machine with a model I could reason about.

I wrote more about going low level, across both this and the OpenGL flight sim, in [a post on learning graphics from scratch](/blog/learning-graphics-from-scratch/).
