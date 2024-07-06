import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';

AOS.init({
  duration: 1200,
  once: true,
});

gsap.from('.hero-content', {
  opacity: 0,
  duration: 2,
  y: -50,
  ease: 'power3.out',
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded and ready.');
  });

  gsap.from('h1', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
  });
  
  gsap.from('p', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5, 
    ease: 'power3.out',
  });
