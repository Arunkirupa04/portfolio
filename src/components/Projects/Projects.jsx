import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/portfolio-data';
import './Projects.css';

// Import project images
import projectThrifting from '../../assets/project-thrifting.png';
import projectPremiere from '../../assets/project-premiere.png';
import projectFurniture from '../../assets/project-furniture.png';

gsap.registerPlugin(ScrollTrigger);

// Map project IDs to imported images
const projectImages = {
  1: projectThrifting,
  2: projectPremiere,
  3: null, // Spotify project - no image yet
  4: projectFurniture,
};

const Projects = () => {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(p => p.featured)
      : projects;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo('.projects-title-wrapper',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.projects-title-wrapper',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate filter buttons
      gsap.fromTo('.projects-filter',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: '.projects-filter',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate project cards
      gsap.fromTo('.project-card',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Re-animate cards when filter changes
  useEffect(() => {
    gsap.fromTo('.project-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1
      }
    );
  }, [filter]);

  return (
    <section id="projects" className="projects section" ref={sectionRef}>
      <div className="container">
        <div className="projects-title-wrapper">
          <h2 className="section-title">
            My <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my work, from concept to completion
          </p>
        </div>

        <div className="projects-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image">
                {projectImages[project.id] ? (
                  <img 
                    src={projectImages[project.id]} 
                    alt={project.title}
                    className="project-img"
                  />
                ) : (
                  <div className="project-image-placeholder">
                    <span className="placeholder-icon">🚀</span>
                    <span className="placeholder-text">{project.title}</span>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View code">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View live">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                {project.featured && (
                  <span className="project-badge">Featured</span>
                )}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>

                {project.type && (
                  <span className="project-type">{project.type}</span>
                )}

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.techStack.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tech-tag tech-more">+{project.techStack.length - 4}</span>
                  )}
                </div>

                <div className="project-features">
                  {project.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-bullet">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="project-footer">
                  <span className="project-role">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    {project.role}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta">
          <a href="#contact" className="btn-secondary">
            <span>Let's Work Together</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
