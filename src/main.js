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
});


document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded and ready.');
  });
  
