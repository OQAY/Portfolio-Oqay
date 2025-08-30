import { useState, useEffect } from 'react';
import projectsData from '../data/projects';
import ProjectModal from '../components/ProjectModal';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Convert projectsData to array if needed
    const projectsArray = Array.isArray(projectsData) ? projectsData : [];
    setProjects(projectsArray);
  }, []);

  const filterProjects = () => {
    if (currentFilter === 'all') {
      return projects.sort((a, b) => b.year - a.year);
    }
    
    return projects
      .filter(project => project.category === currentFilter)
      .sort((a, b) => b.year - a.year);
  };

  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const filteredProjects = filterProjects();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            Todos
          </button>
          <button 
            className={`filter-btn ${currentFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => handleFilterClick('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${currentFilter === 'backend' ? 'active' : ''}`}
            onClick={() => handleFilterClick('backend')}
          >
            Backend
          </button>
          <button 
            className={`filter-btn ${currentFilter === 'fullstack' ? 'active' : ''}`}
            onClick={() => handleFilterClick('fullstack')}
          >
            Full Stack
          </button>
        </div>
        <div className="projects-grid" id="projectsGrid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="project-actions">
                    {project.github && (
                      <a href={project.github} className="project-action-btn" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="project-action-btn" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech-compact">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-dot" title={tech}></span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-more">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <button className="project-details-btn">
                  Ver detalhes
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}

export default Projects;