# Zombie Must Survive

[![Deploy to GitHub Pages](https://github.com/elumixor/Zombie-Must-Survive/actions/workflows/deploy.yml/badge.svg)](https://github.com/elumixor/Zombie-Must-Survive/actions/workflows/deploy.yml)

A roguelike survival game where you play as a zombie fending off waves of enemies. Built for the browser with PixiJS and TypeScript.

**[Play now](https://elumixor.github.io/Zombie-Must-Survive/)**

## Gameplay

- Survive increasingly difficult waves of enemies
- Collect XP crystals and gold from defeated foes
- Level up and choose from 10+ unique skills: Bite, Boomerang, Fart, Scream, Acid Pool, Beholder, and more
- Upgrade passive stats like movement speed, health regeneration, and magnet range
- Multiple weapon types: melee, projectile, aura, and ray attacks

## Tech Stack

- **Renderer:** [PixiJS](https://pixijs.com/) 7 with [Spine](http://esotericsoftware.com/spine-in-depth) animations
- **Language:** TypeScript
- **Build:** [Vite](https://vitejs.dev/) + [Bun](https://bun.sh/)
- **Animation:** GSAP
- **Audio:** Howler.js
- **Architecture:** Custom DI, RxJS, component-based actor system

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Production build
bun run build
```
