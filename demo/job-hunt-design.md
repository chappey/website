# Job Hunt Simulator: Design & Technical Direction

This document outlines the architecture, satirical "vibe," and technical roadmap for the **CS Job Hunt Simulator** clicker game.

## 1. Project Concept
The **CS Job Hunt Simulator** is an addictive, satirical clicker game built to mock the modern tech job market. The primary currency is `Applications Sent`, and the "end game" is a mirage of a job offer that inevitably results in more ghosting.

### The Vibe: "Caffeinated Desperation"
- **Aesthetic**: Minimalist "hacker-premium" (dark background, neon accents, JetBrains Mono font).
- **Contrast**: The game intentionally starts in high-contrast Light Mode to induce eye strain (representing the "pre-employment" struggle), with Dark Mode gated behind a 1,000-application paywall.
- **Tone**: Cynical, sarcastic, and self-referential to tech tropes (e.g., "AI Slop" upgrades, O(log n) whiteboard prestige).

## 2. Technical Architecture

### Single-File Implementation
For speed and portability, the entire game resides in [job-hunt.html](file:///c:/Users/natha/src/website/demo/job-hunt.html). 
- **HTML5**: Semantic tags for the three-column dashboard layout.
- **CSS3 (Grid/Flex)**: Responsive layout with high-fidelity glassmorphism.
- **Vanilla JS**: No frameworks. Uses a simple state object and DOM manipulation for reactivity.

### State Management
Progress is stored in a single `state` object and persisted via `localStorage`:
```javascript
const state = {
    apps: 0,
    appsTotal: 0,
    clickValue: 1,
    autoValue: 0,
    ghostRate: 0,
    prestigeCount: 0,
    upgrades: { ... },
    // etc.
};
```

### Game Loop
Uses `requestAnimationFrame` for smooth accumulation of automated applications (Applications per Second) and random market event triggers.

## 3. Core Mechanics

| Mechanic | Implementation | Satire Point |
| :--- | :--- | :--- |
| **Ghost Rate** | Linear growth based on apps; random trigger based on rate. | The "Tension" of sending resumes into a void. |
| **Prestige** | Resets `apps` but keeps `appsTotal` and grants random buffs. | Getting to a "Final Round" only to be ghosted. |
| **Experience Paradox** | Progress bar that counts *down* toward 0. | Becoming "overqualified" as you gain experience. |
| **Market Volatility** | Global timers with multipliers/debuffs (e.g., AI Hype). | The erratic nature of tech business cycles. |

## 4. Technical Direction for Future Agents

If you are picking up this project, consider these expansion points:

### [ ] Advanced "Boss Fights" (The Recruiter Screen)
Implement a mini-game when a user clicks "Interview."
- **Mechanic**: A rapid-fire CAPTCHA or a "Color Match" game representing "Culture Fit."
- **Failure**: Increases Ghost Rate by 50%.
- **Success**: Permanent 0.5x multiplier to Ghost Rate.

### [ ] Multi-Threaded Automation
Move the game logic into a **Web Worker** if the UI starts jittering with many particle effects (the floating text spawns).

### [ ] The "Offer" System
Add a separate currency `Hope` that drains over time. If `Hope` reaches 0, the game forces a "LinkedIn Post" (manual click) to regain it.

### [ ] Expanded Upgrades
- **"Referral from a FAANG Friend"**: A massive multiplier with a high cost but a low RNG chance of actually working.
- **"Resume Parser Optimizer"**: A logic gate that prevents certain "Rejection" triggers.

> [!IMPORTANT]
> **Keep it simple.** The game's charm comes from its minimal implementation and direct satire. Avoid adding complex 3D graphics or high-latency frameworks.
