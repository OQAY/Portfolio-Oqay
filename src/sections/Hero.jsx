function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Transformando Ideias em Soluções Digitais</h1>
          <p className="hero-subtitle">Desenvolvimento web profissional e consultoria em tecnologia para impulsionar seu negócio</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">Ver Portfólio</a>
            <a href="#contact" className="btn btn-secondary">Solicitar Orçamento</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="assets/hero/business-hero.svg" 
               alt="Soluções digitais profissionais - Dashboard com métricas de sucesso" 
               className="hero-img"
               loading="eager" />
        </div>
      </div>
    </section>
  );
}

export default Hero;