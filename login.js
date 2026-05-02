// Initialize Particles (Same as main page for consistency)
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#d4af37" }, // Gold particles
    "shape": { "type": "circle" },
    "opacity": { "value": 0.3, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
    "size": { "value": 3, "random": true, "anim": { "enable": true, "speed": 2, "size_min": 0.1, "sync": false } },
    "line_linked": { "enable": false },
    "move": { "enable": true, "speed": 0.5, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
  },
  "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": true } },
  "retina_detect": true
});

// 3D Card Tilt Logic
document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector('.login-card');
  const scene = document.querySelector('.login-scene');

  // Track mouse movement over the scene
  scene.addEventListener('mousemove', (e) => {
    // Get mouse position relative to the center of the window
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25; // Division dampens the effect
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    // Apply the 3D rotation based on mouse position
    // Note: Rotate Y relies on X-axis movement, Rotate X relies on Y-axis movement
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  // Reset the card position when the mouse leaves the scene
  scene.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = 'transform 0.5s ease'; // Add smooth reset
  });

  // Remove the transition when the mouse re-enters so it tracks instantly again
  scene.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
  });
});
