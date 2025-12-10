import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from '../../data/portfolio-data';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.experience-title-wrapper',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.experience-title-wrapper',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.timeline-line-fill',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.timeline-item',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.timeline-dot',
        { scale: 0 },
        {
          scale: 1,
          duration: 0.4,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="experience section" ref={sectionRef}>
      <div className="experience-bg">
        <div className="experience-gradient"></div>
      </div>

      <div className="container">
        <div className="experience-title-wrapper">
          <h2 className="section-title">
            Work <span>Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and growth as a developer
          </p>
        </div>

        <div className="experience-content">
          <div className="timeline" ref={timelineRef}>
            <div className="timeline-line">
              <div className="timeline-line-fill"></div>
            </div>

            {experience.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-dot">
                  <span className="dot-inner"></span>
                </div>

                <div className="timeline-card">
                  <div className="card-header">
                    <div className="card-meta">
                      <span className="card-period">{exp.period}</span>
                      <span className="card-type">{exp.type}</span>
                    </div>
                    <h3 className="card-title">{exp.title}</h3>
                    <div className="card-company">
                      <span className="company-name">{exp.company}</span>
                      <span className="company-location">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="card-description">{exp.description}</p>

                  <div className="card-highlights">
                    {exp.highlights.map((highlight, index) => (
                      <div key={index} className="highlight-item">
                        <span className="highlight-bullet">▹</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-tech">
                    {exp.techStack.map((tech, index) => (
                      <span key={index} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="experience-sidebar">
            <div className="sidebar-card">
              <div className="sidebar-icon">💼</div>
              <h4 className="sidebar-title">Open to Opportunities</h4>
              <p className="sidebar-text">
                Interested in new challenges and exciting projects.
              </p>
              <a href="#contact" className="sidebar-link">
                Get in Touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
