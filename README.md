# Portfolio Profissional

Um portfolio moderno e escalável desenvolvido com HTML5, CSS3 e JavaScript vanilla, seguindo as melhores práticas de desenvolvimento e design responsivo.

## 🚀 Como executar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/portfolio.git

# Entre no diretório
cd portfolio

# Abra com um servidor local (ex: Live Server no VS Code)
# ou simplesmente abra o index.html em um navegador moderno
```

## ✨ Características

- **Design Minimalista**: Interface limpa com paleta de cores pastéis
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Performance Otimizada**: Carregamento rápido e animações suaves
- **Acessível**: Seguindo diretrizes WCAG 2.1
- **SEO Friendly**: Meta tags e estrutura otimizada para mecanismos de busca
- **Modular**: Fácil de manter e expandir

## 🎨 Design System

### Cores
- **Primary**: #B8A9C9 (Lavanda)
- **Secondary**: #96CEB4 (Verde Menta)  
- **Accent**: #FFEAA7 (Amarelo Pastel)
- **Background**: #FAF3F0 (Off-white)
- **Text**: #2D3436 (Cinza Escuro)

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🛠 Tecnologias

- HTML5 semântico
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript ES6+ (Modules, Classes)
- Git para controle de versão

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html              # Estrutura principal
├── styles.css              # Estilos e design system
├── main.js                 # Lógica principal da aplicação
├── projects-data.js        # Dados dos projetos
├── README.md              # Documentação
└── ROADMAP.md            # Planejamento e progresso
```

## 🎯 Funcionalidades

### Sistema de Projetos
- Filtros por categoria (Frontend, Backend, Full Stack)
- Renderização dinâmica
- Links para repositório e demo
- Indicadores de tecnologias utilizadas

### Navegação
- Menu responsivo com hamburger no mobile
- Scroll suave entre seções
- Indicadores visuais de seção ativa

### Performance
- Lazy loading de conteúdo
- Animações CSS otimizadas
- Código modular e reutilizável

## 📱 Responsividade

O portfolio é totalmente responsivo com breakpoints otimizados:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px  
- **Mobile**: < 768px

## 🔧 Personalização

### Adicionar Novos Projetos
Edite o arquivo `projects-data.js` e adicione um novo objeto no array:

```javascript
{
    id: 11,
    title: "Seu Novo Projeto",
    description: "Descrição do projeto...",
    category: "fullstack", // frontend, backend, fullstack
    technologies: ["React", "Node.js"],
    image: "🚀",
    github: "https://github.com/usuario/projeto",
    demo: "https://projeto.vercel.app",
    featured: true,
    status: "completed",
    year: 2024
}
```

### Personalizar Cores
Edite as variáveis CSS no início do arquivo `styles.css`:

```css
:root {
  --primary-color: #B8A9C9;
  --secondary-color: #96CEB4;
  /* outras variáveis... */
}
```

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌐 Deploy

### GitHub Pages
```bash
# Push para o repositório
git push origin main

# Ative o GitHub Pages nas configurações do repositório
# Selecione 'Deploy from a branch' e escolha 'main'
```

### Netlify
```bash
# Conecte seu repositório GitHub ao Netlify
# Build command: (deixe vazio)
# Publish directory: / (raiz)
```

### Vercel
```bash
# Instale a CLI do Vercel
npm i -g vercel

# Execute o deploy
vercel --prod
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Desenvolvedor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Perfil](https://linkedin.com/in/seu-perfil)
- Email: seu.email@exemplo.com

---

⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!