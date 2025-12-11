import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import styles
import './styles/globals.css';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after all content is loaded
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Handle resize events
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    // ===== PARALLAX EFFECTS =====
    
    // Hero section parallax
    gsap.to('.hero-image-wrapper', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.to('.hero-content', {
      yPercent: -10,
      opacity: 0.3,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.to('.floating-badges', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      }
    });

    gsap.to('.hero-gradient', {
      yPercent: -30,
      scale: 1.2,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2
      }
    });

    // Section titles parallax
    gsap.utils.toArray('.section-title').forEach((title) => {
      gsap.fromTo(title, 
        { y: 50 },
        {
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: title,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        }
      );
    });

    // Skills orbit parallax
    gsap.to('.orbit-container', {
      yPercent: -15,
      rotation: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: '.skills',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2
      }
    });

    // Background gradients parallax
    gsap.utils.toArray('.skills-gradient, .about-gradient').forEach((gradient) => {
      gsap.to(gradient, {
        yPercent: 30,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: gradient.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        }
      });
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      </div>
  );
}

export default App;
