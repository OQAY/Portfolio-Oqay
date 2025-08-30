// Projects Data Configuration
const projectsData = [
    {
        id: 1,
        title: "Sistema de E-commerce Lorenviê",
        description: "Plataforma completa de e-commerce com carrinho de compras, sistema de pagamento integrado e painel administrativo. Incluindo análise de vendas e sistema de avaliações.",
        category: "fullstack",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
        image: "assets/images/lorenvie.png",
        github: "https://github.com/OQAY/",
        demo: "https://www.lorenviê.com.br",
        featured: true,
        status: "completed",
        year: 2025
    },
    {
        id: 2,
        title: "Império Digital Menu - Restaurant App",
        description: "Cardápio digital mobile-first para restaurante, oferecendo experiência premium de seleção de pedidos similar aos grandes apps de delivery. Interface intuitiva com categorização de produtos, visualização detalhada com fotos, sistema de carrinho e checkout otimizado. Design responsivo focado em conversão e usabilidade móvel.",
        category: "fullstack",
        technologies: ["React", "Tailwind CSS", "Mobile-First Design", "Vercel", "Responsive UI"],
        image: "assets/images/cardapio-digital.jpg",
        github: "https://github.com/OQAY/",
        demo: "https://imperio-cardapio.vercel.app",
        featured: false,
        status: "completed",
        year: 2025
    },
    {
        id: 3,
        title: "Sistema de Arbitragem de Cryptomoedas",
        description: "Sistema de arbitragem de cryptomoedas com interface intuitiva e funcionalidades avançadas para monitorar mercados e tomar decisões informadas.",
        category: "fullstack",
        technologies: ["React", "D3.js", "TypeScript", "Tailwind CSS"],
        image: "assets/images/crypto-arb.png",
        github: "https://github.com/OQAY/",
        demo: "https://cryptoarb123.vercel.app/pages/demo-arb.html",
        featured: true,
        status: "completed",
        year: 2025
    },
    {
        id: 4,
        title: "Kanban Board",
        description: "Kanban board com interface intuitiva e funcionalidades avançadas para gerenciar tarefas e projetos.",
        category: "Fullstack",
        technologies: ["Angular","NestJS", "TypeScript","PostgreSQL", "TypeORM", "Angular Material", "JWT", "Swagger"],
        image: "assets/images/kanban.png",
        github: "https://github.com/OQAY/",
        demo: "https://kanban-oqay.vercel.app",
        featured: true,
        status: "completed",
        year: 2025
    },
    {
        id: 5,
        title: "Sistema de otimização de Frota - Digital Twin",
        description: "Gêmeo digital para otimização de rotas logísticas em tempo real. Sistema adaptativo que evoluiu de 40% para 0% de atrasos, garantindo 100% de utilização da frota. Implementa algoritmos de roteamento inteligente, políticas dinâmicas de decisão e simulação temporal para maximizar eficiência operacional.",
        category: "backend",
        technologies: ["Python", "Optimization Algorithms", "Digital Twin", "Real-time Simulation", "Data Structures"],
        image: "assets/images/digital-twin-fleet.jpg",
        github: "https://github.com/OQAY/",
        demo: "https://recharts.org/en-US/examples",
        featured: true,
        status: "completed",
        year: 2025
    },
    {
        id: 7,
        title: "Sports Betting Automation Bot",
        description: "Bot de apostas esportivas com execução automática de entradas e atualização de dados em tempo real. Web scraper para coleta de odds e eventos, integração com planilhas para tracking de resultados. Sistema 100% automatizado com processamento instantâneo de dados.",
        category: "backend",
        technologies: ["Python", "Web Scraping", "API REST", "Real-time Processing", "Data Automation"],
        image: "assets/images/sport-betting-automation-bot.png",
        github: "https://github.com/OQAY/",
        demo: "https://recharts.org/en-US/examples",
        featured: true,
        status: "completed",
        year: 2024
    },
    {
        id: 8,
        title: "Ferramentas de automação para gestão de planilhas corporativas",
        description: "Ferramentas de automação Python para gestão de planilhas corporativas. Scripts para geração automática de relatórios, backups programados e padronização de dados. Reduziu o tempo de tarefas manuais e eliminou inconsistências nos registros.",
        category: "backend",
        technologies: ["Python", "Pandas", "OpenPyXL", "Data Processing", "File Automation"],
        image: "assets/images/python-bot.png",
        github: "https://github.com/OQAY/",
        demo: "https://recharts.org/en-US/examples",
        featured: true,
        status: "completed",
        year: 2024
    },
    {
        id: 6,
        title: "Geração e renomeação de PDFs em cartórios e órgãos de registro",
        description: "Sistema de automação para geração e renomeação de PDFs em cartórios e órgãos de registro. Elimina tarefas repetitivas com Selenium, integração OCR via Tesseract para extração de dados, e APIs internas. Reduziu em 70% o tempo de processamento e aumentou a confiabilidade nas entregas.",
        category: "backend",
        technologies: ["Python", "Selenium", "Tesseract OCR", "PDF Processing"],
        image: "assets/images/python-pastel.jpg",
        github: "https://github.com/OQAY/",
        demo: "https://recharts.org/en-US/examples",
        featured: true,
        status: "completed",
        year: 2024
    }

    
    /* TEMPLATE PARA NOVOS PROJETOS - COPIE E PREENCHA
    ,{
        id: ,
        title: "titulo",
        description: "essa é a descrição",
        category: "frontend backend ou fullstack",
        technologies: ["Angular"],
        image: "assets/images/",
        github: "https://github.com/OQAY/",
        demo: "https://recharts.org/en-US/examples",
        featured: true,
        status: "completed",
        year: 2024
    }
    */
];

// Export for ES6 modules (React)
export default projectsData;