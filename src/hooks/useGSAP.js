import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Hook for scroll-triggered fade up animation
export const useScrollFadeUp = (options = {}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const { delay = 0, duration = 0.8, y = 50 } = options;
    
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        y 
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options]);
  
  return ref;
};

// Hook for staggered children animation
export const useStaggerChildren = (options = {}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const { stagger = 0.1, duration = 0.6, y = 30, childSelector = ':scope > *' } = options;
    const children = element.querySelectorAll(childSelector);
    
    gsap.fromTo(children,
      {
        opacity: 0,
        y
      },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options]);
  
  return ref;
};

// Hook for text reveal animation
export const useTextReveal = (options = {}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const { delay = 0, duration = 1, stagger = 0.02 } = options;
    const text = element.textContent;
    element.innerHTML = '';
    
    // Split text into spans
    text.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      element.appendChild(span);
    });
    
    const chars = element.querySelectorAll('span');
    
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options]);
  
  return ref;
};

// Hook for parallax effect
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    gsap.to(element, {
      y: () => speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed]);
  
  return ref;
};

// Hook for floating animation
export const useFloating = (options = {}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const { duration = 3, y = 15 } = options;
    
    gsap.to(element, {
      y: -y,
      duration,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
    
    return () => {
      gsap.killTweensOf(element);
    };
  }, [options]);
  
  return ref;
};

// Hook for scale on scroll
export const useScaleOnScroll = (options = {}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const { scale = 0.9, duration = 0.6 } = options;
    
    gsap.fromTo(element,
      {
        scale,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options]);
  
  return ref;
};

// Utility to refresh ScrollTrigger
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

export { gsap, ScrollTrigger };

