import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../../data/portfolio-data';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const orbitRef = useRef(null);

  const skillCategories = Object.values(skills);

  // Tech icons for the orbital display
  const techIcons = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'Rust', icon: '🦀', color: '#DEA584' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo('.skills-title-wrapper',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.skills-title-wrapper',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate skill cards with stagger
      gsap.fromTo('.skill-category',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate orbit center
      gsap.fromTo('.orbit-center',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: orbitRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate orbit items
      gsap.fromTo('.orbit-item',
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: orbitRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Continuous rotation for orbit rings
      gsap.to('.orbit-ring-inner', {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: 'none'
      });

      gsap.to('.orbit-ring-outer', {
        rotation: -360,
        duration: 45,
        repeat: -1,
        ease: 'none'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="skills-bg">
        <div className="skills-gradient"></div>
      </div>

      <div className="container">
        <div className="skills-title-wrapper">
          <h2 className="section-title">
            My <span>Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="skills-content">
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <div className="category-skills">
                  {category.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skills-orbit" ref={orbitRef}>
            <div className="orbit-container">
              <div className="orbit-center">
                <span className="orbit-center-text">Tech</span>
                <span className="orbit-center-subtext">Stack</span>
              </div>

              <div className="orbit-ring orbit-ring-inner">
                {techIcons.slice(0, 3).map((tech, index) => (
                  <div 
                    key={index} 
                    className="orbit-item"
                    style={{ 
                      '--rotation': `${index * 120}deg`,
                      '--delay': `${index * 0.1}s`
                    }}
                  >
                    <span className="orbit-icon">{tech.icon}</span>
                    <span className="orbit-name">{tech.name}</span>
                  </div>
                ))}
              </div>

              <div className="orbit-ring orbit-ring-outer">
                {techIcons.slice(3, 6).map((tech, index) => (
                  <div 
                    key={index} 
                    className="orbit-item"
                    style={{ 
                      '--rotation': `${index * 120 + 60}deg`,
                      '--delay': `${(index + 3) * 0.1}s`
                    }}
                  >
                    <span className="orbit-icon">{tech.icon}</span>
                    <span className="orbit-name">{tech.name}</span>
                  </div>
                ))}
              </div>

              <div className="orbit-decoration ring-1"></div>
              <div className="orbit-decoration ring-2"></div>
              <div className="orbit-decoration ring-3"></div>
            </div>
          </div>
        </div>

        <div className="skills-footer">
          <p className="skills-note">
            <span className="note-icon">💡</span>
            Always learning and exploring new technologies to stay ahead of the curve
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

