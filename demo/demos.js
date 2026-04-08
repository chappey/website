const demos = [
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
