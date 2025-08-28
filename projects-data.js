// Projects Data Configuration
const projectsData = [
    {
        id: 1,
        title: "Sistema de E-commerce",
        description: "Plataforma completa de e-commerce com carrinho de compras, sistema de pagamento integrado e painel administrativo. Inclui gestão de estoque, análise de vendas e sistema de avaliações.",
        category: "fullstack",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
        image: "🛒",
        github: "https://github.com/usuario/ecommerce-system",
        demo: "https://ecommerce-demo.vercel.app",
        featured: true,
        status: "completed",
        year: 2024
    },
    {
        id: 2,
        title: "Dashboard Analytics",
        description: "Dashboard interativo para visualização de dados com gráficos em tempo real, filtros avançados e relatórios customizáveis. Processamento de grandes volumes de dados com performance otimizada.",
        category: "frontend",
        technologies: ["React", "D3.js", "TypeScript", "Tailwind CSS"],
        image: "📊",
        github: "https://github.com/usuario/analytics-dashboard",
        demo: "https://analytics-dashboard.vercel.app",
        featured: true,
        status: "completed",
        year: 2024
    },
    {
        id: 3,
        title: "API de Microserviços",
        description: "Arquitetura de microserviços escalável com autenticação JWT, rate limiting, documentação automática e monitoramento. Inclui testes automatizados e CI/CD.",
        category: "backend",
        technologies: ["Node.js", "Express", "Redis", "MongoDB", "Docker", "AWS"],
        image: "⚡",
        github: "https://github.com/usuario/microservices-api",
        demo: "https://api-docs.swagger.io",
        featured: true,
        status: "completed",
        year: 2024
    },
    {
        id: 4,
        title: "App de Gestão de Tarefas",
        description: "Aplicativo de produtividade com funcionalidades de drag & drop, colaboração em equipe, notificações push e sincronização offline. Interface intuitiva e responsiva.",
        category: "fullstack",
        technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "PWA"],
        image: "✅",
        github: "https://github.com/usuario/task-manager",
        demo: "https://task-manager.vercel.app",
        featured: false,
        status: "completed",
        year: 2023
    },
    {
        id: 5,
        title: "Landing Page Responsiva",
        description: "Landing page moderna e totalmente responsiva com animações CSS, formulário de contato funcional e otimização para SEO. Design focado em conversão.",
        category: "frontend",
        technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Netlify Forms"],
        image: "🎨",
        github: "https://github.com/usuario/responsive-landing",
        demo: "https://responsive-landing.netlify.app",
        featured: false,
        status: "completed",
        year: 2023
    },
    {
        id: 6,
        title: "Sistema de Autenticação",
        description: "Sistema robusto de autenticação e autorização com múltiplos provedores OAuth, two-factor authentication e gerenciamento de sessões seguras.",
        category: "backend",
        technologies: ["Node.js", "Passport.js", "Redis", "JWT", "OAuth2"],
        image: "🔐",
        github: "https://github.com/usuario/auth-system",
        demo: "https://auth-demo.herokuapp.com",
        featured: false,
        status: "completed",
        year: 2023
    },
    {
        id: 7,
        title: "Chat em Tempo Real",
        description: "Aplicação de chat com WebSockets, salas privadas e públicas, compartilhamento de arquivos e histórico de mensagens. Suporte a emojis e notificações.",
        category: "fullstack",
        technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Cloudinary"],
        image: "💬",
        github: "https://github.com/usuario/realtime-chat",
        demo: "https://realtime-chat.herokuapp.com",
        featured: false,
        status: "completed",
        year: 2023
    },
    {
        id: 8,
        title: "PWA de Clima",
        description: "Progressive Web App para previsão do tempo com dados de geolocalização, gráficos interativos, notificações push e funcionamento offline.",
        category: "frontend",
        technologies: ["JavaScript", "PWA", "Service Workers", "Chart.js", "Weather API"],
        image: "🌤️",
        github: "https://github.com/usuario/weather-pwa",
        demo: "https://weather-pwa.netlify.app",
        featured: false,
        status: "completed",
        year: 2023
    },
    {
        id: 9,
        title: "Sistema de Blog",
        description: "CMS completo para blog com editor WYSIWYG, sistema de comentários, categorias e tags, SEO otimizado e painel administrativo.",
        category: "fullstack",
        technologies: ["Next.js", "Sanity CMS", "Vercel", "TypeScript"],
        image: "📝",
        github: "https://github.com/usuario/blog-cms",
        demo: "https://blog-cms.vercel.app",
        featured: false,
        status: "completed",
        year: 2022
    },
    {
        id: 10,
        title: "Portfolio Anterior",
        description: "Primeira versão do portfolio pessoal com design clean e apresentação de projetos anteriores. Foco em performance e acessibilidade.",
        category: "frontend",
        technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
        image: "🎯",
        github: "https://github.com/usuario/portfolio-v1",
        demo: "https://usuario.github.io/portfolio-v1",
        featured: false,
        status: "archived",
        year: 2022
    }
];

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectsData };
}