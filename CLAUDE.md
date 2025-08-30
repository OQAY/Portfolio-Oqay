# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Professional portfolio website built with vanilla HTML, CSS, and JavaScript. Business/corporate theme with focus on services and enterprise solutions.

## Development Commands

This is a static website with no build process. To develop:

```bash
# Start local development server (choose one):
python -m http.server 8080          # Python 3
python -m SimpleHTTPServer 8080     # Python 2
npx http-server -p 8080             # Node.js
# Or use VS Code Live Server extension

# Open in browser:
start http://localhost:8080          # Windows
open http://localhost:8080           # macOS
```

## Architecture

### Core Files
- `index.html` - Single page application structure
- `main.js` - PortfolioManager class handling all functionality
- `projects-data.js` - Project/service data configuration
- `styles.css` - Complete design system and components

### JavaScript Architecture
```javascript
// Main class structure
class PortfolioManager {
  init()                    // Initialize all features
  setupEventListeners()     // Event handling
  setupIntersectionObserver() // Animations and lazy loading
  setupProjectModal()       // Modal system
  filterProjects()          // Category filtering
}
```

### CSS Design System
- CSS Custom Properties in `:root` define colors, spacing, typography
- Component classes follow pattern: `.section-name`, `.component-name`
- Responsive breakpoints: 768px (tablet), 1024px (desktop)

### Data Structure (projects-data.js)
```javascript
{
  id: 'unique-id',
  title: 'Project Title',
  category: 'web|design|consulting',
  description: 'Short description',
  image: 'assets/images/preview.jpg',
  technologies: ['Tech1', 'Tech2'],
  features: ['Feature1', 'Feature2'],
  link: 'https://example.com' // optional
}
```

## Key Development Patterns

### Adding New Projects/Services
1. Edit `projects-data.js` to add new entry
2. Place preview image in `assets/images/`
3. No rebuild needed - refresh browser

### Modifying Styles
- Update CSS variables in `:root` for global changes
- Component styles are grouped by section in `styles.css`
- Animations use `transform` and `opacity` for performance

### Performance Considerations
- Images lazy-loaded via Intersection Observer
- CSS animations use `will-change` and hardware acceleration
- DOM updates batched in animation frames

### Testing Changes
- Check responsive design at 375px, 768px, 1024px, 1440px
- Test modal functionality and keyboard navigation
- Verify smooth scroll and animations
- Check browser console for any errors

## Important Notes

- **No build step** - Direct file editing, no compilation needed
- **Single page** - All content in index.html, navigation via smooth scroll
- **Business theme** - Maintain professional tone and corporate styling
- **Performance focus** - Keep Lighthouse scores above 95
- **Vanilla JS** - No frameworks, use native DOM APIs
- **Browser support** - Modern browsers only (ES6+ features used)