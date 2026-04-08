const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let width, height, stars = [];
const starCount = 400;
let baseSpeed = 0.05;

function init() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: (Math.random() - 0.5) * width,
      y: (Math.random() - 0.5) * height,
      z: Math.random() * width,
      pz: 0
    });
    stars[i].pz = stars[i].z;
  }
}

function animate() {
  ctx.fillStyle = '#050505';
  ctx.fillRect(0, 0, width, height);

  const centerX = width / 2;
  const centerY = height / 2;

  // Normalize speed based on width to prevent it being too fast on mobile
  const movement = (baseSpeed * width) / 15;

  stars.forEach(star => {
    star.z -= movement;

    if (star.z <= 0) {
      star.z = width;
      star.x = (Math.random() - 0.5) * width;
      star.y = (Math.random() - 0.5) * height;
      star.pz = star.z;
    }

    const x = (star.x / star.z) * width + centerX;
    const y = (star.y / star.z) * height + centerY;

    const px = (star.x / star.pz) * width + centerX;
    const py = (star.y / star.pz) * height + centerY;

    star.pz = star.z;

    const opacity = 1 - star.z / width;
    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(x, y);
    ctx.stroke();
  });

  requestAnimationFrame(animate);
}

window.addEventListener('resize', init);
init();
animate();
