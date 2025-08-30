import { useEffect } from 'react';

function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <div 
      id="projectModal" 
      className={`modal ${isOpen ? 'active' : ''}`} 
      role="dialog" 
      aria-labelledby="modalTitle" 
      aria-hidden={!isOpen}
    >
      <div className="modal-overlay" aria-label="Close modal" onClick={onClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h2 id="modalTitle" className="modal-project-title">{project.title}</h2>
          <button className="modal-close" aria-label="Fechar modal" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-image-container">
            <img 
              id="modalImage" 
              src={project.image} 
              alt={project.title} 
              className="modal-image" 
            />
          </div>
          <div className="modal-info">
            <div className="modal-meta">
              <span 
                id="modalCategory" 
                className={`modal-category-badge ${project.category}`}
              >
                {project.category}
              </span>
              <span id="modalYear" className="modal-year">{project.year}</span>
            </div>
            <p id="modalDescription" className="modal-description">
              {project.description}
            </p>
            <div className="modal-tech">
              <h4 className="modal-tech-title">Tecnologias utilizadas:</h4>
              <div id="modalTechList" className="modal-tech-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="modal-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div id="modalLinks" className="modal-actions">
              {project.github && (
                <a 
                  href={project.github} 
                  className="modal-link-btn github" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  className="modal-link-btn demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;