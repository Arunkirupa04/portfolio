import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { education } from '../../data/portfolio-data';
import './Education.css';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo('.education-title-wrapper',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.education-title-wrapper',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate university card
      gsap.fromTo('.university-card',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.university-card',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate certification cards
      gsap.fromTo('.certification-card',
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.certifications-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate achievement cards
      gsap.fromTo('.achievement-card',
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.achievements-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" className="education section" ref={sectionRef}>
      <div className="education-bg">
        <div className="education-pattern"></div>
      </div>

      <div className="container">
        <div className="education-title-wrapper">
          <h2 className="section-title">
            Education & <span>Achievements</span>
          </h2>
          <p className="section-subtitle">
            My academic journey and recognitions
          </p>
        </div>

        <div className="education-content">
          {/* University Section */}
          <div className="university-section">
            <div className="university-card">
              <div className="university-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div className="university-info">
                <h3 className="university-name">{education.university.name}</h3>
                <p className="university-degree">{education.university.degree}</p>
                <span className="university-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {education.university.location}
                </span>
              </div>
              <div className="university-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-circle"></div>
                <div className="decoration-circle"></div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="certifications-section">
            <h3 className="subsection-title">
              <span className="title-icon">📜</span>
              Certifications
            </h3>
            <div className="certifications-grid">
              {education.certifications.map((cert) => (
                <div key={cert.id} className="certification-card">
                  <div className="cert-badge">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="8" r="6"/>
                      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                  </div>
                  <div className="cert-info">
                    <h4 className="cert-title">{cert.title}</h4>
                    <div className="cert-meta">
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="achievements-section">
            <h3 className="subsection-title">
              <span className="title-icon">🏆</span>
              Achievements & Activities
            </h3>
            <div className="achievements-grid">
              {education.achievements.map((achievement) => (
                <div key={achievement.id} className="achievement-card">
                  <span className="achievement-icon">{achievement.icon}</span>
                  <div className="achievement-info">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <span className="achievement-position">{achievement.position}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

