import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1200,
  once: true,
});

// GSAP Animation
gsap.from('.hero-content', {
  opacity: 0,
  duration: 2,
  y: -50,
});

// Simple example: Log a message when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded and ready.');
  });
  