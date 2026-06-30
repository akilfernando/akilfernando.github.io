---
title: "OpenGL Flight Sim"
year: 2024
role: "Personal"
category: "game"
stack: ["C++", "OpenGL"]
blurb: "Flight simulator built directly on the OpenGL API, exploring real-time rendering and flight dynamics."
links: []
---

A flight simulator written directly against the OpenGL API in C++, with no engine underneath it. Just the API, some math, and a window.

I built it to understand the graphics pipeline from the inside: vertex buffers, the shader stages, transformation and projection matrices, the depth buffer. Writing a flight sim meant living inside the camera and projection math until it stopped being abstract and started being something I could reason about. It never became a real game, and that was never the point. It was about removing a layer of mystery between me and the GPU.

I wrote about what I learned here, alongside the Vulkan project, in [a post on learning graphics from scratch](/blog/learning-graphics-from-scratch/).
