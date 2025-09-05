function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Serviços Oferecidos</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3 className="service-title">Desenvolvimento Web</h3>
            <p className="service-description">Criação de websites e aplicações web modernas, responsivas e otimizadas para conversão e performance.</p>
            <ul className="service-benefits">
              <li>Interface moderna e intuitiva</li>
              <li>Otimização para mecanismos de busca</li>
              <li>Responsivo em todos os dispositivos</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3 className="service-title">Soluções Personalizadas</h3>
            <p className="service-description">Desenvolvimento de sistemas sob medida para otimizar processos internos e aumentar a produtividade da sua empresa.</p>
            <ul className="service-benefits">
              <li>Automação de processos</li>
              <li>Integração com sistemas existentes</li>
              <li>Escalabilidade e performance</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3 className="service-title">Consultoria Digital</h3>
            <p className="service-description">Análise e consultoria em tecnologia para identificar oportunidades de crescimento e otimização digital.</p>
            <ul className="service-benefits">
              <li>Análise de necessidades</li>
              <li>Estratégias de digitalização</li>
              <li>Suporte técnico especializado</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;