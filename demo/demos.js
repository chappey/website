const demos = [
  {
    title: "Solar System",
    url: "solar-system.html",
    description: "A simulation of planets orbiting the sun."
  },
  {
    title: "Game of Life",
    url: "game-of-life.html",
    description: "A high-fidelity implementation of Conway's cellular automaton."
  },
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = demos;
} else {
  window.demos = demos;
}
