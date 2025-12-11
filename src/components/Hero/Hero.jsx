import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { personalInfo } from '../../data/portfolio-data';
import aruPhoto from '../../assets/aru-photo.png';
import TextScramble from './TextScramble';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const badgesRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Initial states
      gsap.set([titleRef.current, subtitleRef.current, descRef.current, ctaRef.current], {
        opacity: 0,
        y: 50
      });
      gsap.set(imageRef.current, { opacity: 0, scale: 0.9 });
      gsap.set('.floating-badge', { opacity: 0, scale: 0.5 });

      // Animation sequence
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.2)
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.4)
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.6)
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.8)
        .to(imageRef.current, { opacity: 1, scale: 1, duration: 1 }, 0.3)
        .to('.floating-badge', {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)'
        }, 0.8);

      // Floating animation for badges
      gsap.to('.floating-badge', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: {
          each: 0.3,
          from: 'random'
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Hello! there</span>
          </div>

          <h1 className="hero-title" ref={titleRef}>
            I'm <span className="hero-name">{personalInfo.nickname}</span>
            <span className="hero-name-full">{personalInfo.name.split(' ')[1]}</span>
          </h1>

          <h2 className="hero-subtitle" ref={subtitleRef}>
            I am a <span className="highlight">
              <TextScramble 
                text="Full-Stack Developer"
                scrambleSpeed={50}
              />
            </span>
          </h2>

          <p className="hero-description" ref={descRef}>
            {personalInfo.shortBio}
          </p>

          <div className="hero-cta" ref={ctaRef}>
            <a href="#contact" className="btn-primary" onClick={handleContactClick}>
              <span>Contact Me</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>

          <div className="hero-info">
            <div className="hero-info-item">
              <span className="info-label">EMAIL</span>
              <span className="info-value">{personalInfo.email}</span>
            </div>
            <div className="hero-info-item">
              <span className="info-label">LOCATION</span>
              <span className="info-value">{personalInfo.location}</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper" ref={imageRef}>
            <div className="hero-image-glow"></div>
            <div className="hero-image-border"></div>
            <img 
              src={aruPhoto} 
              alt={personalInfo.name}
              className="hero-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hero-image-placeholder">
              <span>{personalInfo.nickname[0]}</span>
            </div>
          </div>

          <div className="floating-badges" ref={badgesRef}>
            <div className="floating-badge badge-1">
              <span className="badge-icon">💻</span>
              <span>Full-Stack Developer</span>
            </div>
            <div className="floating-badge badge-2">
              <span className="badge-icon">🎨</span>
              <span>UI/UX Design</span>
            </div>
            <div className="floating-badge badge-3">
              <span className="badge-icon">📱</span>
              <span>Mobile Development</span>
            </div>
            <div className="floating-badge badge-4">
              <span className="badge-icon">⚡</span>
              <span>Rust Developer</span>
            </div>
          </div>

          <div className="orbit-rings">
            <div className="orbit-ring ring-1"></div>
            <div className="orbit-ring ring-2"></div>
          </div>
        </div>
      </div>

      <button className="scroll-indicator" onClick={handleScrollDown} aria-label="Scroll down">
        <div className="scroll-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 10l5 5 5-5"/>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 10l5 5 5-5"/>
          </svg>
        </div>
      </button>
    </section>
  );
};

export default Hero;

