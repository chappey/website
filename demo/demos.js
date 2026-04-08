const demos = [
  {
    title: "Job Hunt Simulator",
    url: "job-hunt.html",
    description: "An addictive, satirical clicker game about the CS grad experience."
  },
    {
    title: "Game of Life",
    url: "game-of-life.html",
    description: "A high-fidelity implementation of Conway's cellular automaton."
  },
  {
    title: "Solar System",
    url: "solar-system.html",
    description: "A simulation of planets orbiting the sun."
  },


];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = demos;
} else {
  window.demos = demos;
}
