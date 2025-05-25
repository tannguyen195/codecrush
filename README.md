#  A React + Three Fiber Interactive Scene

A 3D interactive experience built with **React**, **Vite**, and **@react-three/fiber**, featuring dynamic state management, physics, animations, camera lerping, and sound. Users can interact with the world, change themes, and control the character with keyboard input.

---

## 🚀 Tech Stack

- **ReactJS** + **Vite** – Lightning-fast frontend framework
- **TypeScript** – For type safety and developer tooling
- **@react-three/fiber** – React renderer for Three.js
- **@react-three/drei** – Useful helpers for R3F
- **@react-three/rapier** – Realistic physics and collisions
- **Blender** – Custom 3D modeling and animation
- ** HTMLAudioElement** – Sound effects and music
---

## 🎮 Features

### 🧠 State Management
- **Context API** powers global state (e.g. day/night mode, game start, donut-eating state).

### 🧑‍💻 Interactions
- Eating donuts alters the character's outlook and state.
- Click or trigger actions change world behavior dynamically.

### 🎥 Camera Lerping
- Smooth third-person camera transitions follow the player with damping/lerping logic.

### 🧱 Physics & Collision
- Integrated with **Rapier physics** for rigid bodies and realistic collisions.

### 🌗 Day/Night Toggle
- Toggle button to smoothly switch between **sunny day** and **moody night** lighting environments.

### 🔊 Sounds
- Background music and interactive sound effects.

### ⌨️ Controls
- `W` / `↑` – Move Forward  
- `Shift` (hold) – Sprint  
- More keys can be added via `useKeyboardControls` (Drei).

### 🧑‍🎨 Blender Integration
- Models and animations are created and rigged in **Blender**, then exported to glTF and imported via `@react-three/fiber`.

---


