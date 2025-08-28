// Main JavaScript Module - Portfolio Functionality
class PortfolioManager {
    constructor() {
        this.currentFilter = 'all';
        this.projects = projectsData || [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderProjects();
        this.setupScrollAnimations();
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupProjectModal();
    }

    setupEventListeners() {
        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleFilterClick(e.target);
            });
        });

        // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', this.toggleMobileMenu.bind(this));
        }

        // Escape key to close mobile menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMobileMenu();
            }
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.handleSmoothScroll.bind(this));
        });

        // Performance optimization - lazy loading for project images
        if ('IntersectionObserver' in window) {
            this.setupLazyLoading();
        }
    }

    handleFilterClick(button) {
        const filter = button.dataset.filter;
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        // Update current filter and render
        this.currentFilter = filter;
        this.renderProjects();

        // Analytics tracking (if implemented)
        this.trackFilterUsage(filter);
    }

    renderProjects() {
        const container = document.getElementById('projectsGrid');
        if (!container) return;

        const filteredProjects = this.filterProjects();
        
        // Clear container
        container.innerHTML = '';

        if (filteredProjects.length === 0) {
            this.renderEmptyState(container);
            return;
        }

        // Render projects with stagger animation
        filteredProjects.forEach((project, index) => {
            const projectElement = this.createProjectElement(project);
            projectElement.style.animationDelay = `${index * 0.1}s`;
            container.appendChild(projectElement);
        });

        // Trigger animations
        this.triggerEntranceAnimations();
    }

    filterProjects() {
        if (this.currentFilter === 'all') {
            return this.projects.sort((a, b) => b.year - a.year);
        }
        
        return this.projects
            .filter(project => project.category === this.currentFilter)
            .sort((a, b) => b.year - a.year);
    }

    createProjectElement(project) {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-card fade-in';
        projectDiv.dataset.category = project.category;
        
        projectDiv.innerHTML = `
            <div class="project-image" aria-label="${project.title} preview">
                <img src="${project.image}" alt="${project.title} preview" class="project-img" loading="lazy" onerror="this.src='assets/images/placeholder.svg'">
                <div class="project-overlay">
                    <div class="project-actions">
                        ${project.github ? `
                            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-action-btn">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        ` : ''}
                        ${project.demo ? `
                            <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-action-btn">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                                </svg>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-meta">
                    <span class="project-category">${this.getCategoryLabel(project.category)}</span>
                    <span class="project-year">${project.year}</span>
                </div>
                <div class="project-tech-compact">
                    ${project.technologies.slice(0, 3).map(tech => `<span class="tech-dot" title="${tech}"></span>`).join('')}
                    ${project.technologies.length > 3 ? `<span class="tech-more">+${project.technologies.length - 3}</span>` : ''}
                </div>
                <button class="project-details-btn" data-project-id="${project.id}">
                    Ver detalhes
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
                    </svg>
                </button>
            </div>
        `;

        return projectDiv;
    }

    getCategoryLabel(category) {
        const labels = {
            'frontend': 'Frontend',
            'backend': 'Backend', 
            'fullstack': 'Full Stack'
        };
        return labels[category] || category;
    }

    renderEmptyState(container) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                </div>
                <h3>Nenhum projeto encontrado</h3>
                <p>Tente selecionar outro filtro para ver mais projetos.</p>
            </div>
        `;
    }

    triggerEntranceAnimations() {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 100);
        });
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe sections for scroll animations
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    setupMobileMenu() {
        const nav = document.querySelector('.nav-menu');
        if (nav) {
            // Close menu when clicking on links
            nav.addEventListener('click', (e) => {
                if (e.target.classList.contains('nav-link')) {
                    this.closeMobileMenu();
                }
            });
        }
    }

    toggleMobileMenu() {
        const nav = document.querySelector('.nav-menu');
        const toggle = document.querySelector('.mobile-menu-toggle');
        
        if (nav && toggle) {
            nav.classList.toggle('active');
            toggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        }
    }

    closeMobileMenu() {
        const nav = document.querySelector('.nav-menu');
        const toggle = document.querySelector('.mobile-menu-toggle');
        
        if (nav && toggle) {
            nav.classList.remove('active');
            toggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }

    setupSmoothScrolling() {
        // Enhanced smooth scrolling with offset for fixed header
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.handleSmoothScroll.bind(this));
        });
    }

    handleSmoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = 80; // Fixed header height
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    setupLazyLoading() {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    trackFilterUsage(filter) {
        // Analytics tracking placeholder
        if (typeof gtag !== 'undefined') {
            gtag('event', 'filter_projects', {
                'event_category': 'Portfolio',
                'event_label': filter,
                'value': 1
            });
        }
        
        console.log(`Filter used: ${filter}`);
    }

    setupProjectModal() {
        const modal = document.getElementById('projectModal');
        const overlay = modal.querySelector('.modal-overlay');
        const closeBtn = modal.querySelector('.modal-close');

        // Close modal events
        overlay.addEventListener('click', () => this.closeModal());
        closeBtn.addEventListener('click', () => this.closeModal());
        
        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.closeModal();
            }
        });

        // Project details button clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.project-details-btn')) {
                const projectId = parseInt(e.target.closest('.project-details-btn').dataset.projectId);
                this.openProjectModal(projectId);
            }
        });
    }

    openProjectModal(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) return;

        const modal = document.getElementById('projectModal');
        
        // Populate modal content
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalImage').alt = project.title + ' preview';
        
        document.getElementById('modalCategory').textContent = this.getCategoryLabel(project.category);
        document.getElementById('modalCategory').className = `modal-category-badge ${project.category}`;
        document.getElementById('modalYear').textContent = project.year;
        
        document.getElementById('modalDescription').textContent = project.description;
        
        // Tech list
        const techList = document.getElementById('modalTechList');
        techList.innerHTML = project.technologies.map(tech => 
            `<span class="modal-tech-tag">${tech}</span>`
        ).join('');
        
        // Links
        const linksContainer = document.getElementById('modalLinks');
        linksContainer.innerHTML = `
            ${project.github ? `
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="modal-link-btn github">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Ver Código
                </a>
            ` : ''}
            ${project.demo ? `
                <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="modal-link-btn demo">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                    Ver Demo
                </a>
            ` : ''}
        `;

        // Show modal
        modal.classList.add('active');
        document.body.classList.add('modal-open');
        modal.setAttribute('aria-hidden', 'false');
    }

    closeModal() {
        const modal = document.getElementById('projectModal');
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
        modal.setAttribute('aria-hidden', 'true');
    }

    // Performance monitoring
    measurePerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                const perfData = performance.timing;
                const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`Page load time: ${loadTime}ms`);
            });
        }
    }

    // Accessibility improvements
    setupAccessibility() {
        // Add keyboard navigation support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    // Error handling
    handleError(error, context) {
        console.error(`Error in ${context}:`, error);
        
        // Send error to monitoring service (placeholder)
        if (typeof Sentry !== 'undefined') {
            Sentry.captureException(error, { tags: { context } });
        }
    }
}

// Initialize portfolio when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    try {
        const portfolio = new PortfolioManager();
        portfolio.measurePerformance();
        portfolio.setupAccessibility();
        
        // Make portfolio instance globally available for debugging
        window.portfolio = portfolio;
    } catch (error) {
        console.error('Failed to initialize portfolio:', error);
    }
});

// Service Worker registration for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}