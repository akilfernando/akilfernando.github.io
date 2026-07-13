---
title: "Vulkan Graphics Demo"
year: 2025
role: "Personal"
category: "game"
stack: ["C++", "Vulkan"]
blurb: "Real-time graphics renderer built to learn the Vulkan API from the ground up."
cover: "/projects/vulkan-gravity-field.png"
coverAlt: "Two mass points warping a dense grid of green velocity vectors into spirals, a gravity-field simulation from the Vulkan renderer."
links:
  - label: "Watch it run (YouTube)"
    url: "https://youtu.be/nAL_7nFbHV0"
  - label: "See it on itch.io"
    url: "https://akilf.itch.io/vulkan-graphics-demo-project"
---

A real-time renderer written from the ground up on Vulkan in C++, built to learn the API the hard way. Vulkan hands you almost nothing for free: you describe the queues, the memory, the synchronization, and the entire pipeline state yourself, and the famous hello triangle runs to hundreds of lines.

That verbosity is the whole lesson. All the work Vulkan makes you do by hand is work that older APIs and the driver were quietly doing on your behalf. Doing it explicitly, once, changed how I think about the GPU for good. It stopped being magic and became a machine with a model I could reason about.

![A flat-shaded cube with yellow, red, and green faces rendered on a black background by the Vulkan renderer.](/projects/vulkan-cube.png)

The cube above is the plainer of the two. A single mesh, lit and spun, once the pipeline finally held together. The gravity-field simulation at the top is the same renderer pushed further.

I wrote more about going low level, across both this and the OpenGL flight sim, in [a post on learning graphics from scratch](/blog/learning-graphics-from-scratch/).
