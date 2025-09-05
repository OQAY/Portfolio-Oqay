function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <span className="logo-text">Portfolio</span>
        </div>
        <ul className="nav-menu">
          <li><a href="#about" className="nav-link">Sobre</a></li>
          <li><a href="#services" className="nav-link">Serviços</a></li>
          <li><a href="#projects" className="nav-link">Projetos</a></li>
          <li><a href="#contact" className="nav-link">Contato</a></li>
        </ul>
        <button className="mobile-menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;