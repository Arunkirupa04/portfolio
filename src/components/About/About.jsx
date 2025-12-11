import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../../data/portfolio-data';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies Mastered' },
    { number: '4', label: 'Hackathons' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo('.about-title-wrapper',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.about-title-wrapper',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate content columns
      gsap.fromTo('.about-text',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.about-details',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.about-details',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate stats
      gsap.fromTo('.stat-card',
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate personality traits
      gsap.fromTo('.trait-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.traits-list',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="about-bg">
        <div className="about-gradient"></div>
      </div>
      <div className="container">
        <div className="about-title-wrapper">
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know the person behind the code
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-intro">
              {personalInfo.bio}
            </p>
            
            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">📍</div>
                <div className="highlight-content">
                  <span className="highlight-label">Based in</span>
                  <span className="highlight-value">{personalInfo.location}</span>
                </div>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">💼</div>
                <div className="highlight-content">
                  <span className="highlight-label">Currently at</span>
                  <span className="highlight-value">{personalInfo.company}</span>
                </div>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">🌐</div>
                <div className="highlight-content">
                  <span className="highlight-label">Languages</span>
                  <span className="highlight-value">{personalInfo.languages.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-details">
            <div className="traits-section">
              <h3 className="traits-title">What Defines Me</h3>
              <ul className="traits-list">
                {personalInfo.personality.map((trait, index) => (
                  <li key={index} className="trait-item">
                    <span className="trait-bullet"></span>
                    {trait}
                  </li>
                ))}
              </ul>
            </div>

            <div className="interests-section">
              <h3 className="interests-title">Interests & Passions</h3>
              <div className="interests-grid">
                {personalInfo.interests.map((interest, index) => (
                  <span key={index} className="interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats" ref={statsRef}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

